import { Link } from "react-router-dom";

import projectImages from "../data/projectImages";

const projectInfo = {
  1: { title: "Modern Living Room", text: "Custom oak shelving." },
  2: { title: "Shaker Kitchen", text: "Painted ash cabinets." },
  3: { title: "Walnut Dining Table", text: "Seats eight, solid top." },
  4: { title: "Floating Staircase", text: "Oak treads, steel rail." },
  5: { title: "Master Wardrobe", text: "Sliding fitted doors." },
  6: { title: "Home Office", text: "Built-in desk and shelves." },
  7: { title: "Garden Pergola", text: "Cedar frame, slatted roof." },
  8: { title: "Entrance Door", text: "Solid oak, hand-finished." },
  9: { title: "Kids' Bedroom", text: "Bunk bed with storage." },
  10: { title: "Media Wall", text: "Hidden-cable TV unit." },
  11: { title: "Boutique Counter", text: "Reclaimed pine retail desk." },
  12: { title: "Reading Nook", text: "Window seat with drawers." },
  13: { title: "Hardwood Deck", text: "Ipe boards, 40 m²." },
  14: { title: "Bathroom Vanity", text: "Teak, water-sealed." },
  15: { title: "Library Wall", text: "Floor-to-ceiling cases." },
  16: { title: "Antique Restoration", text: "Victorian dresser revived." },
};

export default function Project({ img }) {
  const imageSrc = projectImages[img] || projectImages[1];
  const { title, text } = projectInfo[img] || projectInfo[1];

  return (
    <Link
      to={`/project/${img}`}
      className="project rounded-[0.4rem] overflow-auto w-[18%]"
    >
      <img src={imageSrc} alt="" width="100%" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}
