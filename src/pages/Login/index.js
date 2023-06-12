import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { useNavigate } from "react-router-dom";
import "./index.css";

import { firebase } from "../../Firebase/firebase";
const Login = ({ setIsUser, setUser }) => {
  const IsUser = useNavigate();

  const SignIpWithGoogle = () => {
    const google_Provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_Provider)
      .then((res) => {
        setIsUser();
        IsUser("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SignIpWithGuest = () => {
    setIsUser();
    let UserTempNode = {
      UserName: "訪客",
      UserEmail: "guest",
      UserPhoto:
        "https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png",
    };
    setUser(UserTempNode);
    IsUser("/Home");
  };

  return (
    <div className="LoginContainer">
      <Button
        id="LoginGoogle"
        onClick={SignIpWithGoogle}
        variant="contained"
        startIcon={<GoogleIcon />}
      >
        Login With Google
      </Button>
      <Button
        id="LoginGuest"
        onClick={SignIpWithGuest}
        variant="contained"
        startIcon={<LoginSharpIcon />}
      >
        Login With Guest
      </Button>
    </div>
  );
};

export default Login;
