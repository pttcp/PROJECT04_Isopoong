import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="sec1">
      <h1>
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
      </h1>
      <div className="sec1_left">
        <div className="introbox">
          <p>시설소개</p>
          <p>전국의 아이 동반 가능 문화 시설을 안내드립니다.</p>
          <Link to="/Facility" className="btn_intro">
            시설소개 바로가기 &#8640;
          </Link>
        </div>
        <img src="/img/sec1_bg1.jpg" alt="bg1" />
      </div>
      <div className="sec1_right">
        <div className="introbox">
          <p>방문후기</p>
          <p>문화시설에 대한 다양한 방문 후기를 보실 수 있습니다.</p>
          <Link to="/" className="btn_intro">
            방문후기 바로가기 &#8640;
          </Link>
        </div>
        <img src="/img/sec1_bg2.jpg" alt="bg2" />
      </div>
    </section>
  );
}

export default Intro;
