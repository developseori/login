import React, {useState} from "react";
import profile from "./img/100x55(영문-bg-white).png";
// import axios from "axios";

const LoginForm = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };

  const [password, setPassword] = useState("");
  const onPasChange = (e) => {
    setPassword(e.target.value);
  };
  const onPasReset = () => {
    setPassword("");
  };
  const
  // const [onClick, setonClick] = useState("fale");
  // const on

  return (
    <div className="main">
      <img src={profile} alt="profile" className="profile" />
      <div className="ID">
        <div className="span">
          ID
        </div>
        <div className="text-id">
        <input className="input"
          placeholder="입력하세요"
          onChange={onChange}
          value={text}>
        </input>
        <button className="reset"onClick={onReset} type="reset" value={"x"}>x</button>
      </div>
      </div>
      <br />
      <div className="Password">
        <div className="span">
          Password
        </div> 
        <div className="text-pw">
        <input className="input"
          placeholder="입력하세요"
          onChange={onPasChange}
          value={password}
        />
        <button className="reset"onClick={onPasReset} type="reset" value={"x"}>x</button>
      </div>
      </div>
      <br />
      <button className="button" onClick={()=> {alert('id/password가 다릅니다.');}} type="button">로그인</button>
    </div>
  );
};

export default LoginForm;
