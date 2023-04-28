import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  let dataset = useSelector((state) => state);
  let { id } = useParams();
  console.log(id);

  // const decodedId = decodeURIComponent(id);
  // const detailItem = dataset.find((item) => {
  //   const eachId = `${item["시도 명칭"]}-${item["시설명"]}`;
  //   return eachId === decodedId;
  // });
  // console.log(detailItem);

  // let detailItem = dataset.find((item) => {
  //   return item.시설명 === id;
  // });
  // console.log(detailItem);
  console.log(dataset);

  return (
    <>
      <div>디테일페이지야</div>
      {/* {detailItem && (
        <div>
          <h2>{detailItem["시설명"]}</h2>
        </div>
      )} */}
      <div>{/* <h2>{dataset["시설명"]}</h2> */}</div>
    </>
  );
}

export default Detail;
