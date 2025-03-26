import { useState } from "react";
import {Button , Container} from "react-bootstrap"
 export function Bai1_lab4(){
        const [message , setMessage]=useState("");
        const handleClick=(ButtonNumber:number)=>{
            setMessage(`Bạn đã nhấn vào nút${ButtonNumber}`);
        }
        return(
            <Container className="text-center mt-5">
                <h1>Click Counter</h1>
                <p>{message}</p>
                <Button variant="primary" onClick={()=>handleClick(1)}>Button 1</Button>
                <Button variant="secondary" onClick={()=>handleClick(2)}>Button 2</Button>
                <Button variant="success" onClick={()=>handleClick(3)}>Button 3</Button>
            </Container>
        )
}
