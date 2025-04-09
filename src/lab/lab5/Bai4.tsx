import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Post {
  title: string;
  body: string;
  image: string;
}

export const Bai4_lab5 = () => {
  const [responseMessage, setResponseMessage] = useState("");
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Post>();
   const navigate = useNavigate();
  const onSubmit: SubmitHandler<Post> = async (data) => {
    try {
      await axios.post("http://localhost:5000/addPost", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast.success("Bài viết đã được tạo thành công!");
      navigate(`/posts`); 
      reset();
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Có lỗi xảy ra khi gửi bài viết.");
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            {...register("title", { required: "Tiêu đề không được để trống" })}
          />
          {errors.title?.message && <p className="text-danger">{String(errors.title.message)}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            {...register("body", { required: "Nội dung không được để trống" })}
          />
          {errors.body?.message && <p className="text-danger">{String(errors.body.message)}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL Hình ảnh</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập URL hình ảnh"
            {...register("image", { required: "URL hình ảnh không được để trống" })}
          />
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Tạo bài viết
        </Button>
      </Form>

      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </Container>
  );
};