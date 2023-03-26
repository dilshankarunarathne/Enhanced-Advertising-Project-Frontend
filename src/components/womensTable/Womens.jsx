import { Edit } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import "./ManageAdverticement.css";

export const Womens = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded col-12">
        <div className="rowTitle">
          <h2>Female Adverticement Details</h2>
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
                  <td>Female</td>
                  <td>27-40</td>
                  <td>
                    <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}>
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                      <i class="material-icons">&#xE872;</i>
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
                  <td>Female</td>
                  <td>27-40</td>
                  <td>
                    <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}>
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                      <i class="material-icons">&#xE254;</i>
                    </a>
                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                      <i class="material-icons">&#xE872;</i>
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
                  <td>Female</td>
                  <td>27-40</td>
                  <td>
                    <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}>
                      <i class="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"></a>
                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                      <i class="material-icons">&#xE872;</i>
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
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                </div>
                <div class="form-group mt-3">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                </div>
                <div class="form-group mt-3">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Country" />
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
  );
};
