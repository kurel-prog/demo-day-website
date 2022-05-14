import './product.css'
import sample from '../../assets/product_sample/sample.webp';

function ProductScreen() {

    return (
        <div>
            <div className={'product-place1'}>
                <h1>Pika Book</h1>
                <h3>Đọc sách không chỉ tiếp thu thêm kiến thức mà còn là đọc sách để kết nối</h3>
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
                    <img src={sample} className='sample' />
                    <div className={'product-place3-item1-part2'}>
                        <h1>Việc của bạn bây giờ là tải Pikabook về nhanh nhất có thể</h1>
                        <h3></h3>
                        <ul>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                        </ul>
                    </div>
                </div>
                <div className={'product-place3-item2'}>
                    <div className={'product-place3-item1-part2'}>
                        <h1>All the tools you need to get started quickly</h1>
                        <h3>Docker Personal includes all the essentials to build, share, and run cloud-native applications.</h3>
                        <ul>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                        </ul>
                    </div>
                    <img src={sample} className='sample' />
                </div>
                <div className={'product-place3-item1'}>
                    <img src={sample} className='sample' />
                    <div className={'product-place3-item1-part2'}>
                        <h1>All the tools you need to get started quickly</h1>
                        <h3>Docker Personal includes all the essentials to build, share, and run cloud-native applications.</h3>
                        <ul>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                            <li>Fast, local app development for MacOS and Windows with Docker Desktop</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'product-place4'}>
                <h1 className={'product-header'}>Pika Book</h1>
                <div className={'product-place4-item1'}>
                    <p>
                        Docker Personal is free and makes Docker accessible to individuals, students, educators, non-profit organizations, and small businesses* through a full-functioned subscription offering.
                    </p>
                    <div className={'product-place4-item1--part2'}>
                        <h1>The Docker Personal subscription is best suited for:</h1>
                        <ul>
                            <li>Individual developers</li>
                            <li>Students and instructors</li>
                            <li>Non-commercial open source</li>
                            <li>Small businesses and startups*</li>
                        </ul>
                    </div>
            </div>
                <div className={'product-place4-item2'}>
                    *Docker Desktop is free to use, as part of the Docker Personal subscription, for individuals, non-commercial open source developers, students and educators, and small businesses of less than 250 employees AND less than $10 million in revenue. Commercial use of Docker Desktop at a company of more than 250 employees OR more than $10 million in annual revenue requires a paid subscription (Pro, Team, or Business) to use Docker Desktop. While the effective date of these terms is August 31, 2021, there is a grace period until January 31, 2022 for those that require a paid subscription to use Docker Desktop.
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