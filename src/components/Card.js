import "../styles/Card.css";
import { Share } from "@mui/icons-material";

const Card = () => {
  return (
    <div
      className="card portfolio-card "
      style={{
        backgroundColor: "#1c1c3a",
        color: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s",
        position: "relative",
      }}
    >
      <img
        src="/images/particles.jpg"
        className="card-img-top"
        alt="images"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div
        className="card-body"
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h5 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>
          Website Coding
        </h5>
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          HTML, CSS, JS
        </p>
      </div>
      {/* share icon */}
      <div
        className="share-icon"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "#ffffff20",
          borderRadius: "50%",
          padding: "8px",
          cursor: "pointer",
          transition: "background 0.3s, transform 0.3s",
        }}
      >
        <Share style={{ color: "white", fontSize: "20px" }} />
      </div>
    </div>
  );
};

export default Card;
