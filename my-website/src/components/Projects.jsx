export default function Projects() {
    const projects = [
      {
        title: "Personal Portfolio",
        year: "2023",
        description: "A portfolio website showcasing my work and skills.",
        link: "https://your-portfolio-link.com",
      },
      {
        title: "E-commerce Website",
        year: "2022",
        description: "Developed a fully responsive e-commerce platform for a local business.",
        link: "https://ecommerce-example.com",
      },
      {
        title: "Weather App",
        year: "2021",
        description: "A React-based app that fetches and displays real-time weather data.",
        link: "https://weatherapp.com",
      },
    ];
  
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <h3>{project.title} ({project.year})</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }