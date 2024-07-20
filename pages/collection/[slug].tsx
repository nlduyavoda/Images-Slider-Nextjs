import React from "react";
import { useRouter } from "next/router";
import { useCollectionQuery } from "../../Services/usePhotoQueries";
import ShopLayout from "./Layout";
import { Photo } from "./utils";
import CircumIcon from "@klarr-agency/circum-icons-react";

const CardComponent = () => {
  const { slug } = useRouter().query;
  const { photoQuery } = useCollectionQuery();
  const { data: dataSource, isLoading } = photoQuery({ slug }) as {
    data: Photo;
    isLoading: boolean;
  };
  if (isLoading) {
    return <>Loading...</>;
  }
  console.log("dataSource: ", dataSource);
  return (
    <div className="flex flex-col">
      <div className="flex items-start p-11 items-center gap-8">
        <CircumIcon name="circle_chev_left" color="#ffffff" size="48px" />
        <picture>
          <source srcSet={dataSource?.src?.large} media="(min-width: 800px)" />
          <source srcSet={dataSource?.src?.medium} media="(min-width: 400px)" />
          <img
            src="default-image.jpg"
            alt="Mô tả hình ảnh"
            className="flex items-start object-cover rounded-[20px]"
          />
        </picture>
        <CircumIcon name="circle_chev_right" color="#ffffff" size="48px" />
      </div>
      <div className="ml-10">
        <p className="flex w-full text-4xl text-white">
          {dataSource?.photographer}
        </p>
        <p className="flex w-full text-lg text-white">{dataSource?.alt}</p>
      </div>
    </div>
  );
};

CardComponent.getLayout = (page) => {
  return <ShopLayout>{page}</ShopLayout>;
};

export default CardComponent;
