import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>Hi I'm Amber!</h1>
        <div className="about-grid">
          <h3>Why People Hire Me</h3>
          <p className="about-style">
            I'm a designer and front end engineer who is driven by an
            unquenchable curiosity. My background in consumer psychology, B2B
            trend buying, and emerging media management help guide me in
            executing creative and visually stunning designs. Strong experience
            with the integration, training, and use of POS systems. This
            includes an ability to inform intelligent business strategies by
            generating reports from the POS database to review patterns in
            inventory, consumer behavior, and sales.
          </p>

          {/* <h3>The Other Stuff About Me</h3> */}

          <div className="stuff-container">
            <div className="list-style">
              <ul>
                <h4>Happiness is:</h4>
                <li>
                  Holding a pen that feels balanced and expensive, yet not
                  overly heavy, in the hand.
                </li>
                <li>
                  Getting lost in great photography, the kind where just one
                  image compells my brain to dream up a whole new world of
                  characters.
                </li>
                <li>
                  Discovering a notebook that lays perfectly flat because it is
                  sewn with multiple signatures.
                </li>
                <li>
                  Picking out a pair of shoes that I'll be able to wear with any
                  outfit, all year long.
                </li>
                <li>
                  Remembering to put on chapstick at least twice in the same
                  day.
                </li>
              </ul>
            </div>

            <div className="list-style">
              <ul>
                <h4>Podcasts while coding:</h4>
                <li>Syntax</li>
                <li>Design Matters by Debbie Millman</li>
                <li>Crime Junkie</li>
                <li>99% Invisible</li>
                <li>The Tim Ferris Show</li>
              </ul>
            </div>

            <div className="list-style">
              <ul>
                <h4>Books that never get old:</h4>
                <li>Making and Breaking the Grid</li>
                <li>Don't Make Me Think</li>
                <li>The Subtle Art of Not Giving a F*ck</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compelled to try everything -
//         <span style={{ fontStyle: "italic" }}> at least once.</span>

// Specialized in understanding consumer trends, recent experience includes analyzing inventory and sales reports in a retail oriented database to inform buying decisions in large purchase orders for B2B sales
