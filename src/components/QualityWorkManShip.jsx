export default function QualityWorkMapShip() {
  return (
    <div className="quality-workmanship bg-img flex-items-center text-[#31374f]">
      <div className="quality-content flex-items-center flex-col">
        <h1>Quality Workmanship At Competitive Prices</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          laborum tempore hic minus molestias.
        </p>
        <form className="flex-items-center">
          <div className="name-email">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <textarea name="message" id="message" placeholder="Message" />
          <button className="hover-scale-btn" type="submit">
            Submit Button
          </button>
        </form>
      </div>
    </div>
  );
}
