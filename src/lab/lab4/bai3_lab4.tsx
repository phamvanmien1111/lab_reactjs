import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export const Bai3_lab4 = () => {
  interface FormData {
    name: string;
    age: string;
  }

  const [form, setForm] = useState<FormData>({ name: "", age: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Tên: ${form.name}, Tuổi: ${form.age}`);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nhập tên của bạn"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Nhập tuổi của bạn"
            value={form.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};
