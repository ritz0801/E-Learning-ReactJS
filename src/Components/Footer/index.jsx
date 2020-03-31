import React, { Component } from 'react'
import logo from '../../Assets/img/logoelearning.jpg'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_head container">
                    <div className="footer_title">
                        <h4>E-Learning Teaching</h4>
                        <p>Hệ thống đào tạo lập trình chuyên sâu và ứng dụng theo dự án thực tế.<br />
                            Võ Anh Dũng – N17DCCN023 <br />
                            Phone: 0933636672<br />
                            Fax: 0933636672<br />
                            Mail: vodung0801@gmail.com.com
                        </p>
                    </div>

                    <div>
                        <h4>Tin tức khuyến mãi</h4>
                        <p>
                            E-learing sẽ gởi các khóa học trực tuyến & các chương trình hoàn toàn MIỄN PHÍ và KHUYẾN MÃI hấp dẫn đến các bạn.
                        </p>

                    </div>
                    <div>
                        <h4> </h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email..." aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="input-group-text" id="basic-addon2">Đăng ký</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="footer_end">
                    <div className="copyright">
                        <a className="footer_logo" href="#">
                            <img src={logo} alt="Logo Udemy" />
                        </a>
                    </div>
                    <div className="policy">
                        <a href="#">Term</a>
                        <a href="#">Privacy Policy and Cookie Policy</a>
                    </div>
                </div>
            </footer>

        )
    }
}
