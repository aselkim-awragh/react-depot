import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
function Register() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { register } = useContext(AuthContext);
  function handleRegister() {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userInfo = { username, email, password };
    register(userInfo);
  }
  return (
    <form>
      <div>
        <label htmlFor="">User name : </label>
        <input type="text" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="">Email : </label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="">Password : </label>
        <input type="password" ref={passwordRef} />
      </div>
      <div>
        <input type="button" value="Register" onClick={handleRegister} />
      </div>
    </form>
  );
}

export default Register;
