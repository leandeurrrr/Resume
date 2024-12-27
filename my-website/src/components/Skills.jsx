import ProgressBar from "./ProgressBar";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h2>My Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <span>{skill.name}</span>
            <ProgressBar value={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
}