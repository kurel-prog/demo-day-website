import './home.css';
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillWindows, AiFillAndroid} from 'react-icons/ai';
import sample from '../../assets/sample.webp';
import logo from  '../../assets/home_img/LOGO PIKABOOK.jpg'

function HomeScreen() {
    return (
        <div>
            <div className='intro-1'>
                <div className='intro-1-content'>
                    <h1>Pikabook đọc sách để kết nối <br/>
                        Nền tảng giáo trình số.</h1>
                    <h3>Nơi đáng tin cậy để học giáo trình từ các trường đại học<br/>
                        Đọc những cuốn sách bản quyền giá rẻ <br/>
                        Tìm những người cùng sở thích
                    </h3>
                </div>
            </div>
            <div className='intro-2'>
                <div className='intro-2-up'>
                    <img src={logo} className='sample' />
                    <div className='intro-2-up-download'>
                        <h3 id='news'>WHAT’S NEW</h3>
                        <h3>Pikabook đã có phiên bản mới</h3>
                        <p>Tải Pikabook ngay</p>
                        <div className='intro-2-up-download-download'>
                            <button>
                                <AiFillWindows id='windows' size='2.5em' />
                                Download for Windows
                            </button>
                            <button>
                                <AiFillAndroid id='android' size='2.5em' />
                                Download for Android
                            </button>
                        </div>
                    </div>
                </div>
                <div className='intro-2-content'>
                    <h1>
                        Chúng tôi có gì<br />
                        Chúng tôi làm gì
                    </h1>
                    <div className='intro-2-content-data'>
                        <div className='intro-2-content-data-x'>
                            <h3>Sample data</h3>
                            <h5>data type</h5>
                        </div>
                        <div>+</div>
                        <div className='intro-2-content-data-x'>
                            <h3>Second data</h3>
                            <h5>data type</h5>
                        </div>
                        <div>+</div>
                        <div className='intro-2-content-data-x'>
                            <h3>100.000</h3>
                            <h5>user online</h5>
                        </div>
                    </div>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='intro-3'>
                <div className='intro-3-content'>
                    <h1>Pikabook là nơi cung cấp giáo trình<br />
                        và kết nối bạn với mọi người</h1>
                    <div className='intro-3-content-script'>
                        <h3>Pikabook được cung cấp giáo trình bởi giảng viên từ trường đại học Quốc Tế ĐHQG TP.HCM và trường đại
                            học Kinh Tế TP.HCM, được hứa hẹn sẽ là một nơi học tập lý tưởng cho các bạn học sinh, sinh viên và còn
                            là cánh tay nối dài trong công cuộc chuyển đổi số của thành phố
                        </h3>
                    </div>
                    <div className='intro-3-n'>
                        <div className='intro-3-ins-1'>
                            <div className='intro-3-x'>
                                <img src={logo} />
                            </div>
                            <div className='intro-3-y'>
                                <h3>Tài khoản</h3>
                                <ul>
                                    <li>Bắt đầu với việc học giáo trình ngay bằng cách tạo tài khoản tại Pikabook</li>
                                    <li>Chọn cho mình thể loại sách yêu thích</li>
                                    <li>Trang trí cho mình một profile thật đẹp nào!!</li>
                                </ul>
                            </div>
                        </div>
                        <div className='intro-3-ins-2'>
                            <div className='intro-3-y'>
                                <h3> Gíao Trình</h3>
                                <ul>
                                    <li>Pikabook là nền tảng số dùng để lưu trữ giáo trình của giảng viên từ các trường đại học lớn tại Việt Nam</li>
                                    <li>Chon cho mình một ngành yêu thích và Pikabook sẽ tìm cho bạn những tài liệu, giáo trình học tập từ các trường uy tín hàng đầu Việt Nam</li>
                                    <li>Để học được giáo trình, bạn cần phải trả phí, tuy nhiên đừng lo vì số tiền đó không đáng là bao so với lượng kiến thức mà bạn tiếp thu</li>
                                </ul>
                            </div>
                            <div className='intro-3-x'>
                                <img src={logo} />
                            </div>
                        </div>
                        <div className='intro-3-ins-3'>
                            <div className='intro-3-x'>
                                <img src={logo} />
                            </div>
                            <div className='intro-3-y'>
                                <h3>Kết nối</h3>
                                <ul>
                                    <li>Pikabook, đọc sách để kết nối. Chúng tôi sẽ tìm cho bạn một người bạn đọc hoặc một nhóm học lý tường </li>
                                    <li>Việc tìm kiếm theo sở thích được chúng tôi áp dụng công nghệ trí tuệ nhân tạo để tìm kiếm, bạn chỉ cần chờ đợi, Pikabook sẽ đem đến cho bạn một người bạn đọc hoặc một nhóm tùy theo yêu cầu của bạn</li>
                                    <li>Các tính năng share note và forum được tích hợp vào Pikabook sẽ giúp cho trao đổi kiến thức trở nên dễ dàng hơn</li>
                                </ul>
                            </div>
                        </div>
                        <div className='intro-3-ins-2'>
                            <div className='intro-3-y'>
                                <h3> Sách bản quyền</h3>
                                <ul>
                                    <li>Không những vậy Pikabook còn là nơi cung cấp các cuốn sách có bản quyền cho bạn</li>
                                    <li>Bằng công nghệ trí tuệ nhân tạo, Pikabook sẽ đề xuất cho bạn những cuốn sách mà bạn có thể thích dựa theo sở thích của bạn</li>
                                    <li>Một số cuốn sách có thể sẽ yêu cầu bạn trả phí, tuy nhiên chúng tôi sẽ cố gắng làm giảm mức phí này đến mức tối thiểu</li>
                                </ul>
                            </div>
                            <div className='intro-3-x'>
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*<div className='intro-4'>*/}
            {/*    <div >*/}
            {/*        <h1>Our supporter</h1>*/}
            {/*    </div>*/}
            {/*    <div className={'image-container'}>*/}
            {/*        <img src={sample} />*/}
            {/*        <img src={sample} />*/}
            {/*        <img src={sample} />*/}
            {/*        <img src={sample} />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}



export default HomeScreen;