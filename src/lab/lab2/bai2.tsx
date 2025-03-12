function lab2bai2(){
    return (
        <div>
            <div className="text-center">
                <hr />
            <h1>Bài 2</h1>
            <h1>JSX với nhiều dòng</h1>
            <p>JSX giúp bạn dễ dàng tạo UI trực quan với cú pháp quen thuộc.</p>
            </div>
            <table className="border border-gray-300 mx-auto w-1/2 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className="text-gray-700 text-lg">
                        <th className="border border-gray-300 px-4 py-2">Cột 1</th>
                        <th className="border border-gray-300 px-4 py-2">Cột 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-100 transition">
                        <td className="border border-gray-300 px-4 py-2 text-center">Dòng 1, Cột 1</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Dòng 1, Cột 2</td>
                    </tr>
                    <tr className="hover:bg-gray-100 transition">
                        <td className="border border-gray-300 px-4 py-2 text-center">Dòng 2, Cột 1</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">Dòng 2, Cột 2</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default lab2bai2;