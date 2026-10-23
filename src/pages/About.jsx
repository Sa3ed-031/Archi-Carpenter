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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas
            esse consectetur, blanditiis consequatur omnis quia cumque.
          </p>
          <button className="hover-scale-btn">Learn More</button>
        </div>
      </div>

      <div className="about-page-features flex-items-center justify-center gap-2">
        {[30, +150, +100].map((item, i) => (
          <div key={i} className={`${item == "+150" ? "special" : ""}`}>
            <span>{item}</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        ))}
      </div>

      <div className="quality-workmanship">
        <div className="quality-content flex-items-center flex-col">
          <h1>Quality Workmanship At Competitive Prices</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            laborum tempore hic minus molestias.
          </p>
          <div className="features flex justify-center flex-wrap gap-2">
            <Feature />
            <Feature white />
            <Feature white />
            <Feature />
          </div>
        </div>
      </div>

      <div className="about-page-team flex">
        <div className="left flex flex-col gap-2 justify-between">
          <h1 className="font-bold">Expert Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            fuga excepturi impedit eum cumque, earum dolorum maiores,
          </p>
          <span>Hi there</span>
          <span>Hi there</span>
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="right flex-items-center">
          <input type="text" placeholder="Email" />
          <button className="hover-scale-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

function Feature({ white = false }) {
  return (
    <div
      className={`feature ${
        white ? "bg-amber-50 white" : ""
      } p-6 rounded-sm w-[45%] text-center flex-items-center flex-col`}
    >
      <ForestIcon />
      <span>Experienced</span>
      <p>Lorem ipsum</p>
    </div>
  );
}
