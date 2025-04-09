import { Routes,Route,useNavigate, useParams,useSearchParams,Link,} from "react-router-dom"
import { Container, Button, Form } from "react-bootstrap";

export const Bai3_lab6 = ()=>{
    const [searchParams ,setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search")||"";
    const navigate = useNavigate()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = (e.target as HTMLFormElement).search.value;
        setSearchParams({ search: query });
        navigate(`/?search=${query}`);
        };
    return(
        <Container className="mt-5">
            <h3>Trang chủ</h3>
            <Form onSubmit={handleSearch}>
    <Form.Control 
        type="text" 
        name="search" 
        defaultValue={searchTerm} 
        placeholder="Tìm kiếm" 
    />
    <Button type="submit" variant="primary" className="mt-3">
        Tìm kiếm
    </Button>
</Form>
            <p>Từ Khóa Tìm Kiếm:{searchTerm}</p>
        </Container>
    )
}
function SearchResults() {
const { searchTerm } = useParams();
return (
<Container className="mt-5">
<h3>Kết quả tìm kiếm cho "{searchTerm}"</h3>
<p>Hiển thị kết quả tìm kiếm cho từ khóa {searchTerm}</p>
<Link to="/">
<Button variant="secondary">Trở về</Button>
</Link>
</Container>
);
}
function Bai3() {
  return (
    <Routes>
      <Route path="/" element={<Bai3_lab6 />} />
      <Route path="search/:searchTerm" element={<SearchResults />} />
    </Routes>
  );
}
export default Bai3;