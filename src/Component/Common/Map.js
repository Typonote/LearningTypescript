/* global kakao */
import React, { useEffect } from "react";
import "./scss/_Map.scss";

// 전체지도 생성
export default function Map(props) {
  useEffect(() => {
    mapscript();
  }, [props]);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5043, 127.04925),
      level: 12,
    };

    // map
    const map = new kakao.maps.Map(container, options);

    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 마커이미지의 주소.

    const imageSize = new kakao.maps.Size(23, 26); // 마커이미지의 크기
    const imageOption = { offset: new kakao.maps.Point(0, 22) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    props.data.forEach((el) => {
      // 마커를 생성합니다
      // eslint-disable-next-line no-new
      new kakao.maps.Marker({
        // 마커가 표시 될 지도
        // eslint-disable-next-line object-shorthand
        map: map,
        // 마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        // 마커에 hover시 나타날 title
        title: el.name,
        // 이미지 변경
        image: markerImage,
      });
    });
  };

  return (
    <>
      <div id="map" style={{ height: "500px", marginTop: "50px" }} />
    </>
  );
}
