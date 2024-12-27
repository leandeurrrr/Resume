export default function Work() {
    const jobs = [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        year: "2022 - Present",
        description: "Worked on developing responsive user interfaces and improving UX.",
      },
      {
        title: "Junior Web Developer",
        company: "WebWorks Studio",
        year: "2020 - 2022",
        description: "Assisted in building e-commerce websites and maintaining existing projects.",
      },
    ];
  
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Work History</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <h3>
                {job.title} at {job.company}
              </h3>
              <p>
                <strong>{job.year}</strong>
              </p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }