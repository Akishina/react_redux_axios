import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useLoginMutation } from "../../app/services/auth";

export default function LoginCard() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, data, error }] = useLoginMutation();
  const flexBg = useColorModeValue("gray.50", "gray.800");
  const boxBg = useColorModeValue("white", "gray.700");

  if (data) {
    return <Navigate to={"/"} />;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={flexBg}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>

        <Box rounded={"lg"} bg={boxBg} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>

              <Stack align={"center"}>
                {error && (
                  <Text fontSize={"lg"} color={"red.600"}>
                    {error.status === 401
                      ? error.data?.message
                      : "Cannot connect to server!"}
                  </Text>
                )}
              </Stack>

              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
                disabled={isLoading}
                onClick={async () => {
                  await login({ name, password });
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
