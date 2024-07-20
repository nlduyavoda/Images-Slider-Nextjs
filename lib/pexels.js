import axios from "axios";

import { createClient } from 'pexels';


// All requests made with the client will be authenticated


export const fetchPexelsPhotos = async (query, perPage = 10) => {
  const apiKey = "iytGCVkST2vNhm0c2Nb6CdMkwtRQtFILRPkG7yP21YVGmJKVPyQJK40a";
    const url = "https://api.pexels.com/v1/search";
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        query,
        per_page: perPage,
      },
    });

    return response.data.photos;
  } catch (error) {
    console.error("Error fetching data from Pexels:", error);
    return [];
  }
};
