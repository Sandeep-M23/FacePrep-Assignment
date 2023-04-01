import React, { FC } from "react";
import { Stack, Text, Avatar, Box } from "@chakra-ui/react";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
  };
}

interface CardProps {
  user: User;
}

const Card: FC<CardProps> = ({ user }) => {
  let name = user.name.title + "." + user.name.first + " " + user.name.last;
  let image = user.picture.large;
  return (
    <Box
      p={4}
      boxShadow={"xl"}
      borderRadius={"lg"}
      m={6}
      display={"flex"}
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderX={"5px solid #11a0dc82"}
      backgroundColor={"#11a0dc0f"}
    >
      <Stack direction={"column"} width={{ base: "100%", md: "50%" }}>
        <Text
          fontWeight={"semibold"}
          fontSize={{ base: "2xl", sm: "3xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {name}
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"center"}
          justifyContent={{ base: "center", md: "left" }}
        >
          <Text fontSize={{ base: "lg", sm: "xl" }} fontWeight={600}>
            Mail -
          </Text>
          <Text color={"gray.500"} fontSize={{ base: "md", sm: "lg" }}>
            {user.email}
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", sm: "row" }}
          align={"center"}
          justifyContent={{ base: "center", md: "left" }}
        >
          <Text fontSize={{ base: "lg", sm: "xl" }} fontWeight={600}>
            Phone Number -
          </Text>
          <Text color={"gray.500"} fontSize={{ base: "md", sm: "lg" }}>
            {user.cell}
          </Text>
        </Stack>
      </Stack>

      <Box mx={6}>
        <Avatar size={{ base: "lg", sm: "xl" }} name={name} src={image} />
      </Box>
    </Box>
  );
};

export default Card;
