import { useRouter } from "next/router";

const Cars = () => {
  const { query } = useRouter();
  if (Object.keys(query).includes("cars")) {
    return (
      <div>
        carIds: <span></span>
      </div>
    );
  } else return <span>loading</span>;
};
export default Cars;
