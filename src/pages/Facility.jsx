import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Pagination } from "react-bootstrap";

import Header from "./Header";
import KidsTable from "./KidsTable";

function Facility() {
  let dataset = useSelector((state) => state);

  let [tab, setTab] = useState(0);

  return (
    <section className="facility">
      <Header />
      <div className="breadcrumb">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <i className="fa-solid fa-angles-right"></i>
        <Link to="/Facility">시설소개</Link>
      </div>
      <section className="sec2 mw1">
        <h2>
          아이소풍 <strong>시설소개</strong>
        </h2>
        <p>전국 유아 동반 가능 문화시설을 찾아 볼 수 있습니다.</p>

        <Nav variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setTab(0);
              }}
            >
              서울
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setTab(1);
              }}
            >
              경기
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setTab(2);
              }}
            >
              강원
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              onClick={() => {
                setTab(3);
              }}
            >
              충청
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-4"
              onClick={() => {
                setTab(4);
              }}
            >
              전라
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-5"
              onClick={() => {
                setTab(5);
              }}
            >
              경상
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-6"
              onClick={() => {
                setTab(6);
              }}
            >
              제주
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContents tab={tab} dataset={dataset} />
      </section>
    </section>
  );
}

function TabContents({ tab, dataset }) {
  return [
    <KidsTable local={dataset.seoul} />,
    <KidsTable local={dataset.gyeonggi2} />,
    <KidsTable local={dataset.gangwon} />,
    <KidsTable local={dataset.chung4} />,
    <KidsTable local={dataset.jeon3} />,
    <KidsTable local={dataset.gyeongsang5} />,
    <KidsTable local={dataset.jeju} />,
  ][tab];
}

export default Facility;
