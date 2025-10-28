import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const userInfo = { username, password };
    login(userInfo);
    navigate("/dashboard");
  }
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);

  function navigateToSignUp() {
    navigate("/register");
  }
  return (
    <form action="" ref={formRef}>
      <div>
        <label htmlFor="">User name : </label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="">Password : </label>
        <input type="password" ref={passwordRef} />
      </div>
      <div>
        <input type="button" value="Login" onClick={handleLogin} />
      </div>
      <div>
        <p>
          Not signed in? <span onClick={navigateToSignUp}>Sign-up here</span>
        </p>
      </div>
    </form>
  );
}
export default Login;
