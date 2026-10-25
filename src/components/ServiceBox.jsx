import DiamondIcon from "@mui/icons-material/Diamond";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ServiceBox({ active }) {
  return (
    <div
      className={`service-box flex-items-center ${active} bg-img flex-col gap-2`}
    >
      <DiamondIcon className="icon" />
      <h3 className="font-bold text-lg">Place Renovation</h3>
      <p>
        Transform any room with new flooring, built-in storage, doors and
        trim, carefully planned and finished to match your existing style.
      </p>
      <span className="cursor-pointer">
        Learn More <KeyboardDoubleArrowRightIcon />
      </span>
    </div>
  );
}
