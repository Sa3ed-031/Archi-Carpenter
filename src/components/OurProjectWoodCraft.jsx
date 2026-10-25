import Woodcraft from "./Woodcraft";
import heroSlider1 from "../assets/pinterest-pics/hero-slider-1.jpg";
import heroSlider2 from "../assets/pinterest-pics/hero-slider-2.jpg";
import heroSlider3 from "../assets/pinterest-pics/hero-slider-3.jpg";
import project1 from "../assets/pinterest-pics/services-page-project-1.jpg";
import project2 from "../assets/pinterest-pics/services-page-project-2.jpg";
import project3 from "../assets/pinterest-pics/services-page-project-3.jpg";
import project4 from "../assets/pinterest-pics/services-page-project-4.jpg";
import project6 from "../assets/pinterest-pics/services-page-project-6.jpg";

const projectImages = [
  heroSlider1,
  heroSlider2,
  heroSlider3,
  project1,
  project2,
  project3,
  project4,
  project6,
];

export default function OurProjectWoodCraft() {
  return (
    <div className="our-project-woodcraft flex-items-center flex-col">
      <h1 className="font-bold">Our Project Woodcraft</h1>
      <p>
        Browse a selection of our recent work, from fitted kitchens and
        oak staircases to bespoke tables, doors and complete renovations
      </p>
      <div className="woodcrafts w-full flex">
        {projectImages.map((img, index) => (
          <Woodcraft key={`${img}-${index}`} imgUrl={img} />
        ))}
      </div>
    </div>
  );
}
