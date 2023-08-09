import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class recipe {
  name;
  ingredients;
  instructions;
  id = 0;
  constructor(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

export function GenerateTest() {
  const testRecipe = new recipe(
    "Test Name",
    ["One code segment", "One Computer", "Some programming knowledge"],
    [
      "Use the programming knowledge to code the segment into your computer",
      "Debug!",
    ]
  );
  return MakeRecipe(testRecipe);
}

function MakeRecipe(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Card>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="recipeInfo"
                aria-expanded={open}
              >
                {props.name}
              </Button>
            </Card>
          </Col>
        </Row>

        <Collapse in={open} dimension="height">
          <div id="recipeInfo">
            <Row>
              <Col sm={3}>
                <ListGroup>
                  {props.ingredients.map((ingredient) => (
                    <ListGroup.Item>{ingredient}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={9}>
                <ListGroup as="ol" variant="flush" numbered>
                  {props.instructions.map((instruction) => (
                    <ListGroup.Item>{instruction}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Collapse>
      </Container>
    </>
  );
}
