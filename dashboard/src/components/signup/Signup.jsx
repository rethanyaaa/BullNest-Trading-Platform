import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, styled, TextField, Typography } from "@mui/material";
import { API } from "../service/api";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 50px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff, #f3f4f6);
`;

const Image = styled("img")({
  width: 200,
  margin: "0 auto",
  display: "block",
});

const Wrapper = styled(Box)`
  padding: 0 40px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
    width: 100%;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(90deg, rgb(91, 19, 225), rgb(192, 21, 89));
  color: #fff;
  height: 48px;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, rgb(192, 21, 89), rgb(91, 19, 225));
    transform: scale(1.03);
  }
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: linear-gradient(90deg, rgb(54, 193, 232), rgb(20, 8, 184));
  color: #fff;
  height: 48px;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, rgb(20, 8, 184), rgb(54, 193, 232));
    transform: scale(1.03);
  }
`;

const TextFieldStyled = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 14px;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  & .MuiInputLabel-root {
    color: #757575;
    font-weight: 500;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #1565c0;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #1565c0;
  }
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Text = styled(Typography)`
  text-align: center;
  color: #878787;
  font-size: 16px;
  font-weight: 500;
`;

const Signup = ({ setIsAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null); // Clear error on component mount or account change
  }, [account]);

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);
      toggleAccount("login");
    } else {
      setError("Something went wrong! Please try again later!");
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");

      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );

      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );

      setAccount({
        username: response.data.username,
        name: response.data.name,
      });

      setIsAuthenticated(true);

      navigate("/");
    } else {
      setError("Something went wrong! Please try again later!");
    }
  };

  return (
    <Component>
      <Box>
        <Image src="RedBull.png" alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextFieldStyled
              variant="outlined"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextFieldStyled
              variant="outlined"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />

            {error && <Text style={{ color: "red", fontSize: "12px" }}>{error}</Text>}
            <LoginButton onClick={() => loginUser()} variant="contained">
              Login
            </LoginButton>
            <Text>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextFieldStyled
              variant="outlined"
              name="name"
              onChange={(e) => onInputChange(e)}
              label="Enter Name"
            />
            <TextFieldStyled
              variant="outlined"
              name="username"
              onChange={(e) => onInputChange(e)}
              label="Enter Username"
            />
            <TextFieldStyled
              variant="outlined"
              name="password"
              onChange={(e) => onInputChange(e)}
              label="Enter Password"
            />

            {error && <Text style={{ color: "red", fontSize: "12px" }}>{error}</Text>}
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text>OR</Text>
            <LoginButton onClick={() => toggleSignup()} variant="contained">
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Signup;
