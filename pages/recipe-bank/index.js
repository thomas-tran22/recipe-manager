import Button from "react-bootstrap/Button";

export default function RecipeBank() {
  return (
    <>
      <h1>You are in Recipe bank</h1>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" href="recipe-bank/new">
          Add Recipe
        </Button>
      </div>
    </>
  );
}
