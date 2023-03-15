import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { Mens } from "../../components/mensTable/Mens";
import Navbar from "../../components/navbar/Navbar";
import { Womens } from "../../components/womensTable/Womens";

export const ManageAdverticement = () => {
  return (
    <>
      <Navbar></Navbar>
      <Mens></Mens>
      <Womens></Womens>
    </>
  );
};
