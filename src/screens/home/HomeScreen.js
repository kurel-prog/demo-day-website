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
                        Introduction about our application,<br />
                        what we do here?
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
                    <h1>Docker makes development efficient<br />
                        and predictable</h1>
                    <div className='intro-3-content-script'>
                        <h3>Docker takes away repetitive,
                            mundane configuration tasks and is used
                            throughout the development lifecycle for fast,
                            easy and portable application development –
                            desktop and cloud. Docker’s comprehensive end
                            to end platform includes UIs, CLIs, APIs and
                            security that are engineered to work together
                            across the entire application delivery lifecycle.
                        </h3>
                    </div>
                    <div className='intro-3-n'>
                        <div className='intro-3-ins-1'>
                            <div className='intro-3-x'>
                                <img src={sample} />
                            </div>
                            <div className='intro-3-y'>
                                <h3>Build</h3>
                                <ul>
                                    <li>Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.</li>
                                    <li>Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.</li>
                                    <li>Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='intro-3-ins-2'>
                            <div className='intro-3-y'>
                                <h3>Build</h3>
                                <ul>
                                    <li>Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.</li>
                                    <li>Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.</li>
                                    <li>Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.</li>
                                </ul>
                            </div>
                            <div className='intro-3-x'>
                                <img src={sample} />
                            </div>
                        </div>
                        <div className='intro-3-ins-3'>
                            <div className='intro-3-x'>
                                <img src={sample} />
                            </div>
                            <div className='intro-3-y'>
                                <h3>Build</h3>
                                <ul>
                                    <li>Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.</li>
                                    <li>Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.</li>
                                    <li>Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='intro-4'>
                <div >
                    <h1>Our supporter</h1>
                </div>
                <div className={'image-container'}>
                    <img src={sample} />
                    <img src={sample} />
                    <img src={sample} />
                    <img src={sample} />
                </div>
            </div>
        </div>
    );
}



export default HomeScreen;