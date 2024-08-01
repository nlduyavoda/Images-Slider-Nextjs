import { ReactElement, useEffect, useRef, useState } from "react";
import ImageComponent from "../../Components/Atoms/Image";
import { useCollectionQuery } from "../../Services/usePhotoQueries";
import ShopLayout from "./Layout";
import { Photo } from "./utils";

const Collection = () => {
  const ref = useRef(null);
  const { collectionQuery } = useCollectionQuery();
  const { data: dataSource, isLoading } = collectionQuery();
  const [selecetedID, setSelectedID] = useState(null);
  const [backdrop, setBackdrop] = useState(null);
  const handleSelect = (event) => {
    if (selecetedID) {
      return setSelectedID('');
    }
    setSelectedID(event.currentTarget.value);
  };

  useEffect(() => {
    if (ref.current && selecetedID) {
      const backdropEl = ref.current.getBoundingClientRect();
      const { x, y, width, height } = backdropEl;
      setBackdrop({ x, y, width, height });
      ref.current.focus();
    }
  }, [selecetedID]);

  if (isLoading) return <>Loading...</>;
  return (
    <div className="flex flex-wrap justify-center gap-5 p-10">
      {dataSource.photos.map((photo: Photo) => {
        return (
          <button
            key={photo.id}
            value={photo.id}
            onClick={(event) => handleSelect(event)}
          >
            <ImageComponent
              photo={photo}
              active={selecetedID === photo.id + ""}
            />
          </button>
        );
      })}
    </div>
  );
};

Collection.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <>{page}</>
    </ShopLayout>
  );
};

export default Collection;
