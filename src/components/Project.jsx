import { Link } from "react-router-dom";

import project1 from "../assets/pinterest-pics/project-1.jpg";
import project2 from "../assets/pinterest-pics/project-2.jpg";
import project3 from "../assets/pinterest-pics/project-3.jpg";
import project4 from "../assets/pinterest-pics/project-4.jpg";
import project5 from "../assets/pinterest-pics/project-5.jpg";
import project6 from "../assets/pinterest-pics/project-6.jpg";
import project7 from "../assets/pinterest-pics/project-7.jpg";
import project8 from "../assets/pinterest-pics/project-8.jpg";
import project9 from "../assets/pinterest-pics/project-9.jpg";
import project10 from "../assets/pinterest-pics/project-10.jpg";
import project11 from "../assets/pinterest-pics/project-11.jpg";
import project12 from "../assets/pinterest-pics/project-12.jpg";
import project13 from "../assets/pinterest-pics/project-13.jpg";
import project14 from "../assets/pinterest-pics/project-14.jpg";
import project15 from "../assets/pinterest-pics/project-15.jpg";
import project16 from "../assets/pinterest-pics/project-16.jpg";

const projectImages = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project7,
  8: project8,
  9: project9,
  10: project10,
  11: project11,
  12: project12,
  13: project13,
  14: project14,
  15: project15,
  16: project16,
};

export default function Project({ img }) {
  const imageSrc = projectImages[img] || project1;

  return (
    <Link
      to={`/project/${img}`}
      className="project rounded-[0.4rem] overflow-auto w-[18%]"
    >
      <img src={imageSrc} alt="" width="100%" />
      <div className="project-info">
        <h3>Modern Living-Room</h3>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </Link>
  );
}
