// @mui material components
import { Divider, FormGroup } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Formik, Form } from "formik";
import { useMaterialUIController } from "context";
// Billing page components
import React, { useState } from "react";
import { CardBody, Col, Input, Label, Row } from "reactstrap";
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

  const onSubmit = (values, { resetForm }) => {
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
      setModalOpen(true);
      setPrnNo("");
      setDocNo("");
      setCorporate("");
      setAgentName("");
      setBookedBy("");
      setModifiedBy("");
      setBookName("");
      setReceiptNo("");
      setBookingDate("");
      setBookingTime("");
      setFullName("");
      setEmail("");
      setPhoneNo("");
      setAlternatePhoneNo("");
      setAddress("");
      setPickupDate("");
      setPickupTime("");
      setPickupPoint("");
      setPickupAddress("");
      setPassengerRemark("");
      setArea("");
      setTrip("");
      setAirportType("");
      setFlightNo("");
      setFlightDate("");
      setFlightETA("");
      setDepartDate("");
      setDepartTime("");
      setTotalSeats("");
      setTicketAmount("");
      setDiscountAmount("");
      setCgstAmt("");
      setSgstAmt("");
      setTotalAmount("");
      setPickupCharges("");
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
                      prnNo: "",
                      docNo: "",
                      corporate: "",
                      agentName: "",
                      bookedBy: "",
                      modifiedBy: "",
                      bookName: "",
                      receiptNo: "",
                      bookingDate: "",
                      bookingTime: "",
                      fullName: "",
                      email: "",
                      phoneNo: "",
                      alternatePhoneNo: "",
                      address: "",
                      pickupDate: "",
                      pickupTime: "",
                      pickupPoint: "",
                      pickupAddress: "",
                      passengerRemark: "",
                      area: "",
                      trip: "",
                      airportType: "",
                      flightNo: "",
                      flightDate: "",
                      flightETA: "",
                      departDate: "",
                      departTime: "",
                      totalSeats: "",
                      ticketAmount: "",
                      discountAmount: "",
                      cgstAmt: "",
                      sgstAmt: "",
                      totalAmount: "",
                      pickupCharges: "",
                    }}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="container">
                        <Row className="mb-5">
                          <Col md={6} sm={6} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              PRN No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter PRN Number"
                              value={prnNo}
                              onChange={(e) => setPrnNo(e.target.value)}
                            />
                          </Col>
                          <Col md={6} sm={6} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Doc No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Doc Number"
                              value={docNo}
                              onChange={(e) => setDocNo(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={6} sm={6} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Corporate
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Corporate"
                              value={corporate}
                              onChange={(e) => setCorporate(e.target.value)}
                            />
                          </Col>
                          <Col md={6} sm={6} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Agent Name
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Agent Name"
                              value={agentName}
                              onChange={(e) => setAgentName(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Booked By <span className="text-danger">*</span>
                            </Label>
                            <Input
                              placeholder="Booked By"
                              className="form-control"
                              value={bookedBy}
                              onChange={(e) => setBookedBy(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Modify By <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Modify By"
                              value={modifiedBy}
                              onChange={(e) => setModifiedBy(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Book Name <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Book Name"
                              value={bookName}
                              onChange={(e) => setBookName(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Receipt No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              placeholder="Enter Receipt No"
                              className="form-control"
                              value={receiptNo}
                              onChange={(e) => setReceiptNo(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Booking Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              value={bookingDate}
                              onChange={(e) => setBookingDate(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Booking Time <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="time"
                              className="form-control"
                              value={bookingTime}
                              onChange={(e) => setBookingTime(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Full Name <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Full Name"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Email <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Phone No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              value={phoneNo}
                              onChange={(e) => setPhoneNo(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Alternate Phone No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Alternate Phone Number"
                              value={alternatePhoneNo}
                              onChange={(e) => setAlternatePhoneNo(e.target.value)}
                            />
                          </Col>
                          <Col md={8} sm={8} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Address <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              PickUp Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              value={pickupDate}
                              onChange={(e) => setPickupDate(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              PickUp Time <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="time"
                              className="form-control"
                              value={pickupTime}
                              onChange={(e) => setPickupTime(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              PickUp Point <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Pickup Point"
                              value={pickupPoint}
                              onChange={(e) => setPickupPoint(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              PickUp Address <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Pickup Address"
                              value={pickupAddress}
                              onChange={(e) => setPickupAddress(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Passenger Remark <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Passenger Remark"
                              value={passengerRemark}
                              onChange={(e) => setPassengerRemark(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Area <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Area"
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Trip <span className="text-danger">*</span>
                            </Label>
                            <select
                              value={trip}
                              onChange={(e) => setTrip(e.target.value)}
                              className="form-control"
                            >
                              <option label="Select A Trip" />
                              <option value="Nashik To Mumbai" label="Nashik To Mumbai" />
                              <option value="Mumbai To Nashik" label="Mumbai To Nashik" />
                            </select>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Airport Type <span className="text-danger">*</span>
                            </Label>
                            <select
                              className="form-control"
                              value={airportType}
                              onChange={(e) => setAirportType(e.target.value)}
                            >
                              <option value="" label="Select Airport Type" />
                              <option value="International" label="International" />
                              <option value="Domestic" label="Domestic" />
                            </select>
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Flight No <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter Flight Number"
                              value={flightNo}
                              onChange={(e) => setFlightNo(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Flight Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              value={flightDate}
                              onChange={(e) => setFlightDate(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Flight ETA <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="time"
                              className="form-control"
                              value={flightETA}
                              onChange={(e) => setFlightETA(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Depart Date <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="date"
                              className="form-control"
                              value={departDate}
                              onChange={(e) => setDepartDate(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Depart Time <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="time"
                              className="form-control"
                              value={departTime}
                              onChange={(e) => setDepartTime(e.target.value)}
                            />
                          </Col>
                          <Col md={8} sm={8} xs={12}>
                            <FormGroup>
                              <Label className={darkMode ? "white-text" : "black-text"}>
                                Collection Through <span className="text-danger">*</span>
                              </Label>
                              <Label className={darkMode ? "white-text" : "black-text"}>
                                <Input type="radio" value="Offline" /> Offline
                              </Label>
                              <Label className={darkMode ? "white-text" : "black-text"}>
                                <Input type="radio" value="Online" /> Online
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Divider />
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Total Seats <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Total Seats"
                              value={totalSeats}
                              onChange={(e) => setTotalSeats(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Ticket Amount <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Ticket Amount"
                              value={ticketAmount}
                              onChange={(e) => setTicketAmount(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Discount Amount <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Discount Amount"
                              value={discountAmount}
                              onChange={(e) => setDiscountAmount(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              CGST Amt <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter CGST Amount"
                              value={cgstAmt}
                              onChange={(e) => setCgstAmt(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              SGST Amount <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter SGST Amount"
                              value={sgstAmt}
                              onChange={(e) => setSgstAmt(e.target.value)}
                            />
                          </Col>
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              Total Amount <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter Total Amount"
                              value={totalAmount}
                              onChange={(e) => setTotalAmount(e.target.value)}
                            />
                          </Col>
                        </Row>
                        <Row className="mb-5">
                          <Col md={4} sm={4} xs={12}>
                            <Label className={darkMode ? "white-text" : "black-text"}>
                              O/L PickUp Charges <span className="text-danger">*</span>
                            </Label>
                            <Input
                              type="number"
                              className="form-control"
                              placeholder="Enter O/L PickUp Charges"
                              value={pickupCharges}
                              onChange={(e) => setPickupCharges(e.target.value)}
                            />
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
