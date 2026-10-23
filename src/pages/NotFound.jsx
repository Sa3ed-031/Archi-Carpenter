import { Link } from "react-router-dom";

export default function NotFound({ about = false }) {
  return (
    <div className="not-found-page-container">
      <div className="img bg-img"></div>
      <div className="not-found-content not-found-services-projects-content flex-items-center">
        {about ? (
          <span>About Us</span>
        ) : (
          <>
            <span>404</span>
            <h1>Opps..Page Not Found!</h1>
          </>
        )}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum rem nemo
          aperiam est necessitatibus delectus
        </p>
        {about ? null : (
          <Link to="/home">
            <button className="hover-scale-btn">Back Home</button>
          </Link>
        )}
      </div>
    </div>
  );
}
