import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "./SignIn.scss";
import { render } from "react-dom";
function SignIn() {
  const history = useHistory();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  console.log("showPassword", showPassword);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //   const handlePasswordChange = (event) => {
  //     setPasswordType(event.target.value);
  //   };
  const onSubmit = (values) => {
    console.log("values", values);
    const storedUsers = localStorage.getItem("users");
    let parsedUsers = [];

    try {
      parsedUsers = JSON.parse(storedUsers) || [];
      if (!Array.isArray(parsedUsers)) {
        parsedUsers = [];
      }
    } catch (error) {
      console.error("Error parsing storedUsers", error);
    }

    const updatedUsers = [...parsedUsers, values];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    history.push("/employee-table");
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-4 mx-4 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">
                Your name
              </label>
              <div className="col-sm-8">
                <Field
                  name="fullName"
                  type="text"
                  className="form-control"
                  component="input"
                  placeholder="Input your name"
                />
              </div>
            </div>
            <div className="my-4 mx-4 row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email address
              </label>
              <div className="col-sm-8">
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  component="input"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="my-4 mx-4 row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-8 ">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  component="input"
                />
                <div
                  className="password-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled={submitting || pristine}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={form.reset}
                className="btn btn-outline-primary ms-3"
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
      <div className="row my-5 align-items-center justify-content-center g-0">
        <div className="col-8 col-lg-4 col-xl-3">
          <div className="card border-1 text-center mt-3">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="display-3 my-3 text-primary fw-bold">Follow us</p>
              <p className="card-text mx-5 text-muted d-none d-lg-block">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-outline-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-4 col-xl-3">
          <div className="card border-1 text-center mt-3">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text mx-5 text-muted d-none d-lg-block">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/" className="btn btn-outline-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-4 col-xl-3">
          <div className="container-lg">
            <div className="text-container">
              <h2>Book reviews</h2>
              <p className="lead">What my students have said about the book</p>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="list-group">
                    <div className="list-group-item py-3">
                      <h5>A special book for everyone who needs</h5>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam efficitur odio maximus fringilla varius. Curabitur
                        ut iaculis lorem. Etiam sagittis elit non nulla
                        imperdiet, a mattis sapien iaculis. Suspendisse sapien
                        enim, ultricies viverra justo ac, auctor gravida orci.
                      </p>
                      <small>Reveiew by Mario</small>
                    </div>
                    <div className="list-group-item py-3">
                      <h5>A special book for everyone who needs</h5>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam efficitur odio maximus fringilla varius. Curabitur
                        ut iaculis lorem. Etiam sagittis elit non nulla
                        imperdiet, a mattis sapien iaculis. Suspendisse sapien
                        enim, ultricies viverra justo ac, auctor gravida orci.
                      </p>
                      <small>Reveiew by Mario</small>
                    </div>
                    <div className="list-group-item py-3">
                      <h5>A special book for everyone who needs</h5>
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam efficitur odio maximus fringilla varius. Curabitur
                        ut iaculis lorem. Etiam sagittis elit non nulla
                        imperdiet, a mattis sapien iaculis. Suspendisse sapien
                        enim, ultricies viverra justo ac, auctor gravida orci.
                      </p>
                      <small>Reveiew by Mario</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
