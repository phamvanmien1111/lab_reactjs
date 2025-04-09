import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  password: string;
  confirmPassword?: string;
}

export const Authentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:5000/login", data);
      if (response.data) {
        alert("Đăng nhập thành công!");
        navigate("/");
      }
    } catch  {
      alert("Đăng nhập thất bại.");
    }
  };

  const handleRegister = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      if (response.data) {
        alert("Đăng ký thành công!");
        navigate("/");
      }
    } catch {
      alert("Đăng ký thất bại.");
    }
  };

  const onSubmit = isLogin ? handleLogin : handleRegister;

  return (
    <Container className="mt-5">
      <h3>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên đăng nhập"
            {...register("username", {
              required: "Tên đăng nhập không được để trống",
              minLength: {
                value: 3,
                message: "Tên đăng nhập phải có ít nhất 3 ký tự",
              },
            })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message?.toString()}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            {...register("password", {
              required: "Mật khẩu không được để trống",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message?.toString()}</p>
          )}
          {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...register("confirmPassword", {
                validate: (value, formValues) =>
                  isLogin || value === formValues.password || "Mật khẩu không khớp",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-danger">
                {errors.confirmPassword.message?.toString()}
              </p>
            )}
          </Form.Group>
        )}
        </Form.Group>
        <Button type="submit" variant="primary">
          {isLogin ? "Đăng Nhập" : "Đăng Ký"}
        </Button>
      </Form>
      <Button
        variant="link"
        onClick={() => setIsLogin((prev) => !prev)}
        className="mt-3"
      >
        {isLogin ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
      </Button>
    </Container>
  );
};
