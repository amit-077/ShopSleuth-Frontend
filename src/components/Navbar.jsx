import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { url } from "../constants/constant";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  const sampleCall = async () => {
    navigation("/");
    let data = await axios.post(`${url}/productLink`, {
      productLink:
        "https://www.flipkart.com/boat-airdopes-131-upto-60-hours-asap-charge-bluetooth-headset/p/itm791b64335e2bf?pid=ACCG48F2YZNGZ8D2&lid=LSTACCG48F2YZNGZ8D2RGUPFU&marketplace=FLIPKART&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=6ec52e51-4bae-4129-b68e-6a51ca575d8c.ACCFSDGXX3S6DVBG.SEARCH&ppt=sp&ppn=sp&ssid=cahptg8bls0000001719143715663&qH=98db617f57fac13f",
    });
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
