import { Link } from "react-router-dom";

import Header from "./Header";

function Review() {
  return (
    <section className="review">
      <Header />
      <div className="breadcrumb">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <i className="fa-solid fa-angles-right"></i>
        <Link to="/Review">이용후기</Link>
      </div>

      <section className="sec3 mw1">
        <h2>
          아이소풍 <strong>리얼후기</strong>
        </h2>
        <p>
          전국 유아 동반 가능 문화시설을 방문하신 분들의 생생한 후기를 볼 수
          있습니다.
        </p>
      </section>
    </section>
  );
}

export default Review;
