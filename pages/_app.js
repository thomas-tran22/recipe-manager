import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

function Header({ title }) {
  return (
    <>
      <Head>
        <title>Recipe Manager</title>
      </Head>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Recipe Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/recipe-bank">Recipe Bank</Nav.Link>

            <Nav.Link href="./active-recipes">Active Recipes</Nav.Link>

            <Nav.Link href="./shopping-list">Shopping List</Nav.Link>

            <Nav.Link href="./pantry">Pantry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
