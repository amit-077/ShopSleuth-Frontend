import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/Context";
import { url } from "../constants/constant";

const Main = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  let { data, setData } = useContext(UserContext);
  axios.defaults.withCredentials = true;

  const navigator = useNavigate();

  const toast = useToast();

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!link) {
        alert("Enter a link");

        return;
      }
      let data = await axios.post(`${url}/productLink`, 
        { productLink: link },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
      if (data.status === 200) {
        console.log(data.data);
        setData(data.data);
        localStorage.setItem("webScrapperData", JSON.stringify(data.data));
        navigator("/product");
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        toast({
          title: "Something went wrong, please try again later",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    setLoading(false);
  };

  return (
    <Box w={"100vw"} minH={"100vh"} fontFamily={"Montserrat"}>
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <Box w={"100%"} pl={"10rem"} pr={"10rem"} h={"100%"}>
        <Box
          display={"flex"}
          w={"100%"}
          justifyContent={"space-between"}
          h={"100%"}
        >
          {/* Left content */}
          <Box w={"50%"} h={"100%"}>
            <Box mt={"7rem"}>
              <Text
                fontSize={"0.8rem"}
                fontWeight={"600"}
                color={"tomato"}
                mb={"0.8rem"}
                display={"inline-block"}
              >
                Begin your intelligent shopping journey here:{" "}
                <Text
                  display={"inline-block"}
                  position={"relative"}
                  top={"0.1rem"}
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </Text>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={"2.2rem"}
                fontWeight={"600"}
                display={"inline-block"}
              >
                Tap into the potential of
                <Text
                  fontSize={"2.2rem"}
                  fontWeight={"600"}
                  display={"inline-block"}
                  color={"#ff6347"}
                >
                  ShopSleuth
                </Text>
              </Text>
            </Box>
            <Box mt={"0.5rem"}>
              <Text>
                Access robust, self-service product and growth analytics to
                enhance your ability to convert and engage more
              </Text>
            </Box>
            {/* Search bar */}
            <Box
              w={"100%"}
              mt={"2rem"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box w={"80%"}>
                <Input
                  placeholder="Enter Product Link"
                  _placeholder={{ color: "grey" }}
                  borderColor={"#d1d1d1"}
                  _focusVisible={{ borderColor: "#d1d1d1" }}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </Box>
              <Box>
                <Button
                  bgColor={"#FF6347"}
                  color={"#f5f5f5"}
                  _hover={{ bgColor: "red" }}
                  onClick={fetchData}
                  isLoading={loading}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Right content */}
          <Box w={"50%"} h={"100%"}>
            <Box w={"auto"} mt={"3rem"} ml={"3rem"}>
              {/* <Box
                w={"20rem"}
                h={"25rem"}
                borderRadius={"0.5rem"}
                // bgImage={`url('${image[currImg]}')`}
                bgPos={"center"}
                bgRepeat={"no-repeat"}
                bgSize={"contain"}
              ></Box> */}
              <Carousel />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
