import "../pages/Home.css";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <div
        className="m"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate3d(0px, 0px, 0px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 416 290"
          fill="none"
        >
          <path
            d="M138.076 262.298L72.6774 1.49253L72.6774 198.728C72.6774 210.686 67.9291 222.155 59.4743 230.619L0.518592 289.643H0.357422V91.8306C0.357422 79.8837 5.09746 68.4237 13.5393 59.9609L72.5137 0.839852L72.4726 0.675781H108.625C129.321 0.675781 147.374 14.7172 152.446 34.7606L216.951 289.643H173.153C156.566 289.643 142.107 278.37 138.076 262.298Z"
            fill="white"
          ></path>
          <path
            d="M414.644 212.7C417.787 225.122 414.108 238.278 404.975 247.274L361.957 289.643L289.637 0.675781H325.79C346.486 0.675781 364.538 14.7172 369.611 34.7606L414.644 212.7Z"
            fill="white"
          ></path>
          <path
            d="M230.499 59.9609L289.637 0.675781V198.728C289.637 210.686 284.889 222.155 276.434 230.619L217.478 289.643H217.317V91.8306C217.317 79.8837 222.057 68.4237 230.499 59.9609Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="yweb">
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            Y
          </div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            W
          </div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            E
          </div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            B
          </div>
        </div>
      </div>
    </Box>
  );
};
