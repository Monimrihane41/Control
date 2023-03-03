import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductCard({ name, price, image, onRemove }) {
  const handleRemove = () => {
    onRemove();
  };

  return (
    <Col className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="danger" onClick={handleRemove}>Epuisé</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Produit 1", price: "10 €", image: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Produit 2", price: "20 €", image: "https://randomwordgenerator.com/img/picture-generator/auto-3368565_640.jpg" },
    { id: 3, name: "Produit 3", price: "30 €", image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Produit 4", price: "40 €", image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "Produit 5", price: "50 €", image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Produit 6", price: "60 €", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Produit 6", price: "60 €", image: "https://images.unsplash.com/photo-1613091253127-2cc8840f16f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Produit 6", price: "60 €", image: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }
  ]);

  const handleRemove = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const productRows = [];

  for (let i = 0; i < products.length; i += 4) {
    const rowProducts = products.slice(i, i + 4);

    const productCards = rowProducts.map(product => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        onRemove={() => handleRemove(product.id)}
      />
    ));

    productRows.push(
      <Row key={i}>
        {productCards}
      </Row>
    );
  }

  return (
    <Container>
      {productRows}
    </Container>
  );
}

export default ProductList;
