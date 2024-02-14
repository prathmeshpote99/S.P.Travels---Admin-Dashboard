import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helpers";

export const addBooking = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/addcustomer/add`, data, header);
};

export const getCustometsList = async (data, header) => {
  return await commonrequest("GET", `${BASE_URL}/addcustomer/find`, data, header);
};

export const deleteCustomer = async (id, header) => {
  return await commonrequest("DELETE", `${BASE_URL}/addcustomer/delete/${id}`, header);
};
