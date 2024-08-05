import { useQuery } from "react-query";
import { VideoPictures } from "../pages/collection/utils";
import { createClient } from "pexels";

const client = createClient(
  "iytGCVkST2vNhm0c2Nb6CdMkwtRQtFILRPkG7yP21YVGmJKVPyQJK40a"
);

const query = "City";
const getPhotos = async () => {
  const result: VideoPictures = await client.photos
    .search({ query, per_page: 100 })
    .then((naturePhotos: unknown) => {
      return naturePhotos as VideoPictures
    })
  return result;
};

const getPhoto = async ({ id }) => {
  const result: VideoPictures = await client.photos
    .show({ id })
    .then((naturePhotos: unknown) => {
      console.log("[naturePhotos]: ", naturePhotos);
      return naturePhotos as VideoPictures;
    });
  return result;
};

const getSinglePhoto = (props) => {
  const input = {
    id: props.slug,
  };
  return getPhoto(input);
};

export const useCollectionQuery = () => {
  const collectionQuery = () => {
    return useQuery("collection", getPhotos, {
      refetchOnWindowFocus: false,
    });
  };

  const photoQuery = ({ slug }) => {
    return useQuery("photo", () => getSinglePhoto({ slug }), {
      refetchOnWindowFocus: false,
      enabled: !!slug,
    });
  };
  return {
    collectionQuery,
    photoQuery,
  };
};
