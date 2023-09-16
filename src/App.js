import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";

import { Container, Col, Row } from "react-bootstrap";
import MainNav from "./lib/components/MainNav";
import Hero from "./lib/components/Hero";
import NavTabs from "./lib/components/NavTabs";
import BasicCard from "./lib/components/BasicCard";
import Footer from "./lib/components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <NavTabs tabsVariant="" />
        <MainNav />
        <Hero />
        <Container>
          <Row className="mb-3">
            <Col xs={12} lg={4}>
              <BasicCard
                title="Card #1"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Primary Button"
                buttonVariant="primary"
              ></BasicCard>
            </Col>
            <Col xs={12} lg={4}>
              <BasicCard
                title="Card #2"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Secondary Button"
                buttonVariant="secondary"
              ></BasicCard>
            </Col>
            <Col xs={12} lg={4}>
              <BasicCard
                title="Card #3"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                buttonText="Tertiary Button"
                buttonVariant="link"
              ></BasicCard>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
