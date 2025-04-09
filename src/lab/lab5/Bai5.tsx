import  { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
interface PostData {
  _id: string;
  title: string;
  body: string;
  image?: string;
}

export const Bai5Lab5 = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostData | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PostData>();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) { 
      axios
        .get(`http://localhost:5000/posts/${id}`)
        .then((response) => {
          setPostData(response.data);
          reset(response.data);
        })
        .catch((error) => {
          console.error('Có lỗi khi fetch dữ liệu:', error);
          setResponseMessage('Có lỗi khi tải dữ liệu bài viết.');
        });
    }
  }, [id, reset]);

  const handleUpdate = (data: PostData) => {
    axios
      .put(`http://localhost:5000/posts/${id}`, data)
      .then(() => {
        setResponseMessage('Bài viết đã được cập nhật thành công!');
      })
      .catch((error) => {
        setResponseMessage('Có lỗi khi cập nhật bài viết.');
        console.error('Error updating post:', error);
      });
  };

  const handleDelete = () => {
  axios
    .delete(`http://localhost:5000/posts/${id}`)
    .then(() => {
      confirm("Bài viết đã được xóa thành công!");
      navigate("/posts"); 
    })
    .catch((error) => {
      alert("Có lỗi khi xóa bài viết.");
      console.error("Error deleting post:", error);
    });
};

  return (
    <Container>
      <h2>Cập nhật hoặc xóa bài viết</h2>
      {responseMessage && <Alert variant="info">{responseMessage}</Alert>}
      {postData ? (
        <Form onSubmit={handleSubmit(handleUpdate)}>
          <Form.Group controlId="title">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tiêu đề"
              {...register('title', { required: 'Tiêu đề là bắt buộc' })}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="body">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Nhập nội dung bài viết"
              {...register('body', { required: 'Nội dung là bắt buộc' })}
              isInvalid={!!errors.body}
            />
            <Form.Control.Feedback type="invalid">
              {errors.body?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập URL hình ảnh"
              {...register('image')}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Cập nhật bài viết
          </Button>
          <Button variant="danger" onClick={handleDelete} className="ms-2">
            Xóa bài viết
          </Button>
        </Form>
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
};
