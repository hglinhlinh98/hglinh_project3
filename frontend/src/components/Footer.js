import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>CLA - Đại học Bách khoa HN</h4>
                <ul>
                  <li>
                    Email: <a href="mailto:cla@hust.edu.vn">cla@cfl.edu.vn</a>
                  </li>
                  <li>
                    Fanpage:{" "}
                    <a
                      title="Fanpage CFL"
                      href="https://fb.com/cfl.edu.vn"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      fb.com/cfl.edu.vn
                    </a>
                  </li>
                  <li>
                    Tel:{" "}
                    <a
                      title="Center for Foreign Languages - CFL"
                      href="tel:+842438682445"
                    >
                      +8424.3868.2445
                    </a>
                    ,{" "}
                    <a
                      title="Center for Foreign Languages - CFL"
                      href="tel:+842436231425"
                    >
                      3623.1425
                    </a>
                  </li>
                  <li>
                    Add:{" "}
                    <a href="https://cfl.edu.vn/gioi-thieu/so-do-chi-dan/">
                      C3B Building
                    </a>
                    , No 01 Dai Co Viet St,
                    <br />
                    Hai Ba Trung Dist, Hanoi, Vietnam
                  </li>
                  <li>
                    Hosted by{" "}
                    <a
                      href="http://www.hust.edu.vn/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      HUST
                    </a>
                    &#8211; Hanoi &#8211; Vietnam
                  </li>
                  <li>
                    <a
                      title="Tải phần mềm gõ tiếng Việt Unikey mới nhất"
                      href="http://unikey.vn/"
                    >
                      Tải Unikey
                    </a>{" "}
                    và gõ tiếng Việt với{" "}
                    <a
                      title="Tải phần mềm gõ tiếng Việt Unikey mới nhất"
                      href="http://unikey.vn"
                    >
                      Unikey
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Các khóa - Lớp luyện thi</h4>
                <ul>
                  <li>
                    <a href="https://cfl.edu.vn/khoa-luyen-thi-aptis-b1-cap-toc/">
                      Luyện thi <strong>Aptis B1</strong> cấp tốc
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/khoa-luyen-thi-aptis-b1-tang-cuong/">
                      Luyện thi <strong>Aptis B1</strong>
                      tăng cường
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/khoa-luyen-thi-aptis-b2/">
                      Luyện thi <strong>Aptis B2</strong> (CEFR)
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/tag/blended-learning/">
                      Khóa <strong>Blended Learning</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/luyen-thi/toeic-350/">
                      Khóa luyện thi TOEIC 350+
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/luyen-thi/toeic-400/">
                      Khóa luyện thi TOEIC 400+
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/luyen-thi/toeic-450-500/">
                      Khóa luyện thi TOEIC 500+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Thông tin khác</h4>
                <ul>
                  <li>
                    <a href="https://cfl.edu.vn/tag/thong-bao-thi-toeic-quoc-te/">
                      Thông báo thi TOEIC (IIG)
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/tag/thong-bao-thi-aptis/">
                      Thông báo thi Aptis (BC)
                    </a>
                  </li>
                  <li>
                    <a href="https://cfl.edu.vn/tag/thong-bao-thi-tieng-anh-noi-bo/">
                      Thông báo thi Nội bộ trường
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cfl.edu.vn/tag/du-an-nhat/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khóa học tiếng Nhật
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cfl.edu.vn/tag/hoc-tieng-han/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khóa học tiếng Hàn
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://vdz.edu.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khóa học tiếng Đức
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://cfc-fr.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Khóa học tiếng Pháp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center justify-content-between">
            <p className="footer-text m-0 col-lg-6 col-md-12">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a href="https://www.facebook.com/wicombk" target="_blank">
                WicomLab
              </a>
            </p>
            <div className="col-lg-6 col-sm-12 footer-social">
              <a href="https://www.facebook.com/cfl.edu.vn">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
