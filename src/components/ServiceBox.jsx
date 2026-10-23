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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aliquid
        facilis numquam dolorum accusantium id laborum debitis veniam.
      </p>
      <span className="cursor-pointer">
        Learn More <KeyboardDoubleArrowRightIcon />
      </span>
    </div>
  );
}
