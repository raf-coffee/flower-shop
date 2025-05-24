import { API_LINK } from "@/constants";

const fetchPayloadCollection = async (collectionName: string) => {
  try {
    const res = await fetch(`${API_LINK}/${collectionName}?depth=1`);

    if (!res.ok) {
      throw new Error(`Failed to fetch ${collectionName}: ${res.statusText}`);
    }

    return await res.json();
  } catch (e) {
    return { docs: [] };
  }
};

export default fetchPayloadCollection;
