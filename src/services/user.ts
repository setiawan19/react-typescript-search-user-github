import { GET_USER_BY_TITLE } from "../constants/api-url";
import { getAsync } from "./api";

export const getUserAsync = async (userName: string): Promise<UserResponse[]> =>
  await getAsync<UserResponse[]>(`${GET_USER_BY_TITLE}${userName}`);
