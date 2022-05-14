import './develop.css'
import { FaRocket,FaDownload,FaBook } from "react-icons/fa";
import video from "../../assets/developers_sample/video_img.svg"
// import {Footer} from "../home/HomeScreen";
function DeveloperScreen() {
    return (
        <div className={'develop'}>
            <div className={'develop-place1'}>
                <h1>Bạn cần tìm gì?</h1>
                <form action={'/develop'} method={'get'}>
                    <input  placeholder={'Search for book, author and more...'}/>
                </form>
            </div>
            <div className={'develop-place2'}>
                <a className={'develop-place2-item'} href={'/'}>
                    <FaRocket/>
                    <h3>Get started</h3>
                    <p>Cách sử dụng Pikabook</p>
                </a>
                <a className={'develop-place2-item'} href={'/'}>
                    <FaDownload/>
                    <h3>Download</h3>
                    <p>Download Pikabook</p>
                </a>
                <a className={'develop-place2-item'} href={'/'}>
                    <FaBook/>
                    <h3>Manual</h3>
                    <p>Know about Pikabook service</p>
                </a>
                {/*<a className={'place2-item'} href={'/'}>*/}
                {/*    <FaLaptopCode/>*/}
                {/*    <h3>Reference</h3>*/}
                {/*    <p> Pikabook</p>*/}
                {/*</a>*/}
            </div>
            <div className={'develop-place3'}>
                <div className={'develop-place3-item1'}>
                    <h2>Làm thế nào?</h2>
                    <h3>Coi thử hướng dẫn sau để hiểu rõ hơn cách hoạt đông của Pikabook</h3>
                    <div className={'develop-item-container'}>
                        <a href={''}>Làm thế nào để tạo một tài khoản</a>
                        <a href={''}>Làm thế nào để tạo một nhóm</a>
                        <a href={''}>Cách sử dụng note</a>
                        <a href={''}>Viết một câu bình luận</a>
                        <a href={''}>Tìm nhóm cho bạn</a>
                        <a href={''}>Cách để mua được một cuốn sách</a>
                        <a href={''}>Cách để đăng ký tài khoản premium</a>
                    </div>
                </div>

                <div className={'develop-place3-item2'}>
                    <h2>Popular videos</h2>
                    <h4>Xem những video phổ biến nhất về Pikabook.</h4>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'}href={''}>
                            <img src={video}/>
                            <p>Demo app</p>
                        </a>
                    </div>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'}href={''}>
                            <img src={video}/>
                            <p>Tại sao lại là Pikabook?</p>
                        </a>
                    </div>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'} href={''}>
                            <img src={video}/>
                            <p>Cách để bắt đầu với Pikabook</p>
                        </a>
                    </div>
                </div>

            </div>
            {/*<Footer/>*/}
        </div>
    );
}

export default DeveloperScreen;