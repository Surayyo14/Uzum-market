import React from "react";
import { useQueryHendler } from "../../hooks/useQueryHandler";
import Card from "./card";

const Home = () => {
  const { data, isLoading, isError } = useQueryHendler({
    url: "products",
    pathname: "products",
  });

  if (isLoading) {
    return <div className="container mx-auto w-[90%]">Loading...</div>;
  }

  if (isError) {
    return <div className="container mx-auto w-[90%]">Error loading data.</div>;
  }

  return (
    <div className="container mx-auto w-[90%]">
      <div className="grid grid-cols-5 gap-7">
        {data?.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Home;
