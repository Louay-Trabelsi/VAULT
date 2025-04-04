import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedItems from './FeaturedItems';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col md={6}>
              <h1 className="hero-title">Discover Unique Antique Treasures</h1>
              <p className="hero-text">
                Explore our curated collection of rare and beautiful antiques from around the world.
                Each piece tells a unique story waiting to be discovered.
              </p>
              <Link to="/shop" className="btn btn-primary btn-lg">
                Explore Collection
              </Link>
            </Col>
            <Col md={6}>
              <img
                src="/hero-antique.jpg"
                alt="Antique Collection"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Categories */}
      <section className="featured-categories py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Featured Categories</h2>
          <Row>
            <Col md={4}>
              <Card className="category-card">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/antique-furniture-store-wooden-goods-104771111.jpg" alt="Antique Furniture" />
                <Card.Body>
                  <Card.Title>Antique Furniture</Card.Title>
                  <Card.Text>
                    Discover timeless pieces that add character to your space.
                  </Card.Text>
                  <Link to="/shop/furniture" className="btn btn-outline-primary">
                    View Collection
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="category-card">
                <Card.Img variant="top" src="https://i.etsystatic.com/5682186/r/il/dd531b/6627616999/il_680x540.6627616999_btg7.jpg" alt="Vintage Jewelry" />
                <Card.Body>
                  <Card.Title>Vintage Jewelry</Card.Title>
                  <Card.Text>
                    Elegant pieces that tell stories of bygone eras.
                  </Card.Text>
                  <Link to="/shop/jewelry" className="btn btn-outline-primary">
                    View Collection
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="category-card">
                <Card.Img variant="top" src="https://hwinternational.com/au/wp-content/uploads/sites/11/2021/06/Chinese-Fine-Art-2-800x333.jpg" alt="Art & Collectibles" />
                <Card.Body>
                  <Card.Title>Art & Collectibles</Card.Title>
                  <Card.Text>
                    Unique artworks and collectible items from various periods.
                  </Card.Text>
                  <Link to="/shop/art" className="btn btn-outline-primary">
                    View Collection
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Items */}
      <FeaturedItems />
    </div>
  );
};

export default Home;
