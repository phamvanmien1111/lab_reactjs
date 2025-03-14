import Card   from "./card";


function Bai4_lab2() {
    return (
        <div>
            <Card title="Card 1" content="Đây là nội dung thẻ 1" />
            <Card title="Card 2" content="Đây là nội dung thẻ 2" />
            <Card title="Card 3" content="Đây là nội dung thẻ 3">
                <p>Nội dung con của thẻ 3.</p>
            </Card>
        </div>
    );
}

export default Bai4_lab2;
