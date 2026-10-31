export default function QualityWorkMapShip() {
  return (
    <div className="quality-workmanship bg-img flex-items-center text-[#31374f]">
      <div className="quality-content flex-items-center flex-col">
        <h1>Quality Workmanship At Competitive Prices</h1>
        <p>
          Tell us about your project and get a free, no-obligation quote
          from our expert carpenters.
        </p>
        <form className="flex-items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="name-email">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <textarea name="message" id="message" placeholder="Message" />
          <button className="hover-scale-btn" type="submit">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
