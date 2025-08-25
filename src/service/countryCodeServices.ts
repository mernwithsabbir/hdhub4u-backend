import { ICountryCode } from "../model/countryCodeModel";

// ! Role : Admin Manage Functionality
export const addCountryCodeService = async (data: Partial<ICountryCode>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Create Country Code!");
  }
};
export const updateCountryCodeService = async (id: unknown) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update Country Code!");
  }
};
export const deleteCountryCodeService = async (id: unknown) => {
  try {
    return id;
  } catch (error) {
    void error;
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete Country Code!");
  }
};
export const getSingleCountryCodeService = async (id: unknown) => {
  try {
    return id;
  } catch (error) {
    void error;
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Single Country Code!");
  }
};

// ? Role : User Manage Functionality
export const getCountryCodeListService = async () => {
  try {
    return true;
  } catch (error) {
    void error;
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Country Code!");
  }
};
