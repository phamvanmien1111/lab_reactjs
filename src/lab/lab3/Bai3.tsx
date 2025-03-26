import { useState } from "react";
import {Container, Button, Alert } from "react-bootstrap";
export default function Bai3_lab3() {
   const [show, setShow] = useState(true);
            return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        {show && (
          <Alert variant="info" className="p-3 fade show shadow">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/02/15/07/wine-4813260_1280.jpg"
              alt="Wine"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "400px", transition: "0.5s" }}
            />
          </Alert>
        )}
        <Button 
          onClick={() => setShow(!show)} 
          variant="primary" 
          className="mt-3 px-4 py-2 fw-bold shadow-sm"
        >
          {show ? "Ẩn ảnh" : "Hiển thị ảnh"}
        </Button>
      </div>
    </Container>
  );
}
