import './about-us.css';
import anhtai from '../../assets/about-images/anhtai.jpg'
import trung from '../../assets/about-images/trung.jpg'
import don from '../../assets/about-images/don.jpg'
import anh from '../../assets/about-images/anh.jpg'
import duong from '../../assets/about-images/duong.jpg'
import coPhuong from '../../assets/about-images/coPhuong.jpg'
import thayTan from '../../assets/about-images/thayTan.JPG'
import tongvuthandan from '../../assets/about-images/tongvuthandan.jpg'
import hominhnhat from '../../assets/about-images/hominhnhat.jpg'
import phamtridang from '../../assets/about-images/phamtridang.jpg'
function AboutUsScreen() {
    return (
        <div className="about">
            <div className="about-title">
                Về chúng tôi
            </div>
            <div className="about-x">
                <div className="actor">
                    <div className="actor-img">
                        <img src={anhtai} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Trần Tấn Tài</h3>
                        <h4 id="infor-script">Phụ trách phát triển công nghệ dự án</h4>
                        <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                        <h5 id="infor">taitran1401tn@gmail.com</h5>
                        <h5 id="infor">0968084751</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={trung} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Nguyễn Trần Minh Trung</h3>
                        <h4 id="infor-script">Phụ trách bảo mật thông tin</h4>
                        <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                        <h5 id="infor">trungnguyen29775@gmail.com</h5>
                        <h5 id="infor">0972419560</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={don} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Ngô Huỳnh Khánh Đoan</h3>
                        <h4 id="infor-script">Phụ trách vận hành tài chính dự án</h4>
                        <h5 id="infor">Đại học Kinh Tế</h5>
                        <h5 id="infor">doanngo.31211020538@st.ueh.edu.vn</h5>
                        <h5 id="infor">0907535681</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
            </div>
            <div className="about-x">
                <div className="actor">
                    <div className="actor-img">
                        <img src={duong} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Lê Duy Dương</h3>
                        <h4 id="infor-script">Phụ trách bản quyền và sử hữu trí tuệ</h4>
                        <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                        <h5 id="infor">duyduong07022002@gmail.com</h5>
                        <h5 id="infor">0357753457</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={anh} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Nguyễn Cửu Phúc Anh</h3>
                        <h4 id="infor-script">Phụ trách marketing, truyền thông dự án</h4>
                        <h5 id="infor">Đại học Kinh Tế</h5>
                        <h5 id="infor">anhnguyen.31211026248@st.ueh.edu.vn</h5>
                        <h5 id="infor">0945056357</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
            </div>


            {/* hết phần team member*/}


            <div className="about-title">
                Đội ngũ cố vấn
            </div>
            <div className="about-x">
                <div className="actor">
                    <div className="actor-img">
                        <img src={coPhuong} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">PGS. TS. Võ Thị Lưu Phương</h3>
                        <h4 id="infor-script">Trưởng Bộ môn CNTT - Khoa CNTT</h4>
                        <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                        <h5 id="infor">vtlphuong@hcmiu.edu.vn</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={thayTan} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">TS. Lê Duy Tân</h3>
                        <h4 id="infor-script">Giảng viên khoa CNTT</h4>
                        <h5 id="infor">ĐH Quốc tế - ĐHQG TP.HCM</h5>
                        <h5 id="infor">ldtan@hcmiu.edu.vn</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={tongvuthandan} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Tống Vũ Thân Dân</h3>
                        <h4 id="infor-script">Giám đốc vận hành</h4>
                        <h5 id="infor">Công Ty Cổ Phần Gremsy</h5>
                        <h5 id="infor">dan.tong@gremsy.com</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
            </div>
            <div className="about-x">
                <div className="actor">
                    <div className="actor-img">
                        <img src={hominhnhat} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">TS. Hồ Minh Nhật</h3>
                        <h4 id="infor-script-special">Chủ tịch CLB Khởi nghiệp </h4>
                        <h4 id="infor-script-special">và ĐMST địa phương</h4>
                        <h5 id="infor">Văn phòng đề án 844, Bộ KHCN</h5>
                        <h5 id="infor">nhatho.dost@gmail.com</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
                <div className="actor">
                    <div className="actor-img">
                        <img src={phamtridang} alt=""/>
                    </div>
                    <div className="actor-content middle">
                        <h3 id="infor-name">Phạm Trí Đăng</h3>
                        <h4 id="infor-script">Chuyên gia phân tích tài chính</h4>
                        <h5 id="infor-special">công ty Gillette – Tập đoàn P&G Việt Nam</h5>
                    </div>
                    <div className="actor-more middle">Tìm hiểu thêm →</div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-copyright">© 2022 Pikabook</div>
                <div className="footer-icons">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" id="icon"
                         height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" id="icon"
                         height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" id="icon"
                         height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" id="icon"
                         height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default AboutUsScreen;




