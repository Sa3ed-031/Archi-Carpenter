export default function Service({ img = 1 }) {
  return (
    <div className="srv">
      <div className={`img bg-img img-${img}`}></div>
      {/* <img
        src={`public/pinterest-pics/service-${img}.jpg`}
        alt=""
        width="50%"
      /> */}
      <div className="srv-content">
        <h3>Attention to Detail</h3>
        <p>
          From precise measurements to a flawless hand-sanded finish, we
          treat every cabinet, door and table as a piece of fine, lasting
          craftsmanship.
        </p>
        <button className="hover-scale-btn">Request</button>
      </div>
    </div>
  );
}
