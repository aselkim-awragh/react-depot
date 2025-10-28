import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
    <Box component="form">
      <div>
        <TextField label="User name" variant="outlined" ref={usernameRef} />
      </div>
      <div>
        <TextField label="Email" variant="outlined" ref={emailRef} />
      </div>
      <div>
        <TextField label="Password" variant="outlined" ref={passwordRef} />
      </div>
      <div>
        <Button onClick={handleRegister} variant="contained">
          Register
        </Button>
      </div>
    </Box>
  );
}

export default Register;
