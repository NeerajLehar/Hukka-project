import Input from "../../componets/input/input";
import Button from "../../componets/button/button";
import "./login.scss";
import logo from "../../images/logo.png";
import ukFlag from "../../images/uk.png";
import finlandFlag from "../../images/finland.png";
import russia from "../../images/russia.png";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div className="login">
      <div className="logoContainer">
        <img src={logo} alt="" />
        <p>INTERNET</p>
      </div>
      <Input type="text" placeholder="user name"></Input>
      <Input type="text" placeholder="password"></Input>
      <Button BgColor="green">button</Button>
      <Link to="#" className="forgetLink">
        forget password
      </Link>
      <div className="langSelection">
        <Link to="/">
          <img src={ukFlag} alt="" />
        </Link>
        <Link to="#">
          <img src={finlandFlag} alt="" />
        </Link>
        <Link to="#">
          <img src={russia} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
