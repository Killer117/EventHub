import React, { useEffect, useState } from "react";
import "./registerationPage.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterationPage() {

  const [isRegistered, setisRegistered] = useState(false);

  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    mobile: "",

    address: "",
    state: "",
    city: "",
    pincode: ""

  });

  useEffect(() => {
    document.title = "Registeration";
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails(prevDetails => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  }

  function signup(event) {
    const res = axios.post('http://localhost:5000/api/users/register', details)
      .then(function (res) {
        setisRegistered(res.data);
      });
    setDetails(prevDetails => {
      return {
        fname: "",
        lname: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        mobile: "",

        address: "",
        state: "",
        city: "",
        pincode: ""

      }
    });
    event.preventDefault();
  }

  if(isRegistered===true){
    return (
      <div>
        <h1>Successfully Registered</h1>
        <Link to="/login">Login Now</Link>
      </div>

    );


  }
  else{
    if(isRegistered!==false){
      alert("User already exists with this email");
    }
    return  (
      <div className="regPage">
        <Navbar />
        <div className="regPage-bgImage">
          <div className="regPage-regForm">
            <p className="regPage-heading">Register</p>
            <form onSubmit={signup} className="regPage-form ">
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputFname">First Name</label>
                  <input onChange={handleChange} name="fname" value={details.fname} type="text" className="form-control" id="inputFname" />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputLname">Last Name</label>
                  <input onChange={handleChange} name="lname" value={details.lname} type="text" className="form-control" id="inputLname" />
                </div>

              </div>
              <div className="form-row">
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputEmail">Email</label>
                  <input onChange={handleChange} name="email" value={details.email} type="email" className="form-control" id="inputEmail" />
                </div>
                <div className="form-group col-md-6 col-sm-6 col-xs-6">
                  <label for="inputPassword">Password</label>
                  <input
                    value={details.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>

              </div>
              <div className="form-row">

                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                  <label for="inputAddress">Address</label>
                  <input onChange={handleChange} name="address" value={details.address} type="text" class="form-control" id="inputAddress" />
                </div>


              </div>

              <div className="form-row">
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputState">State</label>
                  <select onChange={handleChange} name="state" value={details.state} id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Kolkata</option>
                    <option>Chennai</option>
                    <option>Bengaluru</option>
                    <option>Punjab</option>
                    <option>Gujrat</option>
                  </select>
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputCity">City</label>
                  <input onChange={handleChange} name="city" value={details.city} type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputZip">Pincode</label>
                  <input onChange={handleChange} name="pincode" value={details.pincode} type="text" className="form-control" id="inputZip" />
                </div>
              </div>


              <div className="form-row">
                <div class="form-group col-md-4 col-sm-4 col-xs-4">
                  <label for="inputDob">Date of birth</label>
                  <input
                    value={details.dob}
                    onChange={handleChange}
                    name="dob"
                    type="date"
                    class="form-control"
                    id="inputDob"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-3 col-sm-3 col-xs-3">
                  <label for="inputGender">Gender</label>
                  <select onChange={handleChange} name="gender" value={details.gender} id="inputGender" className="form-control">
                    <option selected>Select...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-group col-md-5 col-sm-5 col-xs-5">
                  <label for="inputMobile">Mobile no.</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input onChange={handleChange} name="mobile" value={details.mobile} id="inputMobile" type="tel" className="form-control" placeholder="" />
                  </div>
                </div>
              </div>



              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    remember me
                    </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
                </button>
              <Link className="ml-2" to="/login">
                Already a member?
                </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

  
  
}

export default RegisterationPage;
