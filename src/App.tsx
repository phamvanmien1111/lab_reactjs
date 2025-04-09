import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
// import Bai3 from "./lab/lab1/bai3"
// import Bai4 from "./lab/lab1/bai4"
// import Bai1 from "./lab/lab2/Bai1";
// import Lab2bai2 from "./lab/lab2/bai2";
// import Bai3Lab2 from "./lab/lab2/Bai3";
// import Bai4_lab2 from "./lab/lab2/Bai4";
// import ProducTable from "./lab/lab3/Product_Table";
// import Bai1_lab3  from "./lab/lab3/bai1"
// import Bai2_lab3 from "./lab/lab3/bai2";
// import Bai3_lab3 from "./lab/lab3/Bai3";
// import {Bai1_lab4} from "./lab/lab4/Bai1-lab4"
// import {Bai2_lab4} from "./lab/lab4/bai2_lab4"
// import {Bai3_lab4} from "./lab/lab4/bai3_lab4"
// import {Bai4_lab4} from "./lab/lab4/bai4_lab4"
import Bai2_lab5 from "./lab/lab5/Bai2"
import { Bai3_lab5 } from "./lab/lab5/Bai3"
import { Bai4_lab5 } from "./lab/lab5/Bai4"
import { Bai5Lab5 } from './lab/lab5/Bai5'
import { Home } from "./lab/lab6/Bai1"
import { Post } from './lab/lab6/Bai1';
import { About, Bai2_lab6 } from './lab/lab6/Bai2';
import Bai3, { Bai3_lab6 } from './lab/lab6/Bai3';
import { Authentication } from './lab/lab6/Bai4'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <div>
      <h1 className="text-center w-auto bg-gray-400">Lab1 bài 3,4</h1>
      <Bai3/>
     <Bai4/>
     </div> */}
      {/* <h1 className="text-center w-auto bg-gray-400">Lab2</h1>
      <Bai1/>
      <Lab2bai2/>
      <Bai3Lab2/>
        <Bai4_lab2/>
      */}
      {/* <h1 className="center">Bài 4</h1>
      <Bai1_lab3></Bai1_lab3>
      <Bai2_lab3></Bai2_lab3>
      <Bai3_lab3></Bai3_lab3>
      <ProducTable></ProducTable>
      <h1 className="h-64"></h1> */}
      {/* <h1 className='text-center'>Bài 4</h1>
      <Bai1_lab4></Bai1_lab4>
      <hr />
      <Bai2_lab4></Bai2_lab4>
      <hr />
      <Bai3_lab4></Bai3_lab4>
      <hr />
      <Bai4_lab4></Bai4_lab4> */}
      {/* <h1 className='text-center'>lab5</h1> */}
      <Router>
        <Navbar bg="light">
          <Navbar.Brand as={Link} to="/" className="d-inline-block me-3">Home</Navbar.Brand>
          <Navbar.Brand as={Link} to="/Bai2_lab6" className="d-inline-block">Bài2Lab 6</Navbar.Brand>
          <Navbar.Brand as={Link} to="/bai3_lab6" className="d-inline-block">Bài3Lab 6</Navbar.Brand>
          <Navbar.Brand as={Link} to="/login" className="d-inline-block">Login</Navbar.Brand>
          <Navbar.Brand as={Link} to="/posts" className="d-inline-block">Bài2Lab5</Navbar.Brand>
          <Navbar.Brand as={Link} to="/posts/:id" className="d-inline-block">Bài3Lab5</Navbar.Brand>
          <Navbar.Brand as={Link} to="/add" className="d-inline-block">Bài4Lab5</Navbar.Brand>

        </Navbar>
        <Routes>

          <Route path="/posts" element={<Bai2_lab5 />} />
          <Route path="/posts/:id" element={<Bai3_lab5 />} />
          <Route path="/add" element={<Bai4_lab5 />} />
          <Route path="/edit/:id" element={<Bai5Lab5 />} />
          <Route path="/login" element={<Authentication />} />

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Bai3_lab6 />} />
          <Route path="/home" element={< Home />} />
          <Route path="/post/:id" element={<Post id="1" />} />
          <Route path="/Bai2_lab6" element={< Bai2_lab6 />} />
          <Route path="/About" element={< About />} />
          <Route path="/bai3_lab6" element={<Bai3 />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;