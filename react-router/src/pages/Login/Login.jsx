import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
    <Box component="form">
      <div>
        <TextField label="User name" variant="outlined" ref={usernameRef} />
      </div>
      <div>
        <TextField label="Password" variant="outlined" ref={passwordRef} />
      </div>
      <div>
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </div>
      <div>
        <p>
          Not signed in? <span onClick={navigateToSignUp}>Sign-up here</span>
        </p>
      </div>
    </Box>
  );
}
export default Login;
