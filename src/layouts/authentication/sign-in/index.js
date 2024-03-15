import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/signin_bg.mp4";

import { useMaterialUIController } from "context";
import { logIn } from "services/Apis";
import { Alert } from "reactstrap";

function Basic() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [alert, setAlert] = useState({ visible: false, message: "", color: "" });
  const navigate = useNavigate();

  const onSubmit = async () => {
    let newData = {
      email: email,
      password: password,
    };

    const response = await logIn(newData);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user._id);
      navigate("/dashboard");
      setEmail("");
      setPassword("");
      setAlert({ visible: true, message: "Login successful! 😄", color: "success" });
    } else {
      setAlert({
        visible: true,
        message: "Please check your login details and try again 🙁",
        color: "danger",
      });
    }

    setTimeout(() => {
      setAlert({ visible: false, message: "", color: "" });
    }, 2000);
  };

  return (
    <>
      <div className="alertbox d-flex justify-content-end align-items-center fs-6">
        {alert.visible && <Alert color={alert.color}>{alert.message}</Alert>}
      </div>
      <BasicLayout videoSrc={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor={darkMode ? "info" : "dark"}
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Sign in
            </MDTypography>
            {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid> */}
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                  fullWidth
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                  fullWidth
                />
              </MDBox>
              {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color={darkMode ? "info" : "dark"}
                  fullWidth
                  onClick={onSubmit}
                >
                  Login
                </MDButton>
              </MDBox>
              {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox> */}
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>
    </>
  );
}

export default Basic;
