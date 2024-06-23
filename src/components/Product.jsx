import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Tooltip,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { UserContext } from "./Context/Context";
import axios from "axios";
import { url } from "../constants/constant";

const Product = () => {
  let { data, setData } = useContext(UserContext);
  const [showData, setShowData] = useState({});
  const [showInputBox, setShowInputBox] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (!data.title) {
      setData(JSON.parse(localStorage.getItem("webScrapperData")));
      console.log(JSON.parse(localStorage.getItem("webScrapperData")));
    }
  }, []);

  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;

  const addProduct = async () => {
    setLoading(true);
    if (
      !mail ||
      !data ||
      (!mail.includes("gmail") &&
        !mail.includes("rediffmail") &&
        !mail.includes("yahoo"))
    ) {
      toast({
        title: "Please enter an email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    try {
      let response = await axios.post(`${url}/addProduct`, { mail, data });
      if (response.status === 200) {
        toast({
          title: "Tracking started",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setMail("");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      overflowX={"hidden"}
      fontFamily={"Montserrat"}
    >
      <Navbar />
      <Box w={"100%"} mt={"2rem"} pb={"2rem"} h={"100%"}>
        <HStack
          w={"100%"}
          pl={"2rem"}
          pr={"2rem"}
          alignItems={"flex-start"}
          border={"1px solid #e7e7e7"}
          h={"100%"}
          overflowX={'hidden'}
        >
          {/* left side */}
          <VStack w={"35%"}>
            {/* backgroundImage of item */}
            <Box
              w={"100%"}
              h={"30rem"}
              bgImage={`url('${data?.image}')`}
              bgSize={"contain"}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
              // border={"1px solid #e7e7e7"}
              borderTop={"none"}
              borderLeft={"none"}
            ></Box>
          </VStack>
          {/* right side */}
          <VStack
            w={"65%"}
            h={"100%"}
            pl={"3rem"}
            borderLeft={"1px solid #e7e7e7"}
            // overflowY={'scroll'}
          >
            <Box w={"100%"}>
              {/* Product Title */}
              <Box mt={"1rem"}>
                <Text fontSize={"1.2rem"} mb={"0"}>
                  {data?.title}
                </Text>
              </Box>
              {/* Bestseller icon */}
              {data?.bestSeller && (
                <Box mt={"0.5rem"}>
                  <Text
                    bgColor={"#00A098"}
                    display={"inline-block"}
                    fontWeight={"500"}
                    p={"0.1rem 0.3rem 0.1rem 0.3rem"}
                    color={"#f5f5f5"}
                    borderRadius={"0.3rem"}
                    fontSize={"0.8rem"}
                  >
                    {data?.bestSeller}
                  </Text>
                </Box>
              )}
              {/* Product rating */}
              <Box display={"inline-block"} mt={"1rem"}>
                <Text
                  fontSize={"0.9rem"}
                  bgColor={"#388E3C"}
                  textAlign={"center"}
                  fontWeight={"500"}
                  color={"#f5f5f5"}
                  p={"0 0.5rem 0 0.5rem"}
                  borderRadius={"0.3rem"}
                  mr={"1rem"}
                >
                  {data?.rating}{" "}
                  <i
                    style={{
                      fontSize: "0.7rem",
                      position: "relative",
                      bottom: "0.1rem",
                    }}
                    class="fa-solid fa-star"
                  ></i>
                </Text>
              </Box>
              {/* Product rating and review */}
              <Box display={"inline-block"}>
                <Text fontSize={"0.9rem"} fontWeight={"600"} color={"#878787"}>
                  {data?.raters}
                </Text>
              </Box>
              {/* Product price */}
              <Box>
                <Text fontWeight={"600"} fontSize={"1.7rem"}>
                  {data.from === "amazon"
                    ? "₹ " + data?.showingPrice
                    : data?.showingPrice}
                </Text>
              </Box>
              {/* track product button */}
              <Box display={"flex"} alignItems={"flex-end"} mt={"1rem"}>
                <Button
                  bgColor={"#333"}
                  color={"#f5f5f5"}
                  _hover={{ bgColor: "#000" }}
                  onClick={() => {
                    setShowInputBox(!showInputBox);
                  }}
                >
                  Track Product
                </Button>
                <Box>
                  <Tooltip
                    label="Whenever the price of product drops, we'll inform you via mail"
                    placement="right"
                    hasArrow
                  >
                    <Text
                      position={"relative"}
                      top={"0.4rem"}
                      left={"1rem"}
                      color={"#a1a1a1"}
                      cursor={"pointer"}
                    >
                      <i class="fa-solid fa-circle-info"></i>
                    </Text>
                  </Tooltip>
                </Box>
              </Box>
              {/* Mail Input */}
              {showInputBox && (
                <Box display={"flex"} gap={"0.5rem"} mt={"1rem"}>
                  <Box>
                    <Input
                      placeholder="Enter your mail"
                      type="email"
                      autoComplete="off"
                      value={mail}
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                    />
                  </Box>
                  <Box>
                    <Button
                      bgColor={"#333"}
                      color={"#f5f5f5"}
                      _hover={{ bgColor: "#000" }}
                      onClick={addProduct}
                      isLoading={loading}
                    >
                      Start tracking
                    </Button>
                  </Box>
                </Box>
              )}
              {/* product description */}

              <Box mt={"1.5rem"}>
                <Text color={"grey"} fontWeight={"500"} mb={"0.3rem"}>
                  Description
                </Text>
              </Box>

              <Box>
                <Text>{data?.description || "No description available"}</Text>
              </Box>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Product;
