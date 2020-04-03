import React from 'react';

const BannerCarousel = () => {
    return (
        <div className="mb-5">
            <section className="myCover">
            </section>
            {/* END cover */}
            <section className="intro">
                <div className="intro_content row">
                    <div className="col-md-4 intro_item">
                        <i className="fa fa-bullseye intro_icon" />
                        <div className="icon_content">
                            <p>MỤC TIÊU ĐI ĐẦU</p>
                            <p>Cụ thể hóa mục tiêu dành cho từng chặng phát triển của bạn</p>
                        </div>
                    </div>
                    <div className="col-md-4 intro_item">
                        <i className="fa fa-spinner intro_icon" />
                        <div className="icon_content">
                            <p>LỘ TRÌNH RÕ RÀNG</p>
                            <p>Phát triển năng lực và niềm đam mê cảm hứng học tập trong bạn</p>
                        </div>
                    </div>
                    <div className="col-md-4 intro_item">
                        <i className="fa fa-history intro_icon" />
                        <div className="icon_content">
                            <p>HỖ TRỢ LIÊN TỤC</p>
                            <p>Nhóm chat với hàng ngàn thành viên thân thiện giúp đỡ nhau</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END intro */}
        </div>
    );
};

export default BannerCarousel;