import { redirect } from "react-router-dom";
import { Form, Link } from "react-router-dom";
import "../styling/sign_up.css";
const Sign_up = () => {
  return (
    <div className="signup-container">
      <h2>Welcome, let's create an account</h2>
      <p>
        Create an account to keep track of your history for better AI response.
        Once your account has been created, don’t forget to verify your account
        through mail.
      </p>
      <Form className="signup-form" method="POST">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter a strong password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              required
            />
          </div>
        </div>
        <p>
          By continuing you agree to the DestLab{" "}
          <Link to="#">terms of service</Link> and{" "}
          <Link to="#">privacy policy</Link>.
        </p>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <p>
          Have an account? <Link to="/sign-in">Sign in here!</Link>
        </p>
      </Form>
    </div>
  );
};
export async function to_sign_in(data) {
  const formData = await data.request.formData();
  const getData = Object.fromEntries(formData);
  if (getData.password !== getData.confirmPassword) {
    return alert("please enter the same passwords");
  } else {
    try {
      const res = await fetch("http://localhost:3551/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(getData),
      });
      if (res.ok) {
        return redirect("/sign-in");
      } else {
        const error = await res.json();
        return { errors: error.message || "failed to create user" };
      }
    } catch (error) {
      return {
        errors: "there is an error while sign-up data " + error.message,
      };
    }
  }
}
export default Sign_up;
