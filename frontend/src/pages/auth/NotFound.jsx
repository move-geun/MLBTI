import { NotFoundcontainer } from "./NotFound.style";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  function gomain() {
    navigate("/");
  }

  return (
    <NotFoundcontainer>
      <div>
        <img src="../assets/notfound.png" alt="" />
      </div>
      <button onClick={gomain}>메인으로 가기</button>
    </NotFoundcontainer>
  );
};

export default NotFound;
