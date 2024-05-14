import axios from "axios";
import { PATHS } from "../../constant/path";

// Delete a contact using the API
export async function deleteAPI(
  path: string,
  contactId: number
): Promise<void> {
  await axios.delete(`${PATHS.DATA_BASE}/${path}/${contactId}`);
}
