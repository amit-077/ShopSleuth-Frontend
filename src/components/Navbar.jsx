import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { url } from "../constants/constant";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  const sampleCall = async () => {
    navigation("/");
    let data = await axios.get(`${url}`);
    console.log(data);
  };

  const logVal = () => {
    console.log("Contact Us");
  };

  return (
    <Box w={"100vw"} pl={"10rem"} pr={"10rem"} pt={"0.7rem"} pb={"0.7rem"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text
            fontSize={"2rem"}
            fontWeight={"500"}
            fontFamily={"Patua One"}
            color={"#ff6347"}
            onClick={sampleCall}
          >
            ShopSleuth
          </Text>
        </Box>
        <Box display={"flex"} gap={"2rem"}>
          <Box>
            <Text
              cursor={"pointer"}
              _hover={{ color: "#ff6347" }}
              onClick={() => {
                navigation("/about");
              }}
            >
              About us
            </Text>
          </Box>
          <Box>
            <Link
              href="https://github.com/amit-077"
              _hover={{ textDecoration: "none" }}
              target="_blank"
            >
              <Text cursor={"pointer"} _hover={{ color: "#ff6347" }}>
                Contact us
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
