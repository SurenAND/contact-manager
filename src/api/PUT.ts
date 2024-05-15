import axios from "axios";
import { ContactType } from "./api.type";
import { PATHS } from "../constant/path";

// Edit a contact using the API
export async function putAPI(
  path: string,
  contactId: number,
  contact: ContactType
): Promise<ContactType> {
  const response = await axios.put(
    `${PATHS.DATA_BASE}/${path}/${contactId}`,
    contact
  );
  return response.data;
}
