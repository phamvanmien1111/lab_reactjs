import { useState, useEffect } from 'react';
import { Container, ListGroup } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";;
interface Post {
  _id: string;
  title: string;
  body: string;
  image:string;
}

function Bai2_lab5() {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts/")
      .then((response) => {
        console.log("Dữ liệu API:", response.data); 
        setPost(response.data);
      })
      .catch((e) => console.log("Có lỗi khi lấy dữ liệu API", e));
  }, []);

  return (
    <Container className="mt-5 text-center">
      <h3>Danh sách bài viết</h3>
      {posts.length > 0 ? (
        <ListGroup>
          {posts.map((post) => (
            <ListGroup.Item key={post._id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
             <div className=' flex justify-center'>
                <img src={post.image} className='w-64 h-64' alt="Hình ảnh bài viết" />
             </div>
            <Link to={`/posts/${post._id}`}>Xem chi tiết</Link>
          <div className="mt-2 flex justify-between">
        <Link to={`/posts/${post._id}`} className="btn btn-primary">
          Xem chi tiết
        </Link>
        <Link to={`/edit/${post._id}`} className="btn btn-warning">
          Sửa
        </Link>
      </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>Không có bài viết nào.</p>
      )}
    </Container>
  );
}

export default Bai2_lab5;
