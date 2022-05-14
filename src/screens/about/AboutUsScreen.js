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
        </div>
    );
}

export default AboutUsScreen;




