type Product = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  status: string;
  price: number;
};

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <table border={1} cellPadding={10} cellSpacing={0} width="100%">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phẩm</th>
          <th>Ảnh</th>
          <th>Số lượng</th>
          <th>Tình trạng</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => ( 
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <img src={product.image} alt={product.name} width="50" />
            </td>
           <td>
            {product.quantity > 0 ? (
                <span style={{ color: "green", fontWeight: "bold" }}>Còn hàng</span>
            ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>Hết hàng</span>
            )}
            </td>
            <td>{product.status}</td>
            <td>{product.price.toLocaleString("vi-VN")} đ</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}











{/* {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>
              <img src={product.image} alt={product.name} width="50" />
            </td>
            <td>{product.quantity}</td>
            <td>{product.status}</td>
            <td>{product.price.toLocaleString()} đ</td>
          </tr>
        ))} */}