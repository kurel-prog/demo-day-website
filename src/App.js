import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import logo from './assets/logotypew.png';
import React, {useEffect, useState} from "react";
import base_routers from "./components/router";
import AboutUsScreen from "./screens/about/AboutUsScreen";
import BlogScreen from "./screens/blog/Blog";
import DeveloperScreen from "./screens/developers/Develop";
import Pricing from "./screens/pricing/Pricing";
import ProductScreen from "./screens/products/Product";
import HomeScreen from "./screens/home/HomeScreen";
import { AiOutlineMenu } from "react-icons/ai";
import logoNav from "./assets/nav/LOGO PIKABOOK.jpg";

const appNavMenuRes = document.querySelector('.App-nav-respo-container-off');
const appNavMenuChild = document.querySelector('.App-nav-menu-off')
const appButtonMenu = document.querySelector('.App-nav-respo-menu-icon')

appButtonMenu.addEventListener('click', function (e)
{
    if(appNavMenuRes.className === "App-nav-respo-container-off") {
        appNavMenuRes.className = "App-nav-respo-container-on"
        appNavMenuChild.className="App-nav-menu-on"
    }
    else {
        appNavMenuRes.className = "App-nav-respo-container-off"
        appNavMenuChild.className="App-nav-menu-off"
    }
    e.stopPropagation()
})

appNavMenuRes.addEventListener('click',function ()
{

})

function App() {
    const [onScreen, setOnScreen] = useState('Home');

    useEffect(() => {}, [onScreen])
    return (
        <div>
            <div className='App-nav-container' >
                <div className='App-nav-logo-container'  >
                    <img className='App-nav-logo' src={logo} />
                </div>
                <nav className='App-nav-bar' >
                    {
                        base_routers.map(
                            item =>
                                <button
                                    onClick={() => setOnScreen(item.component)}
                                    className={
                                        onScreen === item.component ?
                                            'App-nav-bar-link-container-active' :
                                            'App-nav-bar-link-container'
                                    }
                                >
                                    <Link className='App-nav-bar-link'
                                        to={item.link}
                                    >
                                        {item.component}
                                    </Link>
                                </button>
                        )
                    }
                </nav>
                <div className='App-nav-get-started' >
                    <button className='App-nav-get-started'>Get Started</button>
                </div>
            </div>
            <div className={'App-nav-respo-container-off'}>
                    <div className={'App-nav-menu-off'}>
                        <div className={'nav-respo-img--container'}>
                            <img className='App-nav-logo' src={logo} />
                        </div>
                        <nav className='App-nav-bar' >
                            {
                                base_routers.map(
                                    item =>
                                        <button
                                            onClick={() => setOnScreen(item.component)}
                                            className={
                                                onScreen === item.component ?
                                                    'App-nav-bar-link-container-active' :
                                                    'App-nav-bar-link-container'
                                            }
                                        >
                                            <Link className='App-nav-bar-link'
                                                  to={item.link}
                                            >
                                                {item.component}
                                            </Link>
                                        </button>
                                )
                            }
                        </nav>
                    </div>
                    <div className={'App-nav-respo-menu-icon'}>
                        <AiOutlineMenu/>
                    </div>
            </div>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="about" element={<AboutUsScreen />} />
                <Route path="blog" element={<BlogScreen />} />
                <Route path="develop" element={<DeveloperScreen />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="product" element={<ProductScreen />} />
            </Routes>
            <footer>

            </footer>
        </div>
  );
}

export default App;