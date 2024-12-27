export default function Education() {
    const schools = [
      {
        degree: "Bachelor's in Computer Science",
        school: "State University",
        year: "2018 - 2022",
      },
      {
        degree: "High School Diploma",
        school: "Springfield High School",
        year: "2014 - 2018",
      },
    ];
  
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Education</h2>
        <ul>
          {schools.map((school, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <h3>{school.degree}</h3>
              <p>{school.school}</p>
              <p>
                <strong>{school.year}</strong>
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }