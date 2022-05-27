import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-grid">
        <div className="intro-container">
          <h1>Hi I'm Amber!</h1>
        </div>
        <div className="about-container">
          <h3>Why People Hire Me</h3>
          <p>
            I'm full stack developer with a passion for well executed UX / UI
            who is driven by an unquenchable curiosity. My background in
            consumer psychology, B2B trend buying, and emerging media management
            help guide me in executing creative and visually stunning designs.
            Strong experience with the integration, training, and use of POS
            systems. This includes an ability to inform intelligent business
            strategies by generating reports from the POS database to review
            patterns in inventory, consumer behavior, and sales.
          </p>
        </div>

        {/* <h3>The Other Stuff About Me</h3> */}
        <div className="joy-container">
          <div className="joy-style">
            <ul>
              <h3>Moments That Brings Me Joy</h3>
              <li>
                Picking out a well made but understated pair of shoes - the kind
                that I'll be able to wear with any outfit, all year long.
              </li>
              <li>
                Writing with a pen that is heavy enough to feel expensive but
                light enough that it wouldn't cause a hand cramp.
              </li>
              <li>
                Stumbling across a photograph or video so unique that instantly
                inspires me to write a story based on it.
              </li>
              <li>
                Discovering a notebook that lays perfectly flat because it is
                sewn with multiple signatures. Bonus if the paper inside was
                made in Japan.
              </li>
              <li>
                Remembering to put on chapstick at least twice in the same day.
              </li>
              <li>
                Shooting film photography and the thrill of anxiously waiting to
                see how the photos develop.
              </li>
            </ul>
          </div>
        </div>
        <div className="stuff-container">
          <div className="list-style">
            <ul>
              <h3>Podcasts while coding:</h3>
              <li>Syntax by Wes Bos and Scott Tolinski</li>
              <li>Design Matters by Debbie Millman</li>
              <li>Crime Junkie by Ashley Flowers and Brit Prawat</li>
              <li>99% Invisible by Roman Mars</li>
              <li>The Tim Ferris Show by Tim Ferris</li>
            </ul>
          </div>
          <div className="list-style">
            <ul>
              <h3>Books I keep around:</h3>
              <li>Making and Breaking the Grid by Timothy Samara</li>
              <li>
                100 Things Every Designer Needs to Know About People by Susan
                Weinschenk
              </li>
              <li>Don't Make Me Think by Steve Krug</li>
              <li>The Subtle Art of Not Giving a F*ck by Mark Manson</li>
              <li>Table Stories by An Bogaerts</li>
              <li>How to Be Great at Your Job Book by Justin Kerr</li>
              <li>Thinking With Type by Ellen Lupton</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compelled to try everything -
//         <span style={{ fontStyle: "italic" }}> at least once.</span>

// Specialized in understanding consumer trends, recent experience includes analyzing inventory and sales reports in a retail oriented database to inform buying decisions in large purchase orders for B2B sales
