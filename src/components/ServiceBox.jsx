import DiamondIcon from "@mui/icons-material/Diamond";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ServiceBox({ active, title, text }) {
  return (
    <div
      className={`service-box flex-items-center ${active} bg-img flex-col gap-2`}
    >
      <DiamondIcon className="icon" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{text}</p>
      <span className="cursor-pointer">
        Learn More <KeyboardDoubleArrowRightIcon />
      </span>
    </div>
  );
}
