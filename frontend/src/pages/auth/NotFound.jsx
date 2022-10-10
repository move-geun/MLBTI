import { NotFoundcontainer } from "./NotFound.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  // 브라우저 화면 크기 저장
  const [windowSize, setWindowSize] = useState("undefined");
  // 화면 크기 추적
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  const navigate = useNavigate();
  function gomain() {
    navigate("/");
  }

  if (windowSize > 980) {
    return (
      <NotFoundcontainer>
        <div>
          <img src="../assets/notfound.png" alt="" />
        </div>
        <button onClick={gomain}>메인으로 가기</button>
      </NotFoundcontainer>
    );
  } else if (windowSize > 480) {
    return (
      <NotFoundcontainer>
        <div>
          <img src="../assets/notfound2.png" alt="" />
          <span>나오나</span>
        </div>
        <button onClick={gomain}>메인으로 가기</button>
      </NotFoundcontainer>
    );
  } else {
    return (
      <NotFoundcontainer>
        <div>
          <img src="../assets/notfound3.png" alt="" />
          <span>이건?</span>
        </div>
        <button onClick={gomain}>메인으로 가기</button>
      </NotFoundcontainer>
    );
  }
};
export default NotFound;
