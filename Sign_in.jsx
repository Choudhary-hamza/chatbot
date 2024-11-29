import { Link } from "react-router-dom";

const Sign_in = () => {
  return (
    <form className="sign_in_form">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
      <p className="sign_up_tag">
        not sign in?<Link to="/sign-up">sign up</Link>
      </p>
    </form>
  );
};
export default Sign_in;
