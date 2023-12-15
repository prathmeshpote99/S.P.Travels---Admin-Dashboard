/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import axios from "axios";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Icon } from "@mui/material";
import { useEffect, useState } from "react";
import { getCustometsList, deleteCustomer } from "../../../services/Apis";

export default function data() {
  const [data, setData] = useState();

  const deleteCustomers = async (id) => {
    try {
      await deleteCustomer(id);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCustometsList();
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Author = ({ image, prnno, name, email, phoneno }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography display="block" variant="button" fontWeight="bold">
          {prnno}
        </MDTypography>
        <MDTypography className="mb-1" display="block" variant="caption">
          {email}
        </MDTypography>
        <MDTypography variant="caption">+91-{phoneno}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "customer", accessor: "customer", width: "30%", align: "left" },
      { Header: "receipt no", accessor: "receipt", width: "5%", align: "left" },
      { Header: "total amount", accessor: "total", width: "5%", align: "center" },
      { Header: "collection", accessor: "collection", width: "5%", align: "center" },
      { Header: "edit", accessor: "edit", width: "5%", align: "center" },
      { Header: "view", accessor: "view", width: "5%", align: "center" },
      { Header: "delete", accessor: "delete", width: "5%", align: "center" },
      { Header: "created at", accessor: "created", width: "5%", align: "center" },
    ],

    rows:
      data?.map((row, index) => {
        const formattedDate = new Date(row.createdAt).toLocaleDateString();

        return {
          customer: (
            <Author name={row.fullName} prnno={row.prnNo} email={row.email} phoneno={row.phoneNo} />
          ),
          receipt: <Job title={row.receiptNo} description={row.jobDescription} />,
          total: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {row.totalAmount}
            </MDTypography>
          ),
          collection: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={row.collectionThrough}
                color={row.collectionThrough === "Online" ? "success" : "info"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          ),
          edit: (
            <MDTypography
              style={{ cursor: "pointer" }}
              fontSize="large"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              <Icon>edit</Icon>
            </MDTypography>
          ),
          view: (
            <MDTypography
              style={{ cursor: "pointer" }}
              fontSize="large"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              <Icon>visibility</Icon>
            </MDTypography>
          ),
          delete: (
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
          ),
          created: (
            <MDTypography variant="caption" color="text" fontWeight="medium">
              {formattedDate}
            </MDTypography>
          ),
          key: index,
        };
      }) || [],
  };
}
