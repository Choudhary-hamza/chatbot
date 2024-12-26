import { Link } from "react-router-dom";
import brain from "../assets/brain.jpg";

const Home_main = () => {
  return (
    <>
      <div className="mainFirst">
        <div className="card w-75 mb-3 card">
          <div className="card-body">
            <h5 className="card-title">Releive AI</h5>
            <p className="card-text">
              Your smart, supportive companion for mental health—offering
              personalized care, resources, and 24/7 support.
            </p>
            <Link to="/sign-in" className="btn btn-primary">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="container marketing arketing1">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Company mission
            </h2>
            <p className="lead">
              Our mission is to make mental health care accessible, empathetic,
              and engaging for everyone. With 24/7 support, crisis management,
              and personalized insights, we’re here to empower you to take
              charge of your mental well-being and find balance in life.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={brain}
              alt="Dynamic Image"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      <footer className="container">
        <p className="float-end">
          <a xhref="#">Back to top</a>
        </p>
        <p>
          © 2024–2025 Company, Inc. · <Link to="Sign-in">About us</Link> ·{" "}
          <a xhref="#">Terms</a>
        </p>
      </footer>
    </>
  );
};
export default Home_main;
