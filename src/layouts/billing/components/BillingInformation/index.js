// @mui material components
import { Divider, FormGroup } from "@mui/material";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMaterialUIController } from "context";
// Billing page components
import React from "react";
import { CardBody, Col, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import whiteThumb from "../../../../../src/assets/images/thumb-up-white.png";
import darkThumb from "../../../../../src/assets/images/thumb-up-dark.png";
function BillingInformation() {
  const [controller, dispatch] = useMaterialUIController();
  const [modalOpen, setModalOpen] = React.useState(false);

  const { darkMode } = controller;
  const validationSchema = Yup.object().shape({
    prnno: Yup.number().required("PRN number is require"),
    docno: Yup.number().required("Doc number is require"),
    corporate: Yup.string().required("Corporate is require"),
    agentname: Yup.string()
      .matches(/^[A-Za-z]+$/, "Agent Name must contain only alphabets")
      .required("Agent name is require"),
    bookedby: Yup.string().required("Booked By is require"),
    modifyby: Yup.string().required("Modify By is require"),
    bookname: Yup.string().required("Book name is require"),
    receiptno: Yup.number().required("Receip number is require"),
    bookingdate: Yup.date().required("Booking date is require"),
    bookingtime: Yup.string().required("Booking time is require"),
    fullname: Yup.string()
      .matches(/^[A-Za-z]+$/, "Full Name must contain only alphabets")
      .required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneno: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    alterphoneno: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Alternate Phone number is required"),
    address: Yup.string().required("Address is required"),
    pickupdate: Yup.date().required("Pickup date is required"),
    pickuptime: Yup.string().required("Pickup time is required"),
    pickuppoint: Yup.string().required("Pickup point is required"),
    pickupaddress: Yup.string().required("Pickup address is required"),
    passengerremark: Yup.string().required("Passenger remark is required"),
    area: Yup.string().required("Area is required"),
    trip: Yup.string().required("Choose a Trip"),
    flightno: Yup.string().required("Flight number is required"),
    airporttype: Yup.string().required("Choose Airport Type"),
    flightdate: Yup.date().required("Flight date is required"),
    flighteta: Yup.string().required("Flight ETA is required"),
    departdate: Yup.date().required("Depart date is required"),
    departtime: Yup.string().required("Depart time is required"),
    collection: Yup.string().required("Collection Through is required"),
    totalseats: Yup.number().required("Total Seats is required"),
    ticketamount: Yup.number().required("Ticket amount is required"),
    discountamount: Yup.number().required("Discount amount is required"),
    cgst: Yup.number().required("CGST amount is required"),
    sgst: Yup.number().required("SGST amount is required"),
    totalamount: Yup.number().required("Total amount is required"),
    olpickup: Yup.number().required("O/L pickup charges is required"),
  });

  return (
    <React.Fragment>
      <Card id="delete-account">
        <MDBox pt={3} px={2}>
          <MDTypography align="center" variant="h6" fontWeight="medium">
            New Ticket Booking
          </MDTypography>
        </MDBox>
        <Divider />
        <div className="container mb-3">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Formik
                    initialValues={{
                      prnno: "",
                      docno: "",
                      corporate: "",
                      agentname: "",
                      bookedby: "",
                      modifyby: "",
                      bookname: "",
                      receiptno: "",
                      bookingdate: "",
                      bookingtime: "",
                      fullname: "",
                      email: "",
                      phoneno: "",
                      alterphoneno: "",
                      address: "",
                      pickupdate: "",
                      pickuptime: "",
                      pickuppoint: "",
                      pickupaddress: "",
                      passengerremark: "",
                      area: "",
                      trip: "",
                      flightno: "",
                      airporttype: "",
                      flightdate: "",
                      flighteta: "",
                      departdate: "",
                      departtime: "",
                      collection: "",
                      totalseats: "",
                      ticketamount: "",
                      discountamount: "",
                      cgst: "",
                      sgst: "",
                      totalamount: "",
                      olpickup: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                      setModalOpen(true);
                      resetForm();
                    }}
                  >
                    <Form>
                      <div className="container">
                        <Row className="mb-5">
                          <Col md={6} sm={6} xs={12}>
                            <Field name="prnno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    PRN No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter PRN Number"
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="prnno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={6} sm={6} xs={12}>
                            <Field name="docno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Doc No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Doc Number"
                                  />
                                  <ErrorMessage
                                    name="docno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={6} sm={6} xs={12}>
                            <Field name="corporate">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Corporate
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    // className="form-control"
                                    placeholder="Enter Corporate"
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="corporate"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={6} sm={6} xs={12}>
                            <Field name="agentname">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Agent Name
                                    <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    // className="form-control"
                                    {...field}
                                    placeholder="Enter Agent Name"
                                  />
                                  <ErrorMessage
                                    name="agentname"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="bookedby">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Booked By <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    placeholder="Booked By"
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="bookedby"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="modifyby">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Modify By <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Modify By"
                                  />
                                  <ErrorMessage
                                    name="modifyby"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="bookname">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Book Name <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Book Name"
                                  />
                                  <ErrorMessage
                                    name="bookname"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="receiptno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Receipt No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter Receipt No"
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="receiptno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="bookingdate">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Booking Date <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="date"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="bookingdate"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="bookingtime">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Booking Time <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="time"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="bookingtime"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="fullname">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Full Name <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter Full Name"
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="fullname"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="email">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Email <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="email"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Email"
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="phoneno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Phone No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Phone Number"
                                  />
                                  <ErrorMessage
                                    name="phoneno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="alterphoneno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Alternate Phone No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Alternate Phone Number"
                                  />
                                  <ErrorMessage
                                    name="alterphoneno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={8} sm={8} xs={12}>
                            <Field name="address">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Address <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Address"
                                  />
                                  <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="pickupdate">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    PickUp Date <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="date"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="pickupdate"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="pickuptime">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    PickUp Time <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="time"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="pickuptime"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="pickuppoint">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    PickUp Point <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Pickup Point"
                                  />
                                  <ErrorMessage
                                    name="pickuppoint"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="pickupaddress">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    PickUp Address <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Pickup Address"
                                  />
                                  <ErrorMessage
                                    name="pickupaddress"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="passengerremark">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Passenger Remark <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Passenger Remark"
                                  />
                                  <ErrorMessage
                                    name="passengerremark"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="area">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Area <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Area"
                                  />
                                  <ErrorMessage
                                    name="area"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="trip">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Trip <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  >
                                    <option value="" label="Select A Trip" />
                                    <option value="nashiktomumbai" label="Nashik To Mumbai" />
                                    <option value="mumbaitonashik" label="Mumbai To Nashik" />
                                  </select>
                                  <ErrorMessage
                                    name="trip"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="airporttype">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Airport Type <span className="text-danger">*</span>
                                  </Label>
                                  <select
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  >
                                    <option value="" label="Select Airport Type" />
                                    <option value="international" label="International" />
                                    <option value="domestic" label="Domestic" />
                                  </select>
                                  <ErrorMessage
                                    name="airporttype"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="flightno">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Flight No <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="text"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Flight Number"
                                  />
                                  <ErrorMessage
                                    name="flightno"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="flightdate">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Flight Date <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="date"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="flightdate"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="flighteta">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Flight ETA <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="time"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="flighteta"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="departdate">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Depart Date <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="date"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="departdate"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="departtime">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Depart Time <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="time"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                  />
                                  <ErrorMessage
                                    name="departtime"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={8} sm={8} xs={12}>
                            <FormGroup>
                              <Label className={darkMode ? "white-text" : "black-text"}>
                                Collection Through <span className="text-danger">*</span>
                              </Label>
                              <Field name="collection">
                                {({ field, meta }) => (
                                  <>
                                    <Label className={darkMode ? "white-text" : "black-text"}>
                                      <Input
                                        className={`${
                                          meta.touched && meta.error ? "is-invalid" : ""
                                        }`}
                                        {...field}
                                        type="radio"
                                        value="Offline"
                                      />{" "}
                                      Offline
                                    </Label>
                                    <Label className={darkMode ? "white-text" : "black-text"}>
                                      <Input
                                        className={`${
                                          meta.touched && meta.error ? "is-invalid" : ""
                                        }`}
                                        {...field}
                                        type="radio"
                                        value="Online"
                                      />{" "}
                                      Online
                                    </Label>
                                  </>
                                )}
                              </Field>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="totalseats">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Total Seats <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Total Seats"
                                  />
                                  <ErrorMessage
                                    name="totalseats"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="ticketamount">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Ticket Amount <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Ticket Amount"
                                  />
                                  <ErrorMessage
                                    name="ticketamount"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="discountamount">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Discount Amount <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Discount Amount"
                                  />
                                  <ErrorMessage
                                    name="discountamount"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="cgst">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    CGST Amt <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter CGST Amount"
                                  />
                                  <ErrorMessage
                                    name="cgst"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="sgst">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    SGST Amount <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter SGST Amount"
                                  />
                                  <ErrorMessage
                                    name="sgst"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Field name="totalamount">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    Total Amount <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter Total Amount"
                                  />
                                  <ErrorMessage
                                    name="totalamount"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Field name="olpickup">
                              {({ field, meta }) => (
                                <>
                                  <Label className={darkMode ? "white-text" : "black-text"}>
                                    O/L PickUp Charges <span className="text-danger">*</span>
                                  </Label>
                                  <Input
                                    type="number"
                                    className={`form-control ${
                                      meta.touched && meta.error ? "is-invalid" : ""
                                    }`}
                                    {...field}
                                    placeholder="Enter O/L PickUp Charges"
                                  />
                                  <ErrorMessage
                                    name="olpickup"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </>
                              )}
                            </Field>
                          </Col>
                        </Row>
                      </div>
                      <Divider />
                      <div className="text-center mt-4 mb-4">
                        <button
                          type="submit"
                          className={`btn ${darkMode ? "btn-success" : "btn-dark"}`}
                        >
                          Add
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        <Modal centered isOpen={modalOpen} toggle={() => setModalOpen(false)}>
          <ModalHeader toggle={() => setModalOpen(false)}>
            Hurray..! Ticket Booked Successfully
          </ModalHeader>
          <ModalBody>
            <div className="background-img-paper">
              <div className="thumb-image-div">
                <img
                  className="thumb-img animate-fade-in animate-jump animate-once animate-ease-in"
                  src={darkMode ? whiteThumb : darkThumb}
                />
              </div>
              <div className="thumb-image-div mt-4 mb-1">
                <button
                  className={`btn ${darkMode ? "btn-success" : "btn-dark"}`}
                  onClick={() => setModalOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Card>
    </React.Fragment>
  );
}

export default BillingInformation;
