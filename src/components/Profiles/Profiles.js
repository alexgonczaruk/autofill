import React from 'react'
// import Dropdown from './Dropdown'

function Profiles() {

    // let options = ["Profile 1", "Profile 2"]
    return (
        <div className="profiles">
            {/* <div className="profile-dropdown">
                <Dropdown options={options} />
            </div>
            <div>
                <button className="profileButton delete"></button>
                <button className="profileButton edit"></button>
                <button className="profileButton create"></button>
            </div>*/}

            <form autoComplete="disabled!">
                <div className="form-input short">
                    <label>First Name</label>
                    <input autoComplete="nahhhh" placeholder="John"></input>
                </div>
                <div className="form-input short">
                    <label>Last Name</label>
                    <input autoComplete="nahhhh" placeholder="Smith"></input>
                </div>
                <div className="form-input short">
                    <label>Phone</label>
                    <input autoComplete="nahhhh" placeholder="1112223333"></input>
                </div>
                <div className="form-input long">
                    <label>Email</label>
                    <input autoComplete="nahhhh" placeholder="user@gmail.com"></input>
                </div>
                <div className="form-input medium">
                    <label>Address 1</label>
                    <input autoComplete="nahhhh" placeholder="1 Main Street"></input>
                </div>
                <div className="form-input short">
                    <label>Address 2</label>
                    <input autoComplete="nahhhh" placeholder="Unit 1"></input>
                </div>
                <div className="form-input medium">
                    <label>City</label>
                    <input autoComplete="nahhhh" placeholder="Toronto"></input>
                </div>
                <div className="form-input medium">
                    <label>Country</label>
                    <input autoComplete="nahhhh" placeholder="United States"></input>
                </div>
                <div className="form-input short">
                    <label>State/Province</label>
                    <input autoComplete="nahhhh" placeholder="NY"></input>
                </div>
                <div className="form-input short">
                    <label>Zip Code</label>
                    <input autoComplete="nahhhh" placeholder="12345"></input>
                </div>
                <div className="form-input long">
                    <label>Card Number</label>
                    <input autoComplete="nahhhh" placeholder="1111222233334444"></input>
                </div>
                <div className="form-input short">
                    <label>Expiration</label>
                    <input autoComplete="nahhhh" placeholder="12/25"></input>
                </div>
                <div className="form-input short">
                    <label>Security Code</label>
                    <input autoComplete="nahhhh" placeholder="123"></input>
                </div>
                <div className="form-input medium">
                    <label>Card Type</label>
                    <input autoComplete="nahhhh" placeholder="MasterCard"></input>
                </div>
                <div className="form-input medium">
                    <label>Finish</label>
                    <button className="form-submit">Submit</button>
                </div>
            </form>
        </div>

    );
  }
  
  export default Profiles;