const services = {
  1: {
    title: "Custom Furniture",
    text: "Dining tables, beds, bookcases and benches designed around your home and built from solid hardwood in our own workshop.",
  },
  2: {
    title: "Fitted Kitchens",
    text: "Hand-built cabinets, worktops and islands with soft-close hardware, planned to make the most of every inch of your kitchen.",
  },
  3: {
    title: "Doors & Staircases",
    text: "Solid wood internal and front doors, frames, handrails and full staircases, made to measure and fitted by our own team.",
  },
};

export default function Service({ img = 1 }) {
  const { title, text } = services[img] || services[1];

  return (
    <div className="srv">
      <div className={`img bg-img img-${img}`}></div>
      {/* <img
        src={`public/pinterest-pics/service-${img}.jpg`}
        alt=""
        width="50%"
      /> */}
      <div className="srv-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="hover-scale-btn">Request</button>
      </div>
    </div>
  );
}
