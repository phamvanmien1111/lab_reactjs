import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
interface Post {
  _id: string;
  title: string;
  body: string;
  image: string;
}

export const Bai3_lab5 = () => {
  const [id, setId] = useState(0); 
  const [post, setPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]); 

  useEffect(() => {
    axios.get("http://localhost:5000/posts")
      .then((response) => {
        setPosts(response.data);  
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const postToShow = posts.find((p) => p._id === posts[id]?._id);
      setPost(postToShow || null);
    }
  }, [id, posts]);

  return (
    <Container className="mt-5">
      <Button
        variant="primary"
        onClick={() => {
          if (id < posts.length - 1) {
            setId(id + 1); 
          } else {
            setId(0);
          }
        }}
      >
        Xem bài viết tiếp theo
      </Button>
      
      {post === null && <p>Đang tải bài viết...</p>}
      
      {post !== null && (
        <div>
          <h3 className="mt-3">{post.title}</h3>
          <p>{post.body}</p>
             <div className=' flex justify-center'>
                <img src={post.image} className='w-64 h-64' alt="Hình ảnh bài viết" />
             </div>
        </div>
      )}
    </Container>
  );
};
