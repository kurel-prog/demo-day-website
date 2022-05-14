import './AboutUs.css';
import sample from "../../assets/sample.webp";
import {AiFillAndroid, AiFillWindows} from "react-icons/ai";
import ActorComponent from "../../components/ActorComponent";

function AboutUsScreen() {
    const data1 = [], data2 = [];
    for (let i = 0; i < data.length; i++) {
        if (i<3) {
            data1.push(data[i]);
        } else {
            data2.push(data[i]);
        }
    }
    return (
        <div className='intro-2'>
            <div className='intro-2-up'>
                <img src={sample} className='sample' />
                <div className='intro-2-up-download'>
                    <h3 id='news'>WHAT’S NEW</h3>
                    <h3>Announcement</h3>
                    <p>Docker announces Series C financing to accelerate how we enable developers to spend more time on innovation, less on everything else.</p>
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
            <div className='about'>
                <div className='about-x'>
                    {
                        data1.map((item) => (
                            <ActorComponent data={item} />
                        ))
                    }
                </div>
                <div className='about-x'>
                    {
                        data2.map((item) => (
                            <ActorComponent data={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    },
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    },
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    },
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    },
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    },
    {
        name: 'Tran Tan Tai',
        nickname: 'kurel.prog',
        email: 'taitran1401tn@gmail.com',
        fb: 'xyz.com',
        contact: '0123456789',
        img: sample,
        school: 'International University',
    }
];

export default AboutUsScreen;