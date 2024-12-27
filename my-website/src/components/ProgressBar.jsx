export default function ProgressBar({ value }) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${value}%`,
              height: "100%",
              backgroundColor: "#4caf50",
            }}
          ></div>
        </div>
        <span style={{ marginLeft: "10px" }}>{value}%</span>
      </div>
    );
  }