import { Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import type { FC } from "react";

const Loader: FC = () => {
  return (
    <Center>
      <Spinner thickness={"10px"} color={"#11a0dcc9"} h={24} w={24} />
    </Center>
  );
};

export default Loader;
