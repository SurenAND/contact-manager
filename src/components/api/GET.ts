import axios from "axios";
import { PATHS } from "../../constant/path";
import { ContactType } from "./api.type";

// Fetch contacts from the API
export async function getAPI(path: string): Promise<ContactType[]> {
  const response = await axios.get(`${PATHS.DATA_BASE}/${path}/`);
  return response.data;
}
