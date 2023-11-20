import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Form, Table } from 'react-bootstrap';
import axios from 'axios';

export const Report = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('november');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/report?month=${selectedMonth}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [selectedMonth]);

  return (
    <div>
      <Navbar></Navbar>

      <div className="reportTable">
        <Form className="form">
          <Form.Group className="selectMonth" controlId="monthSelect">
            <Form.Label>Select Month</Form.Label>
            <Form.Control as="select" onChange={e => setSelectedMonth(e.target.value.toLowerCase())}>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>4-12 Age Range</th>
              <th>13-26 Age Range</th>
              <th>27-40 Age Range</th>
              <th>above 40 Age</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Male</td>
              <td>{data.male_4_12 || '-'}</td>
              <td>{data.male_13_26 || '-'}</td>
              <td>{data.male_27_40 || '-'}</td>
              <td>{data.male_above_40 || '-'}</td>
              <td>{data.total_male || '-'}</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>{data.female_4_12 || '-'}</td>
              <td>{data.female_13_26 || '-'}</td>
              <td>{data.female_27_40 || '-'}</td>
              <td>{data.female_above_40 || '-'}</td>
              <td>{data.total_female || '-'}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{data.total_4_12 || '-'}</td>
              <td>{data.total_13_26 || '-'}</td>
              <td>{data.total_27_40 || '-'}</td>
              <td>{data.total_above_40 || '-'}</td>
              <td>{data.total || '-'}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
