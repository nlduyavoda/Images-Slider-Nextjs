import { useRouter } from "next/router";

const Cars = () => {
  const { query } = useRouter();
  console.log("query", query);
  return <div>List cars</div>;
};
export default Cars;
