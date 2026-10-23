import { Link } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function Logo() {
  return (
    <Link to="/" className="logo pl-[8%]">
      <div className="flex items-center gap-1 text-[#875f45]">
        <ConstructionIcon style={{ fontSize: "4.5rem" }} />
        <div className="flex flex-col justify-center leading-6 items-center">
          <span
            className="name-span uppercase text-[2.5rem]"
            style={{ letterSpacing: "0.15rem" }}
          >
            Archi
          </span>
          <span
            className="w-full uppercase mt-2"
            style={{
              letterSpacing: "0.34rem",
            }}
          >
            carpenter
          </span>
        </div>
      </div>
    </Link>
  );
}
