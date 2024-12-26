import { Link, Form, useActionData, useNavigate } from "react-router-dom";
import "../styling/Sign_in.css";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";

const Sign_in = () => {
  const { addData } = useContext(UserContext);
  const actionData = useActionData();
  const navigate = useNavigate();

  const { error, user } = actionData || {};
  useEffect(() => {
    if (user) {
      console.log(user);
      addData(user);
      navigate("/user/dashboard");
    }
  }, [user, addData, navigate]);
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Hey, Welcome Back!</h1>
        <p className="signin-subtitle">We are very happy to see you back!</p>
        <Form className="sign_in_form" method="POST">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="inputEmail3"
              placeholder="absdf@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="inputPassword3"
              placeholder="********"
              required
            />
          </div>
          <p className="terms">
            By continuing, you agree to the DestLab{" "}
            <Link to="#">terms of service</Link> and{" "}
            <Link to="#">privacy policy</Link>.
          </p>
          <button type="submit" className="btn-login">
            Login
          </button>
        </Form>
        <p className="signup-text">
          Don’t have an account? <Link to="/sign-up">Sign Up here!</Link>
        </p>
      </div>
    </div>
  );
};
export async function to_User({ request }) {
  const formData = await request.formData();
  const getData = Object.fromEntries(formData);
  const res = await fetch("http://localhost:3551/sign-in", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getData),
  });
  const data = await res.json();
  if (
    data.error &&
    data.error === "Authentication failed: Invalid credentials"
  ) {
    alert("please enter the right email or password");
  } else {
    return data;
  }
}
export default Sign_in;
