import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export function AddForm() {
  const [validated, setValidated] = useState(false);
  const [ingredient, addIngredient] = useState(0);
  const [instruction, addInstruction] = useState(0);

  const ingredients = [...Array(ingredient)].map((x, i) => {
    return (
      <>
        <Form.Group controlId={"ingredient " + i} className="mb-3 me-auto">
          <Form.Control
            required
            type="text"
            placeholder={"Ingredient " + (i + 1)}
          />
        </Form.Group>
      </>
    );
  });

  const instructions = [...Array(instruction)].map((x, i) => {
    return (
      <>
        <Form.Group
          as={Row}
          controlId={"instruction" + i}
          className="me-5 mb-3"
        >
          <Col md={1} className="mt-1">
            <Form.Label>{i + 1}. </Form.Label>
          </Col>
          <Col>
            <Form.Control required type="text" placeholder="Instructions" />
          </Col>
        </Form.Group>
      </>
    );
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    //send validated form to api endpoint
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mt-3 ms-3">
          <Col>
            <Form.Group
              className="mb-3"
              as={Col}
              md="4"
              controlId="validationCustom01"
            >
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
              <Form.Control.Feedback>Sounds tasty!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="mt-3">
            <Button variant="primary" type="submit" size="lg">
              Submit form
            </Button>
          </Col>
        </Row>
        <Row className="ms-3">
          <Col className="mt-3  me-3" md="4">
            <h4>Ingredients</h4>
            {ingredients}
            <Button
              variant="success"
              type="button"
              onClick={() => addIngredient(ingredient + 1)}
            >
              Add Ingredients
            </Button>
            <Button
              variant="danger"
              type="button"
              onClick={() => addIngredient(ingredient - 1)}
            >
              Remove Ingredients
            </Button>
          </Col>

          <Col className="mt-3 ms-3 me-3">
            <h4>Instructions</h4>
            {instructions}
            <Button
              variant="success"
              type="button"
              onClick={() => addInstruction(instruction + 1)}
            >
              Add Instruction
            </Button>
            <Button
              variant="danger"
              type="button"
              onClick={() => addInstruction(instruction - 1)}
            >
              Remove Instruction
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
