import './pricing.css'


function PricingScreen() {
    return (
        <div className="pricing">
            <div className="pricing-title">
                <h1>Các gói sản phẩm</h1>
                <h3>Chọn một gói phù hợp với bạn.</h3>
            </div>
            <div className="pricing-x">
                <div className="tab">
                    <div className="tab-title">
                        <h2>Dùng Thử</h2>
                    </div>
                    <div className="tab-content middle">
                        <p id="infor-description">Trải nghiệm công nghệ, sách và giáo trình của ứng dụng trong vòng 3 tháng.</p>
                        <div className="infor-price">
                            <h1 id="infor-price-number">0</h1>
                            <div className="infor-price-script">
                                <span>đ/ 3 tháng</span>
                            </div>
                        </div>
                        <div className="infor-container">
                            <div className="infor-container-title">
                                <h4>Được trải nghiệm như bản Premium</h4>
                            </div>
                            <ul>
                                <li>Không giới hạn sách và giáo trình</li>
                                <li>Được chia sẻ sách giấy</li>
                                <li>Ghép đôi, ghép nhóm đọc</li>
                                <li>Bình luận</li>
                                <li>Không quảng cáo</li>
                            </ul>
                        </div>
                        <div className="buy-btn">
                            <button>Dùng Thử Ngay</button>
                        </div>
                    </div>
                </div>

                {/*classic*/}
                <div className="tab">
                    <div className="tab-title">
                        <h2>Classic</h2>
                    </div>
                    <div className="tab-content middle">
                        <p id="infor-description">Dành cho người đọc phổ thông, muốn đọc sách phổ biến và đại trà.</p>
                        <div className="infor-price">
                            <h1 id="infor-price-number">79.000</h1>
                            <div className="infor-price-script">
                                <span>đ/ tháng</span>
                            </div>
                        </div>
                        <div className="infor-container">
                            <div className="infor-container-title">
                                <h4>Quyền lợi của bản classic</h4>
                            </div>
                            <ul>
                                <li>Đọc sách, giáo trình trong giới hạn</li>
                                <li>Được chia sẻ sách giấy</li>
                                <li>Ghép đôi, ghép nhóm đọc</li>
                                <li>Bình luận</li>
                                <li>Không quảng cáo</li>
                            </ul>
                        </div>
                        <div className="buy-btn">
                            <button>Mua Ngay</button>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <div className="tab-title">
                        <h2>Premium</h2>
                    </div>
                    <div className="tab-content middle">
                        <p id="infor-description">Dành cho sinh viên và chuyên gia, tìm tài liệu để nghiên cứu.</p>
                        <div className="infor-price">
                            <h1 id="infor-price-number">99.000</h1>
                            <div className="infor-price-script">
                                <span>đ/ tháng</span>
                            </div>
                        </div>
                        <div className="infor-container">
                            <div className="infor-container-title">
                                <h4>Quyền lợi của bản Premium</h4>
                            </div>
                            <ul>
                                <li>Không giới hạn sách và giáo trình</li>
                                <li>Được chia sẻ sách giấy</li>
                                <li>Ghép đôi, ghép nhóm đọc</li>
                                <li>Bình luận</li>
                                <li>Không quảng cáo</li>
                            </ul>
                        </div>
                        <div className="buy-btn">
                            <button>Mua Ngay</button>
                        </div>
                    </div>
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

export default PricingScreen;