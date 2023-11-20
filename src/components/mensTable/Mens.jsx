import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import "./ManageAdverticement.css";

export const Mens = () => {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('age', age);
    formData.append('gender', gender);

    const response = await fetch('http://localhost:8000/api/image', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // handle successful upload
      setName('');
      setImage(null);
      setAge('');
      setGender('');
      handleClose();
    } else {
      // handle error
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    fetch('http://localhost:8000/api/image?gender=Male')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

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
                  {data.map(([name, imgData, ageRange]) => (
                      <tr>
                          <td>#</td>
                          <td>{name.replace('.jpg', '')}</td>
                          <td><img src={`data:image/jpeg;base64,${imgData}`} alt={name} /></td>
                          <td>{ageRange}</td>
                          <td>Male</td>
                      </tr>
                  ))}
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
                <form onSubmit={onSubmit}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <select class="form-control" value={age} onChange={(e) => setAge(e.target.value)}>
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
                    <select class="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value={"Male"}>Male</option>
                      <option value={"Female"}>Female</option>
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
