import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projekty</h2>
      <div className="project">
        <h3>Projekt 1</h3>
        <p>Opis projektu...</p>
        <a href="https://github.com/twoje-konto/projekt1" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="project">
        <h3>Projekt 2</h3>
        <p>Opis projektu...</p>
        <a href="https://github.com/twoje-konto/projekt2" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
