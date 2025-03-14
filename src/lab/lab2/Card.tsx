
function Card({title, content , children}:{ title: string; content: string; children?: React.ReactNode }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
        }}>
            <h3>{title}</h3>
            <p>{content}</p>
            {children && <div>{children}</div>}
        </div>
    );
}
export default Card;