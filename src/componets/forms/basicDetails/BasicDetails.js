import React from "react";
import Dropzone, { useDropzone } from "react-dropzone";
const BasicDetails = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  console.log(acceptedFiles);
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <>
      <form>
        <div>
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
              {/* <em>(Only *.jpeg and *.png images will be accepted)</em> */}
            </div>
          </section>
        </div>
        <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFileItems}</ul>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </aside>
        <div class="form-group row mb-2">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control"
              id="staticEmail"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10 pt-1 d-flex ">
            <div class="d-flex col-sm-4 align-items-center  radioButton">
              <div className="inputContainer">
                <input
                  type="radio"
                  name="group1"
                  id="exampleRadios1"
                  value="option1"
                />
              </div>
              <label class="form-check-label" id="group1" for="exampleRadios1">
                Male
              </label>
            </div>
            <div class="d-flex col-sm-4 align-items-center radioButton">
              <div className="inputContainer">
                <input type="radio" name="group1" id="female" value="option1" />
              </div>
              <label class="form-check-label" id="groupp" for="female">
                female
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Date
          </label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Born nationality
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Enter nationality"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Born city
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="Enter city"
            />
          </div>
        </div>
        <div class="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Current nationalities
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword"
              placeholder="List all current nationalities here"
            />
          </div>
        </div>
        <div className="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Preferred Language
          </label>
          <div className="col-sm-10 pt-1">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="finnish"
              />
              <label class="form-check-label" for="exampleRadios1">
                Finnish
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="swedish"
              />
              <label class="form-check-label" for="exampleRadios2">
                Swedish
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="english"
              />
              <label class="form-check-label" for="exampleRadios2">
                english
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row mb-2">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Preferred Language
          </label>
          <div class="col-sm-8 ">
            <input
              type="text"
              class="form-control "
              id="inputPassword"
              placeholder="List all current nationalities here"
            />
          </div>
          <button class="col-sm-2 btn btn-warning">Invite</button>
        </div>
      </form>
    </>
  );
};

export default BasicDetails;
