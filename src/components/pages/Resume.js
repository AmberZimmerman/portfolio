export default function Resume() {
  return (
    <section>
      <header>
        <p>Blah blah blah my resume blah blah</p>
      </header>
      <div className="education">
        <h1>EDUCATION</h1>
        <h3>2022 Technical Certificate</h3>
        <p>Full Stack Web Developer Boot Camp</p>
        <h3>University of Denver</h3>
        <h3>2014 Bachelor of Arts</h3>
        <p>Visual Arts and Emerging Media Management</p>
        <h3>University of Central Florida</h3>
      </div>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Front-End Code</h3>
          <p>
            HTML/CSS / CSS-in-JS / JavaScript / Node.JS tooling / React / MVC -
            Handlebars / Bootstrap / Materialize / PWA / Webpack / Workbox
          </p>
        </div>
        <div className="skills-card">
          <h3>Back-End Code</h3>
          <p>
            Javascript / jQuery / NodeJS / MySQL / sequelize / JSON / OOP / CRUD
            / RESTful web services / Express / MongoDB / Mongoose / MERN stack/
            GraphQL / APIs /
          </p>
        </div>
        <div className="skills-card">
          <h3>Softward & Other Tools</h3>
          <p>
            Adobe CC / Google Suite /Miro / Kanban / Heroku Insomnia / Postman /
            Mongo DB Compass / Lighthouse / Apollo
          </p>
        </div>
      </div>
    </section>
  );
}
