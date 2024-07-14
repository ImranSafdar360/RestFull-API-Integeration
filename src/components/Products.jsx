/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Modal, Button } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="card" onClick={() => handleShow(product)}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text my-1 fw-bold">{product.price} USD</p>
            <p className="card-text description">{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="product-details">
              <img style={{width: '100%', height: '300px', objectFit: 'contain'}} src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" />
              <p><strong>Price:</strong> {selectedProduct.price} USD</p>
              <p><strong>Rating:</strong> {selectedProduct.rating?.rate} ({selectedProduct.rating?.count} reviews)</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Description:</strong> {selectedProduct.description}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductList;
