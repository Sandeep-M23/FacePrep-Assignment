import React, { FC } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar: FC = () => {
  const { dispatch } = useAuthContext();

  const logoutHandler = (): void => {
    //Remove user from storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }}>
          <Text
            fontWeight={600}
            fontSize={{ base: "0.9rem", md: "1.1rem", lg: "1.2rem" }}
            color={"#11a0dcc9"}
          >
            FACE PREP ASSIGNMENT
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            bg={"#11a0dcc9"}
            _hover={{
              bg: "#11a0dc8f",
            }}
            rightIcon={<AiOutlineLogout />}
            onClick={() => logoutHandler()}
          >
            Logout
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
export default Navbar;
