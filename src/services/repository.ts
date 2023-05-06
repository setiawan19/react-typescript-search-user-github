import { getWithUrlParamAsync } from "./api";

export const getRepositoriesAsync = async (
  url: string,
): Promise<RepoResponse[]> => await getWithUrlParamAsync<RepoResponse[]>(url);
