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

export const Footer = () => {
    return (
        <div className=''>
            <div className=''>
                <div>
                    © 2022. <a href='https://www.facebook.com/PikaBook-114725921219915'>Pikabook</a>
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