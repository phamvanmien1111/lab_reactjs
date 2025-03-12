import { Navbar } from "react-bootstrap"
function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" >Trang Chủ</Navbar.Brand>
            <Navbar.Brand href="#home" >Welcome to Reactjs Lab</Navbar.Brand>
        </Navbar>
    )
}

export default Header;