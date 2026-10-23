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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          fuga aliquam voluptate, facilis similique, repellat esse architecto
          debitis.
        </p>
        <button className="hover-scale-btn">Request</button>
      </div>
    </div>
  );
}
