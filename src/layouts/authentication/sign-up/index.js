// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/signup_bg.mp4";

import { useMaterialUIController } from "context";
import { useState } from "react";
import { signUp } from "services/Apis";
import { Alert } from "reactstrap";

function Cover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [corporate, setCorporate] = useState("");
  const [controller, dispatch] = useMaterialUIController();
  const [alert, setAlert] = useState({ visible: false, message: "", color: "" });
  const { darkMode } = controller;

  const onSubmit = async () => {
    let newData = {
      name: name,
      email: email,
      password: password,
      corporate: corporate,
    };

    const response = await signUp(newData);
    console.log(response);
    if (response.status === 200) {
      setAlert({ visible: true, message: "Sign Up Successfully! 😃", color: "success" });
    } else {
      setAlert({
        visible: true,
        message: "Check your details and try again. 🙁",
        color: "danger",
      });
    }

    setTimeout(() => {
      setAlert({ visible: false, message: "", color: "" });
    }, 2000);

    setName("");
    setEmail("");
    setPassword("");
    setCorporate("");
  };

  return (
    <>
      <div className="alertbox_signup d-flex justify-content-end align-items-center fs-6">
        {alert.visible && <Alert color={alert.color}>{alert.message}</Alert>}
      </div>
      <CoverLayout videoSrc={bgImage}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor={darkMode ? "info" : "dark"}
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-3}
            p={0}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Join us today
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter your email and password to register
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                  fullWidth
                />
              </MDBox>
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
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Corporate"
                  value={corporate}
                  onChange={(e) => setCorporate(e.target.value)}
                  variant="standard"
                  fullWidth
                />
              </MDBox>
              {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
              <MDBox mt={4} mb={1}>
                <MDButton
                  variant="gradient"
                  color={darkMode ? "info" : "dark"}
                  onClick={onSubmit}
                  fullWidth
                >
                  sign up
                </MDButton>
              </MDBox>
              {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox> */}
            </MDBox>
          </MDBox>
        </Card>
      </CoverLayout>
    </>
  );
}

export default Cover;
