import CheckIcon from "@mui/icons-material/Check";
import DiamondIcon from "@mui/icons-material/Diamond";
import ServiceBox from "../components/ServiceBox";
import PublishIcon from "@mui/icons-material/Publish";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import PaymentIcon from "@mui/icons-material/Payment";

// import Grid from "@mui/material/Grid";
// import Woodcraft from "../components/Woodcraft";
import QualityWorkMapShip from "../components/QualityWorkManShip";
import OurProjectWoodCraft from "../components/OurProjectWoodCraft";

const ulForProfAndPricing = (
  <ul className="prof-pricing-ul">
    {Array.from({ length: 3 }).map((_, i) => (
      <li key={i}>
        <CheckIcon className="icon" />
        Quick Delivery
      </li>
    ))}
  </ul>
);

export default function Services() {
  return (
    <div className="services-page-container">
      <div className="services-landing flex-items-center justify-center">
        <div className="img bg-img"></div>
        <div className="content not-found-services-projects-content flex-items-center">
          <span>Services</span>
          <p>
            From custom furniture and fitted kitchens to solid wood doors and
            full renovations, Archi Carpenter crafts every piece with care,
            precision and lasting quality.
          </p>
        </div>
      </div>

      <div className="professionals flex-items-center">
        <div className="left">
          <h2>We Will Make It a Valuable Item</h2>
          <p>
            We select premium hardwoods and finish every joint by hand, turning
            raw timber into furniture your family will treasure for years.
          </p>
          {ulForProfAndPricing}
          <button className="hover-scale-btn">Learn More</button>
        </div>
        <div className="right">
          <div className="img-box">
            <div className="box">
              <DiamondIcon />
              <h3>Professionals</h3>
              <p>Skilled master carpenters.</p>
            </div>
            <div className="img bg-img"></div>
          </div>
          <div className="just-img bg-img"></div>
        </div>
      </div>

      <div className="service-we-provide bg-img flex flex-col">
        <div className="backdrop-blur-[20px]">
          <div className="header flex-items-center">
            <div className="left">
              <h1>Service We Provide</h1>
              <p>
                Whether it is a single bespoke shelf or a complete home fit-out,
                our team handles design, build and installation end to end.
              </p>
            </div>
            <button className="hover-scale-btn">Learn More</button>
          </div>
          <div className="box-list flex flex-wrap justify-center gap-2">
            <ServiceBox active="active" />

            {Array.from({ length: 5 }).map((_, i) => (
              <ServiceBox key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="our-pricing flex gap-4">
        <main className="flex flex-col justify-center gap-4">
          <h1>Our Pricing</h1>
          <p>
            Clear, honest pricing with no hidden costs. Choose the plan that
            fits your project and we will take care of the rest.
          </p>
          {ulForProfAndPricing}
          <div className="renovations">
            <span>Renovations</span>
            <span>96%</span>
          </div>
          <div className="carpentry">
            <span>Carpentry</span>
            <span>90%</span>
          </div>
          <button className="hover-scale-btn">Learn More</button>
        </main>

        <div className="plans flex-items-center gap-4">
          <div className="basic-plan flex-items-center flex-col justify-center gap-4">
            <h2>Basic Plan</h2>
            <p>
              Ideal for small repairs, door fitting and simple custom shelving
              in a single room.
            </p>
            <div className="price">
              <span>$34</span>
              <span>/Month</span>
            </div>
            <button>Purchase Now</button>
            {ulForProfAndPricing}
          </div>
          <div className="basic-plan premuim-plan flex-items-center flex-col justify-center gap-4">
            <h2>Premium Plan</h2>
            <p>
              Full kitchens, bespoke furniture and whole-home renovations with
              priority support.
            </p>
            <div className="price">
              <span>$74</span>
              <span>/Month</span>
            </div>
            <button>Purchase Now</button>
            {ulForProfAndPricing}
          </div>
        </div>
      </div>

      <QualityWorkMapShip />

      <div className="how-we-work flex-items-center flex-col text-center">
        <div className="header flex flex-col gap-3">
          <h1 className="font-bold">How We Work</h1>
          <p>
            A simple three-step process that takes your idea from first sketch
            to finished, installed piece.
          </p>
        </div>
        <div className="features flex-items-center justify-evenly">
          <div className="feature">
            <div className="icon">
              <PublishIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              Tell us about your project, share photos or measurements, and we
              will arrange a free consultation at a time that suits you best.
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <RotateRightIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              Our designers prepare drawings, wood samples and a detailed quote,
              then refine every detail with you until the plan feels just right.
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <PaymentIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              We build and install your piece on schedule, and you pay securely
              in stages, with the final balance due only once you are satisfied.
            </p>
          </div>
        </div>
      </div>

      <OurProjectWoodCraft />
    </div>
  );
}
