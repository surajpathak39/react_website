import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My mobile number is ${data.phone}. My email is ${data.email}. My message is ${data.msg}`
    );
    setData({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      msg: "",
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputFullName" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFullName"
                  aria-describedby="fullNameHelp"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="data.email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  name="password"
                  value={data.password}
                  onChange={inputEvent}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  placeholder="Enter your text here..."
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
    </>
  );
};

export default Contact;
