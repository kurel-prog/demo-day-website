import './develop.css'
import { FaRocket,FaDownload,FaBook } from "react-icons/fa";
import video from "../../assets/developers_sample/video_img.svg"
import {Footer} from "../home/HomeScreen";
function DeveloperScreen() {
    return (
        <div className={'develop'}>
            <div className={'develop-place1'}>
                <h1>What can we help you find?</h1>
                <form action={'/develop'} method={'get'}>
                    <input  placeholder={'Search for book, author and more...'}/>
                </form>
            </div>
            <div className={'develop-place2'}>
                <a className={'develop-place2-item'} href={'/'}>
                    <FaRocket/>
                    <h3>Get started</h3>
                    <p>Know how to use Pikabook</p>
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
                    <h2>How do I?</h2>
                    <h3>Check out the following topics to learn how to use Pikabook.</h3>
                    <div className={'develop-item-container'}>
                        <a href={''}>How to create a group</a>
                        <a href={''}>How to create an account</a>
                        <a href={''}>How to use note</a>
                        <a href={''}>How to write a comment</a>
                        <a href={''}>Finding a group</a>
                        <a href={''}>How to buy a book</a>
                        <a href={''}>How to register premium account</a>
                    </div>
                </div>

                <div className={'develop-place3-item2'}>
                    <h2>Popular videos</h2>
                    <h4>Watch the most popular videos from Pikabook.</h4>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'}href={''}>
                            <img src={video}/>
                            <p>Demo app</p>
                        </a>
                    </div>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'}href={''}>
                            <img src={video}/>
                            <p>Why Pikabook?</p>
                        </a>
                    </div>
                    <div className={'develop-place3-link-video'}>
                        <a className={'develop-link-video'} href={''}>
                            <img src={video}/>
                            <p>How to get start with Pikabook</p>
                        </a>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default DeveloperScreen;