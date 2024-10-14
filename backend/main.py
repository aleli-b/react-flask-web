import os
from dotenv import load_dotenv
from flask import request, jsonify
from config import app, db
from models import Contact
from waitress import serve

load_dotenv()

host = os.getenv("FLASK_HOST", "127.0.0.1")
port = int(os.getenv("FLASK_PORT", 5000))
debug = os.getenv("FLASK_DEBUG", "false").lower() in ["true", "1", "t"]


@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts}), 200


@app.route("/contacts", methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    if not first_name or not last_name or not email:
        return (
            jsonify({"message": "You must fill out every field"}),
            400
        )

    email_check = Contact.query.filter_by(email=email).first()
    if email_check:
        return jsonify({"message": "Email already exists!"}), 400

    new_contact = Contact(first_name=first_name,
                          last_name=last_name, email=email)

    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 400

    return jsonify({"message": f"User {first_name} {last_name} created!"}), 201


@app.route("/contacts/<int:id>", methods=["PATCH"])
def update_contact(id):
    contact = Contact.query.get(id)
    if not contact:
        return jsonify({"message": "Contact not found!"}), 404

    data = request.json
    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = data.get("email", contact.email)

    db.session.commit()

    return jsonify({"message": "Contact updated!"}), 200


@app.route("/contacts/<int:id>", methods=["DELETE"])
def delete_contact(id):
    contact = Contact.query.get(id)
    if not contact:
        return jsonify({"message": "Contact not found!"}), 404

    db.session.delete(contact)
    db.session.commit()

    return jsonify({"message": "Contact deleted!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    if debug:
        app.run(host=host, port=port, debug=debug)
    else:
        serve(app, host=host, port=port)
