// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { Divider, Icon } from "@mui/material";
import { Table } from "react-bootstrap";
import MDAvatar from "components/MDAvatar";
import { Modal, Button } from "react-bootstrap";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useMaterialUIController } from "context";
import { Col, Row, Spinner } from "reactstrap";
import { useEffect, useState } from "react";
import { getCustometsList } from "services/Apis";
import { deleteCustomer } from "services/Apis";
import { useNavigate } from "react-router-dom";
// import Loader from "components/Loader/TypeeriterLoader";
import Loader from "../../assets/images/icons/waiting-room-unscreen.gif";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [controller, dispatch] = useMaterialUIController();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { darkMode } = controller;
  const [showModal, setShowModal] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);

  const navigate = useNavigate();

  const handleViewUser = (userData) => {
    setSelectedUserData(userData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const deleteCustomers = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (confirmed) {
      try {
        await deleteCustomer(id);
        const updatedData = await getCustometsList();
        setData(updatedData.data);
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Failed to delete customer. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCustometsList();
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor={darkMode ? "success" : "dark"}
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Customers List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {loading ? (
                  <div className="mb-4 d-flex justify-content-center align-items-center">
                    {/* <Spinner
                      className="mt-2 mb-1"
                      color={darkMode ? "success" : "dark"}
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    /> */}
                    {/* <Loader /> */}
                    <div className="gif_div">
                      <img className="gif" src={Loader} alt="" />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* <DataTable
                      table={{ columns, rows }}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    /> */}
                    <MDBox>
                      <Table className="p-5" variant={darkMode ? "dark" : ""} responsive>
                        <thead>
                          <tr>
                            <th>
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                CUSTOMER
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                RECEIPT NO
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                TOTAL AMOUNT
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                COLLECTION
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                EDIT
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                VIEW
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                DELETE
                              </MDTypography>
                            </th>
                            <th className="text-center">
                              <MDTypography variant="button" color="text" fontWeight="medium">
                                CREATED AT
                              </MDTypography>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((row, index) => {
                            const formattedDate = new Date(row.createdAt).toLocaleDateString();

                            return (
                              <tr key={index}>
                                <td>
                                  <MDBox display="flex" alignItems="center" lineHeight={1}>
                                    <MDAvatar size="sm" />
                                    <MDBox ml={2} lineHeight={1}>
                                      <tr>
                                        <MDTypography
                                          display="block"
                                          variant="button"
                                          fontWeight="medium"
                                        >
                                          {row.fullName}
                                        </MDTypography>
                                      </tr>
                                      <tr>
                                        <MDTypography
                                          variant="caption"
                                          color="text"
                                          fontWeight="medium"
                                        >
                                          {row.prnNo}
                                        </MDTypography>
                                      </tr>
                                      <tr>
                                        <MDTypography
                                          variant="caption"
                                          color="text"
                                          fontWeight="medium"
                                        >
                                          {row.email}
                                        </MDTypography>
                                      </tr>
                                      <tr>
                                        <MDTypography
                                          variant="caption"
                                          color="text"
                                          fontWeight="medium"
                                        >
                                          +91-{row.phoneNo}
                                        </MDTypography>
                                      </tr>
                                    </MDBox>
                                  </MDBox>
                                </td>
                                <td className="text-center">
                                  <MDTypography variant="caption" color="text" fontWeight="medium">
                                    {row.receiptNo}
                                  </MDTypography>
                                </td>
                                <td className="text-center">
                                  <MDTypography variant="caption" color="text" fontWeight="medium">
                                    {row.totalAmount}
                                  </MDTypography>
                                </td>
                                <td className="text-center">
                                  <MDBox ml={-1}>
                                    <MDBadge
                                      badgeContent={row.collectionThrough}
                                      color={
                                        row.collectionThrough === "Online" ? "success" : "info"
                                      }
                                      variant="gradient"
                                      size="sm"
                                    />
                                  </MDBox>
                                </td>
                                <td className="text-center">
                                  <MDTypography
                                    style={{ cursor: "pointer" }}
                                    fontSize="large"
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    onClick={() => navigate(`/customer-profile/edit/${row._id}`)}
                                  >
                                    <Icon>edit</Icon>
                                  </MDTypography>
                                </td>
                                <td className="text-center">
                                  <MDTypography
                                    style={{ cursor: "pointer" }}
                                    fontSize="large"
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    onClick={() => handleViewUser(row)}
                                  >
                                    <Icon>visibility</Icon>
                                  </MDTypography>
                                </td>
                                <td className="text-center">
                                  <MDTypography
                                    style={{ cursor: "pointer" }}
                                    fontSize="large"
                                    variant="caption"
                                    color="text"
                                    fontWeight="medium"
                                    onClick={() => deleteCustomers(row._id)}
                                  >
                                    <Icon color="error">delete</Icon>
                                  </MDTypography>
                                </td>
                                <td className="text-center">
                                  <MDTypography variant="caption" color="text" fontWeight="medium">
                                    {formattedDate}
                                  </MDTypography>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </MDBox>
                  </>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Modal
        className="userDetail_modal"
        size="lg"
        centered
        scrollable
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          {selectedUserData && <Modal.Title>{selectedUserData.fullName}</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          {selectedUserData && (
            <>
              <MDBox className="modal_box p-3">
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>PRN No: {selectedUserData.prnNo}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>DOC No: {selectedUserData.docNo}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Corporate: {selectedUserData.corporate}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Agent Name: {selectedUserData.agentName}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Booked By: {selectedUserData.bookedBy}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Modified By: {selectedUserData.modifiedBy}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Book Name: {selectedUserData.bookName}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Receipt No: {selectedUserData.receiptNo}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>
                      Booking Date: {new Date(selectedUserData.bookingDate).toLocaleDateString()}
                    </h6>
                  </Col>
                  <Col md={6}>
                    <h6>Booking Time: {selectedUserData.bookingTime}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Email: {selectedUserData.email}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Phone No: +91-{selectedUserData.phoneNo}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Alternate No: +91-{selectedUserData.alternatePhoneNo}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Address: {selectedUserData.address}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Pickup Date: {new Date(selectedUserData.pickupDate).toDateString()}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Pickup Time: {selectedUserData.pickupTime}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Pickup Point: {selectedUserData.pickupPoint}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Pickup Address: {selectedUserData.pickupAddress}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Passenger Remark: {selectedUserData.passengerRemark}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Area: {selectedUserData.area}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Trip: {selectedUserData.trip}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Airport Type: {selectedUserData.airportType}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Flight No: {selectedUserData.flightNo}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Flight Date: {new Date(selectedUserData.flightDate).toDateString()}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Flight ETA: {selectedUserData.flightETA}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Depart Date: {new Date(selectedUserData.departDate).toDateString()}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Depart Time: {selectedUserData.departTime}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Collection Through: {selectedUserData.collectionThrough}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Total Seats: {selectedUserData.totalSeats}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Ticket Amount: {selectedUserData.ticketAmount}</h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <h6>Discount Amount: {selectedUserData.discountAmount}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>CGST Amount: {selectedUserData.cgstAmt}</h6>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h6>SGST Amount: {selectedUserData.sgstAmt}</h6>
                  </Col>
                  <Col md={6}>
                    <h6>Pickup Charges: {selectedUserData.pickupCharges}</h6>
                  </Col>
                </Row>
              </MDBox>
              <hr />
              <MDBox className="modal_box p-3">
                <Row>
                  <Col md={12} className="text-center">
                    <h6>
                      <b>Total Amount: {selectedUserData.totalAmount}</b>
                    </h6>
                  </Col>
                </Row>
              </MDBox>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant={darkMode ? "success" : "dark"} onClick={handleCloseModal}>
            OK
          </Button>
          <Button variant={darkMode ? "success" : "dark"} onClick={handlePrint}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
