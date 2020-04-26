import React from 'react';
import Slider from "react-slick";

const StudentReaction = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="student_reaction">
            <div className="student_reaction_container container">
                <h3 className="text-center">Cảm nghĩ của học viên</h3>
                <Slider {...settings}>
                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar">
                                <span>H</span>
                            </div>
                            <p className="student_reaction_name">Huấn Hoa Hoè</p>
                        </div>
                        <p className="student_reaction_comment">
                            Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có ăn *** *** ăn ***!
                        </p>
                    </div>

                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar ava1">
                                <img src="./img/person1.jpg" alt="" />
                            </div>
                            <p className="student_reaction_name">Dũng Võ</p>
                        </div>
                        <p className="student_reaction_comment">
                            Tằng tà lằng tà lằng tà lăng ta lăng.
                        </p>
                    </div>

                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar ava2">
                                <img src="./img/person2.jpg" alt="" />
                            </div>
                            <p className="student_reaction_name">Huấn Râu Zì</p>
                        </div>
                        <p className="student_reaction_comment">
                            Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có ăn *** *** ăn ***!
                        </p>
                    </div>

                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar ava3">
                                <img src="./img/person4.jpg" alt="" />
                            </div>
                            <p className="student_reaction_name">Trần Dần</p>
                        </div>
                        <p className="student_reaction_comment">
                            Alo alo! Tôi là đệ nhất quốc sư Hoa Kỳ Trần Dần! Xin kính chào toàn thể quý zị!
                        </p>
                    </div>

                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar ava4">
                                <img src="./img/person5.jpg" alt="" />
                            </div>
                            <p className="student_reaction_name">Khá Bảnh</p>
                        </div>
                        <p className="student_reaction_comment">
                            Bạn không hiểu bài là do bạn không chơi đồ đấy!
                        </p>
                    </div>

                    <div className="student_reaction_item">
                        <div className="student_reaction_person">
                            <div className="student_reaction_avatar">
                                <span>D</span>
                            </div>
                            <p className="student_reaction_name">Lê Khắc Duy</p>
                        </div>
                        <p className="student_reaction_comment">
                            Có làm thì mới có ăn, không làm mà đòi ăn thì chỉ có ăn *** *** ăn ***!
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default StudentReaction;