import Link from "next/link.js";
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
  const handleSelect = (event, isSetNull) => {
    if (isSetNull) {
      return setSelectedID(null);
    }
    setSelectedID(+event.currentTarget.value);
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
    <div className="flex flex-wrap justify-center items-end gap-5 p-10">
      <div
        ref={ref}
        className="absolute h-[50vh] w-[50vw] top-[50%] left-[50%] bg-gray-600 opacity-0 z-10 transform translate-x-[-50%] translate-y-[-50%]"
      >
        backdrop
      </div>
      {dataSource.photos.map((photo: Photo) => {
        return (
          // <Link key={photo.id} href={`/collection/${photo.id}`}>
          <button
            key={photo.id}
            value={photo.id}
            onClick={(event) => handleSelect(event, false)}
            // onBlur={(event) => handleSelect(event, true)}
          >
            <ImageComponent
              backdrop={backdrop}
              photo={photo}
              imageSelected={selecetedID === photo.id}
            />
          </button>
          // </Link>
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
