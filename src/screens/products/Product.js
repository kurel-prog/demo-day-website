import './product.css'
import sample from '../../assets/product_sample/sample.webp';
import logo from  '../../assets/home_img/LOGO PIKABOOK.jpg'


function ProductScreen() {

    return (
        <div>
            <div className={'product-place1'}>
                <h1>Pika Book</h1>
                <h3>Đọc sách không chỉ tiếp thu thêm kiến thức mà đọc sách còn để kết nối</h3>
                <a className={'product-place1-pricing'} href={'/pricing'}>Pricing</a>
            </div>
            <div className={'product-place2'}>
                <div className={'product-place2-item1'}>
                    <p>Dự án “Pikabook - Đọc sách để kết nối” mang đến cho người đọc một ứng dụng đọc sách có khả năng kết nối và đọc giáo trình bản quyền. Dự án được hình thành với mục đích nâng cao ý thức đọc của người Việt, kết nối những người có cùng level đọc và sở thích đọc giống nhau qua một app đọc sách.</p>
                </div>
                <div className={'product-place2-item2'}>
                    <p>Giao diện thân thiện với người dùng</p>
                    <p>Giáo trình học tập</p>
                    <p>Kết nối sinh viên giữa hai trường</p>
                    <p>Group học tập, share note</p>
                </div>
            </div>
            <div className={'product-place3'}>
                <div className={'product-place3-item1'}>
                    <img src={logo} className='sample' />
                    <div className={'product-place3-item1-part2'}>
                        <h1>Việc của bạn bây giờ là tải Pikabook về nhanh nhất có thể</h1>
                        <h3></h3>
                        <ul>
                            <li>Học tài liêu, giáo trình ngay với Pikabook</li>
                            <li>Tìm ngay cho mình một người bạn đọc</li>
                            <li>Các cuốn sách bản quyển nổi tiếng trên thế giới</li>
                        </ul>
                    </div>
                </div>
                <div className={'product-place3-item2'}>
                    <div className={'product-place3-item1-part2'}>
                        <h1>Bắt đầu đọc sách và kết nối</h1>
                        <h3>Pikabook có các tính năng giúp bạn </h3>
                        <ul>
                            <li>Tìm cho mình được cuốn sách yêu thích</li>
                            <li>Chia sẻ note để học tập hiệu quả hơn</li>
                            <li>Tìm kiếm một người bạn cùng sở thích với mình</li>
                        </ul>
                    </div>
                    <img src={logo} className='sample' />
                </div>
            </div>
            <div className={'product-place4'}>
                <h1 className={'product-header'}>Pika Book</h1>
                <div className={'product-place4-item1'}>
                    <p>
                        Dự án “Pikabook - Đọc để kết nối” mang đến cho người đọc một ứng dụng đọc sách có khả năng kết nối và đọc giáo trình bản quyền. Dự án được hình thành với mục đích nâng cao ý thức đọc của người Việt, kết nối những người có cùng level đọc và sở thích đọc giống nhau qua một app đọc sách. Thông qua Pikabook, người dùng có thể ghép nhóm đọc chung một cuốn sách, để lại chú thích và đặc biệt là tương tác với nhau qua phòng chat. Hiện tại dự án đang ở giai đoạn khởi đầu, tập trung vào đối tượng người dùng là học viên tại các trường đại học có cùng khu vực sinh sống. Thời gian sắp tới dự án sẽ hướng đến mục tiêu phi lợi nhuận, thu nhập đến từ kêu gọi đầu tư, bán sản phẩm và quảng cáo sẽ được phục vụ cho việc nâng cấp hệ thống và mở rộng kho sách. Dự án mong muốn được tiến xa hơn nữa để có thể lan tỏa rộng rãi tính kết nối cũng như niềm đam mê, yêu thích đọc sách trong cộng đồng.
                    </p>
                    <div className={'product-place4-item1--part2'}>
                        <h1>Pikabook phù hợp với mọi loại đối tượng:</h1>
                        <ul>
                            <li>Học sinh, sinh viên</li>
                            <li>Người trung niên</li>
                            <li>Người muốn học hỏi thêm kiến thức từ các trường đại học</li>
                            <li>Người đam mê đọc sách nhưng kinh phí không đủ</li>
                        </ul>
                    </div>
            </div>
                <div className={'product-place4-item2'}>
                    Với tình hình dịch bệnh của COVID - 19 hiện nay, con người ngày nay đa phần đã đánh mất đi những kết nối phổ thông, thiết yếu trong cuộc sống. Một phần là do lối sống của giới trẻ nói riêng và con người nói chung đang sa vào những nội dung, những câu chuyện vô ích, tốn thời gian, thiếu đi sự kết nối, tương tác giữa người và người. Một phần nữa là vì ảnh hưởng của giai đoạn hậu Covid khiến cho ngành xuất bản giảm đáng kể (Thủ tướng Chính phủ ban hành chỉ thị số 16, sau đó là ảnh hưởng mạnh từ việc giá xăng tăng, bột giấy thiếu do chiến tranh Nga - Ukraine, Trung Quốc đóng cửa nên việc mọi người ở nhà đọc online trở nên phổ biến hơn).<br/>
                    Chính vì thế, chúng ta cần một ứng dụng tạo ra sự kết nối, tương tác để cùng thúc đẩy ý thức của mỗi con người.<br/>
                    Sách là người bạn thân thiết vừa là tài sản vô giá của con người, mang lại một giá trị vô cùng to lớn Nhưng những đầu sách giấy hiện nay vẫn có những nhược điểm chưa thực sự được khắc phục khiến cho con đường dẫn đến tri thức của mỗi người không mấy dễ dàng. Chính vì thế, với sự phát triển của công nghệ 4.0, những chiếc điện thoại ra đời đi kèm với việc đọc sách qua những ứng dụng trực tuyến trên mạng sẽ là một giải pháp tốt, đem lại những lợi ích to lớn mà sách giấy vốn không có được. Và những lợi ích này thực sự rất cần thiết cho mỗi chúng ta.

                </div>
            </div>
            <div className={'product-place5'}>
                <h1>Bạn đã sẵn sàng chưa?</h1>
                <h3>Tải app đi chờ chi</h3>
                <div>
                    <a href={'/'}>Tải app</a>
                </div>
            </div>

        </div>
    );
}

export default ProductScreen;