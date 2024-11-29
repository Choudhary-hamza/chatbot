const Sign_up = () => {
  return (
    <form className="sign_up_form">
      <div className="row name_row">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          style={{ width: "200%" }}
        />
      </div>
      <div className="row name_row">
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="confirminputPassword4" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cofirminputPassword4"
          />
        </div>
      </div>
      <div className="row name_row">
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
      <div className="col-12">
        <div className="form-check check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
  );
};
export default Sign_up;
