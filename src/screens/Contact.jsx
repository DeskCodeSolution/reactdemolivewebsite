import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  return (
    <div className="header my-5">
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <div className="container contact_div my-5">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter your mobile number"
                maxLength={12}
                minLength={10}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                // type="email"
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                // size="64"
                // maxLength="64"
                required
                title="Please include an '@' and .com in the email address i.e. name@expamle.com"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent}
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
