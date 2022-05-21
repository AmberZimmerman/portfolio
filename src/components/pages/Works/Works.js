import React from "react";

export default function Works({ projects }) {
  // const leftWorks = {
  //   width: "32%",
  //   backgroundColor: "yellow",
  // };

  // const rightWorks = {
  //   width: "68%",
  //   backgroundColor: "red",
  // };

  // const worksGrid = {
  //   display: "grid",
  //   gridTemplateColumns: "10px 33% 10px 33% 10px 33% 10px",
  // };

  return (
    // <section style={{ height: "800px", display: "flex" }}>
    //   <div style={leftWorks}>
    //     <h1>Hiiiiiiiiii</h1>
    //   </div>
    //   <div style={rightWorks}>
    //     <div style={worksGrid}>
    //       <div
    //     </div>
    //   </div>
    // </section>
    <div>
      <section className="container">
        <aside>
          <h2>THESE ARE ALL MY PROJECTS!</h2>
          <p>blah blah blah here are my projects</p>
        </aside>
        <div className="card"></div>
      </section>

      <div>
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <img src={project.image} alt="project screenshot" />
            {`${project.title} ${project.description} ${project.technology}`}
          </div>
        ))}
      </div>
    </div>
  );
}
