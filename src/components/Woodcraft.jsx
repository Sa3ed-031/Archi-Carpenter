export default function Woodcraft({ imgUrl }) {
  return (
    <div
      className="woodcraft"
      // style={{
      //   // backgroundImage: `url('${imgUrl}')`,
      //   backgroundImage: "url('/src/assets/pinterest-pics/hero-slider-1.jpg')",
      // }}
    >
      <img src={imgUrl} alt="" />
    </div>
  );
}
