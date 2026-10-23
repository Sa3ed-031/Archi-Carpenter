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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus in
            facilis amet earum ullam blanditiis, aliquam labore dolores fugiat
            repellat accusantium.
          </p>
        </div>
      </div>

      <div className="professionals flex-items-center">
        <div className="left">
          <h2>We Will Make It a Valuable Item</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas
            esse consectetur, blanditiis consequatur omnis quia cumque.
          </p>
          {ulForProfAndPricing}
          <button className="hover-scale-btn">Learn More</button>
        </div>
        <div className="right">
          <div className="img-box">
            <div className="box">
              <DiamondIcon />
              <h3>Professionals</h3>
              <p>Lorem ipsum dolor sit.</p>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                tempore ipsum modi, Praesentium obcaecati perspiciatis beatae.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            mollitia eum sed commodi, numquam sit consectetur.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              in sunt repudiandae.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              in sunt repudiandae.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            nam saepe, Tempore quae atque.
          </p>
        </div>
        <div className="features flex-items-center justify-evenly">
          <div className="feature">
            <div className="icon">
              <PublishIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              temporibus doloremque, id repellat architecto ullam mollitia qui
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <RotateRightIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              temporibus doloremque, id repellat architecto ullam mollitia qui
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <PaymentIcon />
            </div>
            <h2>Submit A Request</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              temporibus doloremque, id repellat architecto ullam mollitia qui
            </p>
          </div>
        </div>
      </div>

      <OurProjectWoodCraft />
    </div>
  );
}
