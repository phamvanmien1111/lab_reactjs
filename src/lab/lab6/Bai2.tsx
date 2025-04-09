import { Button ,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Bai2_lab6 = ()=>{
    return(
        <Container className='mt-5'>
            <h3>Trang chủ</h3>
            <Link to="/About">
            <Button variant='primary'>
                Đi đến About
            </Button>
            </Link>
        </Container>    )
}
export const About = ()=>{
    return(
        <Container className='mt-5'>
            <h3>
                Giới Thiệu
            </h3>
            <p>Đây là phần giới thiệu của ứng dụng</p>
        </Container>
    ) 
}