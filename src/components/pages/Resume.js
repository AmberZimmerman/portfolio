export default function Resume() {
  const resumeStyle = {
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  const resumeContainer = {
    width: "750px",
    margin: "3.5rem 0px",
  };

  const buttonContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: "2.5rem 0",
  };

  const resumeButton = {
    width: "fit-content",
    borderRadius: "8px",
    height: "40px",
    background: "rgb(230, 165, 37)",
  };

  return (
    <section style={resumeStyle}>
      <div style={resumeContainer}>
        <div className="resume-intro">
          <h3
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Full stack developer passionate about executing intuitive UX / UI
            while also avoiding layouts that appear boring or conventional. Able
            to leverage years of combined experience working within fashion,
            art, and retail enviornments which gives me an edge on consumer
            psychology and design trends.
          </h3>
          <div style={buttonContainer}>
            <button style={resumeButton}>
              <a
                style={{ color: "black", fontWeight: "500" }}
                href="/resume/amber_zimmerman_webdeveloper_resume_2022_v2.pdf"
                download
              >
                Download resume as PDF
              </a>
            </button>
          </div>
        </div>
        <div className="education-container">
          <h1>EDUCATION</h1>
          <div className="education-card-container">
            <div className="education-card">
              <p>2022 Technical Certificate</p>
              <h3>Full Stack Web Developer Boot Camp</h3>
              <p>University of Denver</p>
            </div>
            <div className="education-card">
              <p>2014 Bachelor of Arts</p>
              <h3>Visual Arts and Emerging Media Management</h3>
              <p>University of Central Florida</p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <h1>SKILLS & EXPERTISE</h1>
          <div className="skills-card-container">
            <div className="skills-card">
              <h3>Front-End Code</h3>
              <p>
                HTML5 / CSS3 / JS / ES6 / React / Redux / JSX / CSS-in-JS / CSS
                Frameworks / Flexbox / CSS Grid / MVC / PWA / Responsive Design
                / Local Storage / Indexed DB /
                {/* HTML/CSS / JavaScript / React / Handlebars / CSS-in-JS /
                Bootstrap / PWA / Webpack / Workbox / JQuery / Node.JS tooling /
                Materialize / JSX / */}
              </p>
            </div>
            <div className="skills-card">
              <h3>Back-End Code</h3>
              <p>
                Javascript / NodeJS / Express / MySQL / Sequelize / CRUD /
                GraphQL / APIs / MongoDB / Mongoose / MERN stack / RESTful web
                services / JSON / OOP / Apollo / Stripe / CMS /
                {/* Javascript / NodeJS / MySQL / Sequelize / JSON / OOP / MongoDB /
                Mongoose / MERN stack / RESTful web services / APIs / Express /
                CRUD / GraphQL / Apollo / */}
              </p>
            </div>
            <div className="skills-card">
              <h3>Software & Other Tools</h3>
              <p>
                Adobe CC / Google Suite / Sketch / Miro / Lucidchart / Kanban /
                Git / Github / Heroku / Insomnia / Lighthouse / Mongo DB Compass
                / Webpack / Workbox / VS code /
                {/* Adobe CC / Google Suite / Sketch / Miro / Kanban / Github /
                Heroku / Insomnia / Postman / Lighthouse / Mongo DB Compass /
                Lucidchart / */}
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h1>WORK HIGHLIGHTS</h1>
          <div className="experience-card">
            <h2>JUN 2018-PRESENT</h2>
            <h3>Assistant Manager @ Two Hands Paperie Boulder, CO</h3>
            <h4>(Specialty Art Supplies & Art Classes)</h4>
            <ul>
              <li>
                Spearheaded the stores implementation to a new POS system,
                Lightspeed, by being the main contact for demos, solving IT
                issues, and subsequently writing the user manual for staff
                training.
              </li>
              <li>
                Imported/converted existing inventory data, as well as
                customizing the POS with store specific functions, thus
                resulting in a fully functional B2C sales experience within a
                matter of weeks.
              </li>
              <li>
                Organized large B2B purchase orders for 10+ vendors quarterly
                and assisted with over 100+ vendors.
              </li>
              <li>
                Generated inventory / sales reports from POS database to analyze
                consumer trends. Used information to target unit amounts and
                avoid unnecessary overhead when completing purchase orders.
              </li>
              <li>
                Lead merchandising changes during seasonal transitions / events.
                Included the physical arrangement of items as well as the
                creation of in store promotional materials.
              </li>
              <li>
                Proposed and executed a sales event that ran both in-store and
                online. Highlights included new product research, ordering
                product, overseeing marketing materials and educating staff.
                Outcome was a 100% revenue increase for both web and store sales
                during the event day.
              </li>
              <li>
                Implemented new training strategy that focused on employee
                education and wellness which resulted in increased employee
                retention and employees confidence to make higher revenue sales
                over time.
              </li>
              <li>
                Communicated effectively to strengthen store relationships
                between corporate vendors, sales reps, small local vendors,
                teachers for store held classes, online customers and in store
                customers.
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <h2>MAR 2018-APRIL 2019</h2>
            <h3>Key Holder @ Bliss in Boulder, CO</h3>
            <h4>(Gift & Jewelry Store)</h4>

            <ul>
              <li>
                Demonstrated an ability to input data according to the stores
                standards when entering in new vendors or new products into the
                POS system. Organized data entry in POS using matrix’s when
                appropriate.
              </li>
              <li>
                Merchandised store product and created fresh seasonal table
                displays that delighted customers and resulted in higher sales.
                Designed and installed inventive paper sculptures for display in
                front large storefront windows which drove attention to the
                store and increased foot traffic.
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <h2>JAN 2017 - SEP 2017</h2>
            <h3>Buyer @ Buffalo Exchange in Boulder, CO</h3>
            <h4>(Buy Sell Trade Clothing Store)</h4>
            <ul>
              <li>
                Appraised used clothing on the spot utilizing a learned
                understanding of fashion construction, trends, brands etc. over
                multiple decades. Proper pricing ensured that both seller and
                the store achieved the highest profit possible maintaining the
                symbiotic relationship.
              </li>
              <li>
                Generated renewed customer interest in the jewelry case by
                exceptionally merchandising product on shelves in the case.
                Weekly sales reports, that ordered store categories by number of
                units sold, showed the jewelry category moving from 15th on a
                list to 8th.
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <h2>SEP 2014 - DEC 2016</h2>
            <h3>Production Shift Lead @ Rifle Paper Co. in Winter Park, FL</h3>
            <h4>(Stationery Store)</h4>

            <ul>
              <li>
                For Production: Worked efficiently during timed intervals to
                build/assemble notebooks, planners, and numerous other
                stationary products for sale. Was ranked the 2nd fastest, in a
                list of at least 100 that ranked employee assembly speeds.
              </li>
              <li>
                As shift lead, I ensured a staff of at least 100 other workers
                stayed on pace while checked their product for quality control
                and matching inventory requirements for incoming purchase
                orders.
              </li>
            </ul>
          </div>
          {/* <div className="experience-card">
            <h2>APR 2008 - JAN 2013</h2>
            <h3>
              Hostess/Server/Bartender/Shift Supervisor @ Winghouse in Sanford,
              FL
            </h3>
            <h4>(Sports Bar & Family Restaurant)</h4>

            <ul>
              <li>
                Obtained social skills that facilitated in forming a loyal
                customer base. Excelled at achieving higher check average totals
                by providing attentive service and consistently up-selling.
                Outranked other servers during sales competitions.
              </li>
              <li>
                As Head Wait shift supervisor, trained new servers on job
                requirements, wrote floor charts and assigned closing duties to
                other servers - allowing shifts to run optimally. Supervised a
                total staff of at least 50.
              </li>
            </ul>
          </div> */}
        </div>
        <div className="soft-skills">
          <h1>SOFT SKILLS</h1>
          <p>
            Flexibility / Team First Mindset / Attention to detail / Quality
            control / Consumer Psychology / Leadership / Innovation / Time
            Management / Organization Strong communication skills / Ability to
            target specific client needs
          </p>
        </div>
      </div>
    </section>
  );
}
