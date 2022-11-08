import React from "react";

function UploadFile() {
  return (
    <div className="row p-1 p-md-5 d-flex justify-content-center bg-secondary bg-opacity-10">
      <div className="col-md-7 p-1 p-md-5 border shadow-lg text-center ">
        <h5>
          i lost to a frontend test because ot bootstrap happy i am learning
          again
        </h5>
        <mark>This is nice and i love it</mark>
        <h3 className="text-success">
          {" "}
          <span>
            <i class="bi bi-soundwave"> </i>
          </span>
          Upload now and listen to a book
        </h3>
        <div class="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="formFile"
            accept="application/pdf"
          />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i class="bi bi-share-fill"></i>
          </span>
          <select class="form-select" aria-label="Default select example">
            <option selected>Your Choice Of Music</option>
            <option value="1">Fuji</option>
            <option value="2">Apala</option>
            <option value="3">Raggae</option>
            <option value="3">Hip-Hop</option>
            <option value="3">Juju</option>
          </select>
        </div>
        <button type="button" className="btn btn-dark">
          <i class="bi bi-share-fill"> Listen Now</i> {" "}
        </button>
      </div>
    </div>
  );
}

export default UploadFile;
