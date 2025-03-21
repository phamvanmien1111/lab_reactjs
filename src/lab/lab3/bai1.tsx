import { useState } from 'react' 
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bai1_lab3(){
    const [count , setCount] = useState(0);
    return(
        <Container className="text-center mt-5">
            <h1>Số lần nhấn nút = {count}</h1>
            <Button 
                variant="primary" 
                className="px-4 py-2 fw-bold"
                onClick={() => setCount(count + 1)}
            >
                Tăng số đếm
            </Button>
             <hr /> 
        </Container>   
       
    )
}