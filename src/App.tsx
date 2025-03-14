import Bai3 from "./lab/lab1/bai3"
import Bai4 from "./lab/lab1/bai4"
import Bai1 from "./lab/lab2/Bai1";
import Lab2bai2 from "./lab/lab2/bai2";
import Bai3Lab2 from "./lab/lab2/Bai3";
import Bai4_lab2 from "./lab/lab2/Bai4";
function App(){
  return(
    <div>
     <div>
      <h1 className="text-center w-auto bg-gray-400">Lab1 bài 3,4</h1>
      <Bai3/>
     <Bai4/>
     </div>
      <h1 className="text-center w-auto bg-gray-400">Lab2</h1>
      <Bai1/>
      <Lab2bai2/>
      <Bai3Lab2/>
      <h1>Bài 4</h1>
      <Bai4_lab2/>
    </div>
  );
}
export default App;