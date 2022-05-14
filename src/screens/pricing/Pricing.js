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
        </div>
    );
}

export default PricingScreen;