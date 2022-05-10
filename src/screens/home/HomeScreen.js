import './home.css';
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';


function HomeScreen() {
    return (
        <div>
            HomeScreen
            <Footer />
        </div>
    );
}

const Footer = () => {
    return (
        <div className=''>
            <div className=''>
                <div>
                    © 2022 Pikabook. <a href='https://github.com/kurel-prog'>kurel-prog</a>
                </div>
                <div>
                    <AiFillFacebook color='#fff' id='icon' size='2.5em' />
                    <AiFillTwitterSquare color='#fff' id='icon' size='2.5em' />
                    <AiFillTwitterSquare color='#fff' id='icon' size='2.5em' />
                    <AiFillInstagram color='#fff' id='icon' size='2.5em' />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;