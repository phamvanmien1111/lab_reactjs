import {useState} from "react"
import{Button ,Container ,Badge} from "react-bootstrap"

export const Bai2_lab4 = ()=>{
    const [isOn , setIsOn] = useState(false);
    return (
        <Container className="text-center mt-5">
            <Button variant={isOn ?"danger":"primary"} onClick ={()=>setIsOn(!isOn)}>
                {isOn ? "Tắt" : "Bật"}
            </Button>
            <p className="mt-3">Trạng Thái:{""}
                <Badge bg={isOn ? "success" : "secondary"}>{isOn ?"Bật":"Tắt"}</Badge>
            </p>
        </Container>
    )
}