import CabinIcon from "@mui/icons-material/Cabin";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

const features = {
  1: {
    title: "Master Craftsmen",
    text: "Our carpenters have spent years at the bench. Every joint, edge and finish is cut and checked by hand, so your piece looks and feels right for decades.",
  },
  2: {
    title: "Sustainable Timber",
    text: "We source FSC-certified oak, walnut and ash from trusted mills, and reuse offcuts wherever we can, so beautiful woodwork doesn't cost the forest.",
  },
  3: {
    title: "Design Guidance",
    text: "Not sure what you want yet? We sketch ideas, bring wood and finish samples to your home, and help you choose a design that fits your space and budget.",
  },
  4: {
    title: "Made to Measure",
    text: "No off-the-shelf sizes. We survey your room to the millimetre and build each wardrobe, shelf and kitchen unit to fit awkward corners and sloped ceilings.",
  },
};

export default function FeatureCard({ img, className }) {
  const { title, text } = features[img] || features[1];

  return (
    <div className={`card ${className}`}>
      <div className="img">
        {img === 1 ? (
          <CarpenterIcon />
        ) : img === 2 ? (
          <CabinIcon />
        ) : img === 3 ? (
          <TipsAndUpdatesIcon />
        ) : (
          <WbIncandescentIcon />
        )}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
