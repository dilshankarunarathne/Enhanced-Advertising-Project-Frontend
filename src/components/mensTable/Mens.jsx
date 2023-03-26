import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import "./ManageAdverticement.css";

export const Mens = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="mensWrapper">
      <div className="AddButton"> </div>

      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded col-12">
          <div className="rowTitle">
            <h2>Male Adverticement Details</h2>
            <Button variant="primary" onClick={handleShow}>
              Add New Adverticement
            </Button>
          </div>
          <div class="row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name </th>
                    <th>Image</th>
                    <th>Gender </th>
                    <th>Age </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rual Octo</td>
                    <td>
                      {" "}
                      <img src={PF + "adverticement/2.png"} className="adverImgTable" alt="" />
                    </td>
                    <td>Male</td>
                    <td>27-40</td>
                    <td className="EditDelete">
                      <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                        <span>Edit</span>
                      </a>
                      <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                        <span>Delete</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rual Octo</td>
                    <td>
                      {" "}
                      <img src={PF + "adverticement/2.png"} className="adverImgTable" alt="" />
                    </td>
                    <td>Male</td>
                    <td>27-40</td>
                    <td className="EditDelete">
                      <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                        <span>Edit</span>
                      </a>
                      <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                        <span>Delete</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Rual Octo</td>
                    <td>
                      {" "}
                      <img src={PF + "adverticement/2.png"} className="adverImgTable" alt="" />
                    </td>
                    <td>Male</td>
                    <td>27-40</td>
                    <td>
                      <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                        <span>Edit</span>
                      </a>
                      <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                        <span>Delete</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image" />
                  </div>
                  <div class="form-group mt-3">
                    <select class="form-control">
                      <option selected hidden>
                        age group
                      </option>
                      <option>4-14</option>
                      <option>13-26</option>
                      <option>27-40</option>
                      <option>Above 40</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <select class="form-control">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <button type="submit" class="btn btn-success mt-4">
                    Add Record
                  </button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
        </div>
      </div>
    </div>
  );
};
