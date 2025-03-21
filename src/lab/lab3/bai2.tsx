import { useState } from 'react' 
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bai2_lab3 (){
    const [counter  , setCounter ] = useState(0);
    const [message , setMessage] = useState("");
    const handleIncrease = ()=>{
    setCounter(counter +1);
    setMessage("Tăng");
    }

    const handleDecrease =()=>{
    setCounter(counter - 1);
    setMessage("Giảm");
  };

  return(
    <Container  className="text-center mt-5" >
        <h1>Giá trị hiện tại:{counter}</h1>
        <p>Trạng Thái :{message}</p>
        <Button variant="success" onClick={handleIncrease} className="me-2">
            Tăng Giá Trị
        </Button>
        <Button variant="danger" onClick={handleDecrease} className="me-2">
            Giảm Giá Trị
        </Button>
        <hr />
    </Container>
  )

};
