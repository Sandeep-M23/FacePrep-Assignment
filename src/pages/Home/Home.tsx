import React, { FC } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { Box } from "@chakra-ui/react";
import Outline from "../../components/Outline/Outline";
import Loader from "../../components/Loader/Loader";

const Home: FC = () => {
  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, users } = useFetch(page);

  return (
    <div>
      <Navbar />
      <Box p={8} m={4}>
        {loading
          ? users.map((u: any) => <Outline />)
          : users.map((u: any) => {
              return <Card key={u.id.name} user={u} />;
            })}
      </Box>
      <div ref={loadMoreRef}>{loading && <Loader />}</div>
    </div>
  );
};

export default Home;
