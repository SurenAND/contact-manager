import axios from "axios";
import { ContactType } from "./api.type";
import { PATHS } from "../../constant/path";

// Add a contact using the API
export async function postAPI(
  path: string,
  contact: ContactType
): Promise<ContactType> {
  const response = await axios.post(`${PATHS.DATA_BASE}/${path}/`, contact);
  return response.data;
}
