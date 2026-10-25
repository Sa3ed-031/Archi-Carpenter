import CabinIcon from "@mui/icons-material/Cabin";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

export default function FeatureCard({ img, className }) {
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
      <h3>Attention to Detail</h3>
      <p>
        Every joint, edge and finish is checked by hand. We take the time to
        get the small things right, so your furniture looks and feels perfect
        for years to come.
      </p>
    </div>
  );
}
