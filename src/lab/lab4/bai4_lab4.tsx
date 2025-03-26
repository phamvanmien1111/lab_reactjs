import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

interface Product {
  name: string;
  image: string;
  quantity: number;
  price: number;
  status: string;
}

export const Bai4_lab4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const [product, setProduct] = useState<Product | null>(null);

  const onSubmit = (data: Product) => {
    setProduct(data);
    console.log("Dữ liệu form:", data);
    console.log("Loại dữ liệu:", typeof data.quantity, "Giá trị:", data.quantity);
    console.log("Loại dữ liệu:", typeof data.price, "Giá trị:", data.price);
    console.log("Loại dữ liệu:", typeof data.status, "Giá trị:", data.status);
    
  };
  return (
    <Container className="mt-5">
      <h1>Thêm sản phẩm</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên sản phẩm"
            {...register("name", { required: "Tên sản phẩm không được để trống" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ảnh</Form.Label>
          <Form.Control
            type="url"
            placeholder="Nhập URL ảnh sản phẩm"
            {...register("image", {
              required: "Ảnh không được để trống",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))$/i,
                message: "Định dạng ảnh không hợp lệ",
              },
            })}
          />
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập số lượng"
                {...register("quantity", {
                  required: "Số lượng không được để trống",
                  valueAsNumber: true,
                  min: { value: 1, message: "Số lượng phải lớn hơn 0" },
                  
                })}
              />
              {errors.quantity && (
                <p className="text-danger">{errors.quantity.message}</p>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Giá (VND)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập giá sản phẩm"
                {...register("price", {
                  required: "Giá không được để trống",
                  valueAsNumber: true,
                  min: { value: 1, message: "Giá phải lớn hơn 0" },
                })}
              />
              {errors.price && <p className="text-danger">{errors.price.message}</p>}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Tình trạng</Form.Label>
          <Form.Control as="select" {...register("status", { required: "Chọn tình trạng sản phẩm" })}>
            <option value="còn hàng">Còn hàng</option>
            <option value="hết hàng">Hết hàng</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Thêm sản phẩm
        </Button>
      </Form>

      {product && (
        <div className="mt-5">
          <h3>Thông tin sản phẩm đã thêm:</h3>
          <ul>
            <li><strong>Tên sản phẩm:</strong> {product.name}</li>
            <li>
              <strong>Ảnh:</strong><br />
              <img src={product.image} alt={product.name} width="150" />
            </li>
            <li><strong>Số lượng:</strong> {product.quantity}</li>
            <li><strong>Tình trạng:</strong> {product.status}</li>
            <li><strong>Giá:</strong> {product.price} VND</li>
          </ul>
        </div>
      )}
    </Container>
  );
};
