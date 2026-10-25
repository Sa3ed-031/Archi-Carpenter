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
            <h1>Oops..Page Not Found!</h1>
          </>
        )}
        <p>
          Skilled craftsmanship, honest advice and beautiful woodwork built to
          last for every home and business
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
