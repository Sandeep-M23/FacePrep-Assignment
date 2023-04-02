import React, { FC, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login: FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const user = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };
    localStorage.setItem("user", JSON.stringify(user));

    //update Auth Context
    dispatch({ type: "LOGIN", payload: user });
    navigate("/");
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          border={"2px solid #11a0dc8f"}
          p={6}
          borderRadius={8}
          height={"425px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Heading
            fontWeight={600}
            fontSize={"3xl"}
            lineHeight={"120%"}
            textAlign={"center"}
            marginBottom={"5px"}
          >
            Hello Welcome,{" "}
            <Text color={"#11a0dc8f"}>Login To Your Account</Text>
          </Heading>
          <Box as={"form"} onSubmit={onSubmitHandler}>
            <Stack spacing={4}>
              <FormControl id={"email"} isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor={"#E0E1E7"}>
                  <InputLeftElement pointerEvents={"none"}>
                    <MdOutlineEmail color={"gray.800"} />
                  </InputLeftElement>
                  <Input
                    ref={emailRef}
                    type={"text"}
                    size={"md"}
                    borderColor={"gray.300"}
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder={"Your-Email@example.com"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="subject" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  ref={passwordRef}
                  type={"password"}
                  size={"md"}
                  borderColor={"gray.300"}
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Password"
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>
              <FormControl id="button">
                <Button
                  type={"submit"}
                  width={"100%"}
                  variant={"solid"}
                  bg={"#11a0dcc9"}
                  color={"white"}
                  _focus={{ outline: "none" }}
                  _active={{ bg: "#11a0dcc9" }}
                  _hover={{
                    bg: "#11a0dc8f",
                  }}
                  rightIcon={<AiOutlineLogin />}
                >
                  Login
                </Button>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1} display={{ base: "none", md: "flex" }}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"../assets/images/grid.png"}
        />
      </Flex>
    </Stack>
  );
};

export default Login;
