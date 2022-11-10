import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function AllSuperDeveloper() {
  const [superDevelopers, setSuperDevelopers] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("https://localhost:7073/SuperDeveloper").then((response) => {
      setSuperDevelopers((data) => {
        return response.data;
      });
    });
  }, []);

  function confirmDeleteHandler() {
    axios.delete(`https://localhost:7073/SuperDeveloper/${itemToDeleteId}`)
      .then((response) => {
        setShowModal(false);
        setSuperDevelopers((existingData) => {
          return existingData.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
      });
  }
  function showConfirmDeleteHandler(id) {
    setShowModal(true);
    setItemToDeleteId(id);
  }

  function hideConfirmDeleteHandler() {
    setShowModal(false);

    setItemToDeleteId(0);
  }

  return (
    <>
      <div className="mt-2 d-grid gap-2">

        <Button
          variant="outline-success"
          type="button"
          onClick={() => navigate("/superdeveloper-create")}
        >
          Add A Developer
        </Button>

      </div>

      <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you want delete this item?"
        confirmDeleteHandler={confirmDeleteHandler}
        hideConfirmDeleteHandler={hideConfirmDeleteHandler}
      >

      </DeleteConfirmation>
      <Row md={3} className="g-4 mt-1">
        {superDevelopers.map((sv) => {
          return (
            <Col key={sv.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sv.imageUrl} />
                <Card.Body>
                  <Card.Title>{sv.developerName}</Card.Title>
                  <Card.Text>
                    <b>Qualification:</b> {sv.qualification}
                  </Card.Text>
                  <Card.Text>
                    <b>Expertise: </b>
                    {sv.expertise}
                  </Card.Text>
                  <Button
                    variant="outline-warning"
                    onClick={() => navigate(`/developer-update/${sv.id}`)}
                  >
                    Edit
                  </Button>
                  <Button className="ml-2"
                    variant="danger"
                    onClick={() => showConfirmDeleteHandler(sv.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  )
}

export default AllSuperDeveloper
