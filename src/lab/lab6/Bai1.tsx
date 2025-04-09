import { Container, Button } from "react-bootstrap";
import {  Link } from "react-router-dom";
interface Post1 {
    id:string;
}
export const Home = ()=>{
  return(
      <Container className="mt-5">
        <h3>Trang Chủ</h3>
        <p>Chào mừng bạn đến với ứng dụng React!</p>
        <Link to="/post/1">
        <Button variant="primary">Xem bài viết 1</Button>
        </Link>
    </Container>
  )
}
export const Post = ({id}:Post1)=>{
    return(
        <Container className="mt-5">
            <h3>Bài Viết {id}</h3>
            <p>Đây là nội dung bài viết {id}</p>
            <Link to="/">
            <Button variant="secondary">Trở về trang chủ</Button>
            </Link>
        </Container>
    )
}