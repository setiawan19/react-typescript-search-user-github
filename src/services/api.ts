import axios, { AxiosError } from "axios";

const ApiBaseUrl = "https://api.github.com";

//global get async
export const getAsync = async <ResponseType>(
  endpoint: string,
): Promise<ResponseType> => {
  try {
    const response = await axios.get(`${ApiBaseUrl}/${endpoint}`);
    return response.data.items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.request) {
        throw new Error("No response received from the server.");
      } else {
        throw new Error("An unknown error occurred.");
      }
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};

export const getWithUrlParamAsync = async <ResponseType>(
  url: string,
): Promise<ResponseType> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.request) {
        throw new Error("No response received from the server.");
      } else {
        throw new Error("An unknown error occurred.");
      }
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
