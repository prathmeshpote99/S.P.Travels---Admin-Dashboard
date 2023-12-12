// @mui material components
import { Divider, FormGroup } from "@mui/material";
import Card from "@mui/material/Card";

import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMaterialUIController } from "context";
// Billing page components
import React, { useState } from "react";
import { CardBody, Col, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import whiteThumb from "../../../../../src/assets/images/thumb-up-white.png";
import darkThumb from "../../../../../src/assets/images/thumb-up-dark.png";
function BillingInformation() {
  const [controller, dispatch] = useMaterialUIController();
  const [modalOpen, setModalOpen] = React.useState(false);

  const [prnNo, setPrnNo] = useState("");
  const [docNo, setDocNo] = useState("");
  const [corporate, setCorporate] = useState("");
  const [agentName, setAgentName] = useState("");
  const [bookedBy, setBookedBy] = useState("");
  const [modifiedBy, setModifiedBy] = useState("");
  const [bookName, setBookName] = useState("");
  const [receiptNo, setReceiptNo] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [alternatePhoneNo, setAlternatePhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [passengerRemark, setPassengerRemark] = useState("");
  const [area, setArea] = useState("");
  const [trip, setTrip] = useState("");
  const [airportType, setAirportType] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [flightETA, setFlightETA] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [departTime, setDepartTime] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [ticketAmount, setTicketAmount] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [cgstAmt, setCgstAmt] = useState("");
  const [sgstAmt, setSgstAmt] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [pickupCharges, setPickupCharges] = useState("");

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
    receiptno: Yup.string().required("Receip number is require"),
    bookingdate: Yup.date().required("Booking date is require"),
    bookingtime: Yup.string().required("Booking time is require"),
    fullname: Yup.string()
      .matches(/^[A-Za-z]+$/, "Full Name must contain only alphabets")
      .required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneno: Yup.number()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    alterphoneno: Yup.number()
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
    airporttype: Yup.string().required("Choose Airport Type"),
    flightno: Yup.string().required("Flight number is required"),
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

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = {
      prnNo: prnNo,
      docNo: docNo,
      corporate: corporate,
      agentName: agentName,
      bookedBy: bookedBy,
      modifiedBy: modifiedBy,
      bookName: bookName,
      receiptNo: receiptNo,
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      fullName: fullName,
      email: email,
      phoneNo: phoneNo,
      alternatePhoneNo: alternatePhoneNo,
      address: address,
      pickupDate: pickupDate,
      pickupTime: pickupTime,
      pickupPoint: pickupPoint,
      pickupAddress: pickupAddress,
      passengerRemark: passengerRemark,
      area: area,
      trip: trip,
      airportType: airportType,
      flightNo: flightNo,
      flightDate: flightDate,
      flightETA: flightETA,
      departDate: departDate,
      departTime: departTime,
      totalSeats: totalSeats,
      ticketAmount: ticketAmount,
      discountAmount: discountAmount,
      cgstAmt: cgstAmt,
      sgstAmt: sgstAmt,
      totalAmount: totalAmount,
      pickupCharges: pickupCharges,
    };
    axios.post("http://localhost:8000/addcustomer/add", newData).then((res) => {
      console.log(res.data);
    });
  };

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
                                    value={prnNo}
                                    onChange={(e) => setPrnNo(e.target.value)}
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
                                    value={docNo}
                                    onChange={(e) => setDocNo(e.target.value)}
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
                                    value={corporate}
                                    onChange={(e) => setCorporate(e.target.value)}
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
                                    value={agentName}
                                    onChange={(e) => setAgentName(e.target.value)}
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
                                    value={bookedBy}
                                    onChange={(e) => setBookedBy(e.target.value)}
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
                                    value={modifiedBy}
                                    onChange={(e) => setModifiedBy(e.target.value)}
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
                                    value={bookName}
                                    onChange={(e) => setBookName(e.target.value)}
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
                                    value={receiptNo}
                                    onChange={(e) => setReceiptNo(e.target.value)}
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
                                    value={bookingDate}
                                    onChange={(e) => setBookingDate(e.target.value)}
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
                                    value={bookingTime}
                                    onChange={(e) => setBookingTime(e.target.value)}
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
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
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
                                    value={alternatePhoneNo}
                                    onChange={(e) => setAlternatePhoneNo(e.target.value)}
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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
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
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
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
                                    value={pickupPoint}
                                    onChange={(e) => setPickupPoint(e.target.value)}
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
                                    value={pickupAddress}
                                    onChange={(e) => setPickupAddress(e.target.value)}
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
                                    value={passengerRemark}
                                    onChange={(e) => setPassengerRemark(e.target.value)}
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
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
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
                                    // value={trip}
                                    onChange={(e) => setTrip(e.target.value)}
                                  >
                                    <option value="" label="Select A Trip" />
                                    <option value={trip} label="Nashik To Mumbai" />
                                    <option value={trip} label="Mumbai To Nashik" />
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
                                    // value={airportType}
                                    onChange={(e) => setAirportType(e.target.value)}
                                  >
                                    <option value="" label="Select Airport Type" />
                                    <option value={airportType} label="International" />
                                    <option value={airportType} label="Domestic" />
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
                                    value={flightNo}
                                    onChange={(e) => setFlightNo(e.target.value)}
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
                                    value={flightDate}
                                    onChange={(e) => setFlightDate(e.target.value)}
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
                                    value={flightETA}
                                    onChange={(e) => setFlightETA(e.target.value)}
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
                                    value={departDate}
                                    onChange={(e) => setDepartDate(e.target.value)}
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
                                    value={departTime}
                                    onChange={(e) => setDepartTime(e.target.value)}
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
                                    value={totalSeats}
                                    onChange={(e) => setTotalSeats(e.target.value)}
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
                                    value={ticketAmount}
                                    onChange={(e) => setTicketAmount(e.target.value)}
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
                                    value={discountAmount}
                                    onChange={(e) => setDiscountAmount(e.target.value)}
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
                                    value={cgstAmt}
                                    onChange={(e) => setCgstAmt(e.target.value)}
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
                                    value={sgstAmt}
                                    onChange={(e) => setSgstAmt(e.target.value)}
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
                                    value={totalAmount}
                                    onChange={(e) => setTotalAmount(e.target.value)}
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
                                    value={pickupCharges}
                                    onChange={(e) => setPickupCharges(e.target.value)}
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
