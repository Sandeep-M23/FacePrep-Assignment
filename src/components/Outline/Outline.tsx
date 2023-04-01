import React, { FC } from "react";
import { Box, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";

const Outline: FC = () => {
  return (
    <Box
      p={4}
      boxShadow={"xl"}
      borderRadius={"lg"}
      m={6}
      display={"flex"}
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent={"space-between"}
      borderX={"5px solid #11a0dc82"}
      backgroundColor={"#11a0dc0f"}
    >
      <Stack align={"center"}>
        <Skeleton height="20px" width={"12rem"} />
        <Skeleton height="20px" width={"12rem"} />
        <Skeleton height="20px" width={"12rem"} />
      </Stack>
      <Box display={"flex"} justifyContent={"center"} mb={2}>
        <SkeletonCircle size="20" />
      </Box>
    </Box>
  );
};

export default Outline;
