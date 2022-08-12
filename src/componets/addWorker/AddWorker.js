import React from "react";
import "bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./addWorker.scss";

import BasicDetails from "../forms/basicDetails/BasicDetails";
const AddWorker = () => {
  return (
    <>
      <div className="tabsContainer">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Home">
            <BasicDetails />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            next tab
          </Tab>
          <Tab eventKey="longer-tab" title="Loooonger Tab">
            tab2
          </Tab>
          <Tab eventKey="contact" title="Contact">
            next tab3
          </Tab>
        </Tabs>
      </div>
    </>
    // <form>
    //   <div class="form-group row mb-2">
    //     <label for="staticEmail" class="col-sm-2 col-form-label">
    //       Email
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="text"
    //         readonly
    //         class="form-control"
    //         id="staticEmail"
    //         placeholder="Enter Email"
    //       />
    //     </div>
    //   </div>

    //   <div class="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Password
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="password"
    //         class="form-control"
    //         id="inputPassword"
    //         placeholder="Password"
    //       />
    //     </div>
    //   </div>

    //   <div className="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Gender
    //     </label>
    //     <div className="col-sm-10 pt-1 d-flex ">
    //       <div class="d-flex col-sm-4 align-items-center  radioButton">
    //         <div className="inputContainer">
    //           <input
    //             type="radio"
    //             name="group1"
    //             id="exampleRadios1"
    //             value="option1"
    //           />
    //         </div>
    //         <label class="form-check-label" id="group1" for="exampleRadios1">
    //           Male
    //         </label>
    //       </div>
    //       <div class="d-flex col-sm-4 align-items-center radioButton">
    //         <div className="inputContainer">
    //           <input type="radio" name="group1" id="female" value="option1" />
    //         </div>
    //         <label class="form-check-label" id="groupp" for="female">
    //           female
    //         </label>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Date
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="date"
    //         class="form-control"
    //         id="inputPassword"
    //         // placeholder="Password"
    //       />
    //     </div>
    //   </div>

    //   <div class="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Born nationality
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="inputPassword"
    //         placeholder="Enter nationality"
    //       />
    //     </div>
    //   </div>

    //   <div class="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Born city
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="inputPassword"
    //         placeholder="Enter city"
    //       />
    //     </div>
    //   </div>

    //   <div class="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Current nationalities
    //     </label>
    //     <div class="col-sm-10">
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="inputPassword"
    //         placeholder="List all current nationalities here"
    //       />
    //     </div>
    //   </div>

    //   <div className="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Preferred Language
    //     </label>
    //     <div className="col-sm-10 pt-1">
    //       <div class="form-check form-check-inline">
    //         <input
    //           class="form-check-input"
    //           type="radio"
    //           name="exampleRadios"
    //           id="exampleRadios1"
    //           value="finnish"
    //         />
    //         <label class="form-check-label" for="exampleRadios1">
    //           Finnish
    //         </label>
    //       </div>
    //       <div class="form-check form-check-inline">
    //         <input
    //           class="form-check-input"
    //           type="radio"
    //           name="exampleRadios"
    //           id="exampleRadios2"
    //           value="swedish"
    //         />
    //         <label class="form-check-label" for="exampleRadios2">
    //           Swedish
    //         </label>
    //       </div>
    //       <div class="form-check form-check-inline">
    //         <input
    //           class="form-check-input"
    //           type="radio"
    //           name="exampleRadios"
    //           id="exampleRadios2"
    //           value="english"
    //         />
    //         <label class="form-check-label" for="exampleRadios2">
    //           english
    //         </label>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="form-group row mb-2">
    //     <label for="inputPassword" class="col-sm-2 col-form-label">
    //       Preferred Language
    //     </label>
    //     <div class="col-sm-8 ">
    //       <input
    //         type="text"
    //         class="form-control "
    //         id="inputPassword"
    //         placeholder="List all current nationalities here"
    //       />
    //     </div>
    //     <Button variant="warning col-sm-2">Warning</Button>
    //   </div>
    //   <DropDown />
    // </form>
  );
};

export default AddWorker;
