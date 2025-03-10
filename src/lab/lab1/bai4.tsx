import { Button , Card , Row ,Col ,Container } from "react-bootstrap";
import style from "../Bai3.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Bai4(){
  return(
    <div>
       <h1 className="text-center color-red">
        <p className={style.p}>Bootstrap Styling</p>
        </h1>
        <h4 className={style.h4}>
            Một danh sách card hiển thị sản phẩm
        </h4>
        <Container className="py-4 h-100 d-flex align-items-center">
        <Row className="justify-content-center g-4 w-100">
           <Col md={4} className="mb-4">
             <Card className="w-100 text-center" >
                <Card.Img variant="top" 
                  style={{ objectFit: "cover", height: "200px" }}  
                  src="https://icdn.24h.com.vn/upload/3-2018/images/2018-09-11/1536656758-587-hot-moto-dien-dep-nhu-yamaha-yzf-r3-gia-28-trieu-dong-xe-dien1-1536638933-width660height720.jpg" />
                    <Card.Body>
                        <Card.Title>Sản Phẩm 1</Card.Title>
                        <Card.Text>
                        Mô tả cho sản phẩm 1
                        </Card.Text>
                        <Card.Text>
                            Giá: 28 triệu đô
                        </Card.Text>
                        <Button variant="primary">Xem chi tiết</Button>
                    </Card.Body>
            </Card>
       </Col>
        <Col md={4} className="mb-4">
             <Card className="w-100 text-center">
                <Card.Img variant="top" 
                style={{ objectFit: "cover", height: "200px" }}  
                  src="https://icdn.24h.com.vn/upload/3-2018/images/2018-09-11/1536656758-587-hot-moto-dien-dep-nhu-yamaha-yzf-r3-gia-28-trieu-dong-xe-dien1-1536638933-width660height720.jpg" />
                        <Card.Body>
                        <Card.Title>Sản Phẩm 1</Card.Title>
                        <Card.Text>
                        Mô tả cho sản phẩm 1
                        </Card.Text>
                        <Card.Text>
                        Giá: 28 triệu đô
                        </Card.Text>
                        <Button variant="primary">Xem chi tiết</Button>
                    </Card.Body>
            </Card>
       </Col>
        <Col md={4} className="mb-4">
             <Card className="w-100 text-center">
                <Card.Img variant="top"
                style={{ objectFit: "cover", height: "200px" }}  
                  src="https://icdn.24h.com.vn/upload/3-2018/images/2018-09-11/1536656758-587-hot-moto-dien-dep-nhu-yamaha-yzf-r3-gia-28-trieu-dong-xe-dien1-1536638933-width660height720.jpg" />
                      <Card.Body>
                        <Card.Title>Sản Phẩm 1</Card.Title>
                        <Card.Text>
                        Mô tả cho sản phẩm 1
                        </Card.Text>
                        <Card.Text>
                            Giá: 28 triệu đô
                        </Card.Text>
                        <Button variant="primary">Xem chi tiết</Button>
                    </Card.Body>
            </Card>
       </Col>
        </Row>
    </Container>
    </div>
      
  )
}
export default Bai4;