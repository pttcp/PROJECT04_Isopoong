import { configureStore, createSlice } from "@reduxjs/toolkit";
import busanList from "./busan";
import chungbukList from "./chungbuk";
import chungnamList from "./chungnam";
import daeguList from "./daegu";
import daejeonList from "./daejeon";
import gangwonList from "./gangwon";
import gwangjuList from "./gwangju";
import gyeongbukList from "./gyeongbuk";
import gyeonggiList from "./gyeonggi";
import gyeongnamList from "./gyeongnam";
import incheonList from "./incheon";
import jejuList from "./jeju";
import jeonbukList from "./jeonbuk";
import jeonnamList from "./jeonnam";
import sejongList from "./sejong";
import seoulList from "./seoul";
import ulsanList from "./ulsan";

import reviewDataList from "./reviewDataList";

let gangwon = createSlice({
  name: "gangwon",
  initialState: gangwonList,
});
let jeju = createSlice({
  name: "jeju",
  initialState: jejuList,
});
let seoul = createSlice({
  name: "seoul",
  initialState: seoulList,
});

let chung4List = [
  ...daejeonList,
  ...sejongList,
  ...chungbukList,
  ...chungnamList,
];
let chung4 = createSlice({
  name: "chung4",
  initialState: chung4List,
});

let gyeonggi2List = [...gyeonggiList, ...incheonList];
let gyeonggi2 = createSlice({
  name: "gyeonggi2",
  initialState: gyeonggi2List,
});

let jeon3List = [...gwangjuList, ...jeonbukList, ...jeonnamList];
let jeon3 = createSlice({
  name: "jeon3",
  initialState: jeon3List,
});

let gyeongsang5List = [
  ...busanList,
  ...daeguList,
  ...gyeongbukList,
  ...gyeongnamList,
  ...ulsanList,
];
let gyeongsang5 = createSlice({
  name: "gyeongsang5",
  initialState: gyeongsang5List,
});

let allLocalList = [
  ...gangwonList,
  ...jejuList,
  ...seoulList,
  ...daejeonList,
  ...sejongList,
  ...chungbukList,
  ...chungnamList,
  ...gyeonggiList,
  ...incheonList,
  ...gwangjuList,
  ...jeonbukList,
  ...jeonnamList,
  ...busanList,
  ...daeguList,
  ...gyeongbukList,
  ...gyeongnamList,
  ...ulsanList,
];
let allLocal = createSlice({
  name: "allLocal",
  initialState: allLocalList,
});

let reviewData = createSlice({
  name: "reviewData",
  initialState: reviewDataList,
});

export default configureStore({
  reducer: {
    gangwon: gangwon.reducer,
    jeju: jeju.reducer,
    seoul: seoul.reducer,
    gyeonggi2: gyeonggi2.reducer,
    jeon3: jeon3.reducer,
    gyeongsang5: gyeongsang5.reducer,
    chung4: chung4.reducer,
    allLocal: allLocal.reducer,
    reviewData: reviewData.reducer,
  },
});
