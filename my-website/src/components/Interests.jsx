export default function Interests() {
    const interests = ["Coding", "Music", "Traveling", "Gaming", "Photography", "Sports"];
  
    return (
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>My Interests</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1rem" }}>
          {interests.map((interest, index) => (
            <div
              key={index}
              style={{
                padding: "1rem",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {interest}
            </div>
          ))}
        </div>
      </section>
    );
  }