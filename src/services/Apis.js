import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helpers";

export const addBooking = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/addcustomer/add`, data, header);
};

export const getCustometsList = async (data, header) => {
  return await commonrequest("GET", `${BASE_URL}/addcustomer/find`, data, header);
};

export const getCustomerById = async (id) => {
  return await commonrequest("GET", `${BASE_URL}/addcustomer/user/${id}`);
};

export const updateCustomer = async (id, data, header) => {
  return await commonrequest("PUT", `${BASE_URL}/addcustomer/update/${id}`, data, header);
};

export const deleteCustomer = async (id, header) => {
  return await commonrequest("DELETE", `${BASE_URL}/addcustomer/delete/${id}`, header);
};

//Signup & Login

export const signUp = async (data) => {
  return await commonrequest("POST", `${BASE_URL}/auth/signup`, data);
};

export const logIn = async (data) => {
  return await commonrequest("POST", `${BASE_URL}/auth/login`, data);
};
