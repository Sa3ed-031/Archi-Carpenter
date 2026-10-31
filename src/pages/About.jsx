import ForestIcon from "@mui/icons-material/Forest";
import NotFound from "./NotFound";

export default function About() {
  return (
    <div className="about-page-container not-found-page-container">
      <NotFound about />

      <div className="about-page-stats professionals flex py-8">
        <div className="right">
          <div className="img-box">
            <div className="img bg-img"></div>
          </div>
          <div className="just-img bg-img"></div>
        </div>
        <div className="left">
          <h2>We Are Custom Woodworking</h2>
          <p>
            Archi Carpenter is a family-run workshop building bespoke furniture,
            kitchens and doors that blend timeless craft with modern design.
          </p>
          <button className="hover-scale-btn">Learn More</button>
        </div>
      </div>

      <div className="about-page-features flex-items-center justify-center gap-2">
        {[
          { value: "30", label: "Skilled craftsmen" },
          { value: "+150", label: "Kitchens installed" },
          { value: "+100", label: "Five-star reviews" },
        ].map((item, i) => (
          <div key={i} className={`${item.value == "+150" ? "special" : ""}`}>
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="quality-workmanship">
        <div className="quality-content flex-items-center flex-col">
          <h1>Quality Workmanship At Competitive Prices</h1>
          <p>
            Expert joinery, premium timber and fair pricing on every project,
            big or small, done right.
          </p>
          <div className="features flex justify-center flex-wrap gap-2">
            <Feature title="Experienced" text="Since 2006" />
            <Feature white title="Fully Insured" text="Public liability cover" />
            <Feature white title="Guaranteed" text="10-year warranty" />
            <Feature title="On Schedule" text="Agreed dates, kept" />
          </div>
        </div>
      </div>

      <div className="about-page-team flex">
        <div className="left flex flex-col gap-2 justify-between">
          <h1 className="font-bold">Expert Team</h1>
          <p>
            Our carpenters, joiners and designers bring decades of combined
            experience to every kitchen, staircase and custom piece we build.
          </p>
          <span>12 master carpenters and certified joiners</span>
          <span>In-house designers for 3D plans and drawings</span>
          <button className="hover-scale-btn">See More</button>
        </div>
        <div className="right flex gap-2">
          <div className="bg-img"></div>
          <div className="bg-img two"></div>
        </div>
      </div>

      <div className="about-page-newsletter flex justify-center">
        <div className="left flex flex-col">
          <h1>Our Newsletters</h1>
          <p>Get woodworking tips, new projects and seasonal offers.</p>
        </div>
        <div className="right flex-items-center">
          <input type="text" placeholder="Email" />
          <button className="hover-scale-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

function Feature({ white = false, title, text }) {
  return (
    <div
      className={`feature ${
        white ? "bg-amber-50 white" : ""
      } p-6 rounded-sm w-[45%] text-center flex-items-center flex-col`}
    >
      <ForestIcon />
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
}
