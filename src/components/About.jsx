import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      fontFamily={"Montserrat"}
      pl={"10rem"}
      pr={"10rem"}
      pt={"2rem"}
    >
      <Box>
        <Text color={"#FF6347"} fontWeight={"600"} fontSize={"2rem"}>
          About Us
        </Text>
        <Text fontSize={"1rem"} lineHeight={"1.6rem"}>
          Welcome to ShopSleuth, your ultimate companion in smart shopping! We
          are dedicated to revolutionizing the way you shop online by ensuring
          you never miss out on the best deals and price drops. Our mission is
          to empower you with the tools and information you need to make
          informed purchasing decisions, saving you both time and money.
        </Text>
      </Box>
      <Box>
        <Text
          color={"#FF6347"}
          fontWeight={"600"}
          fontSize={"1.5rem"}
          mb={"0.4rem"}
        >
          Who We Are
        </Text>
        <Text fontSize={"1rem"} lineHeight={"1.6rem"} mt={0} pt={0}>
          ShopSleuth is the brainchild of a group of passionate tech enthusiasts
          and savvy shoppers who saw a need for a more efficient way to track
          online prices. By combining our expertise in web development, data
          analysis, and user experience design, we have created a powerful tool
          that simplifies and enhances your online shopping experience. Our team
          is committed to continuously improving our services to keep you ahead
          in the dynamic world of e-commerce.
        </Text>
      </Box>
      <Box>
        <Text
          color={"#FF6347"}
          fontWeight={"600"}
          fontSize={"1.5rem"}
          mb={"0.4rem"}
        >
          Our Technology
        </Text>
        <Text fontSize={"1rem"} lineHeight={"1.6rem"} mt={0} pt={0}>
          Cutting-Edge Web Scraping: At the heart of ShopSleuth lies our
          advanced web scraping technology, powered by Puppeteer. This powerful
          tool allows us to scan Flipkart's vast product database in real-time,
          identifying and tracking price changes with precision. By leveraging
          the capabilities of Puppeteer, we ensure that our price-tracking
          algorithms are both accurate and efficient, providing you with the
          most up-to-date information. <br /> <br />
          Seamless User Experience: Built with ReactJS, our user-friendly
          interface is designed with you in mind. We prioritize ease of use and
          functionality, ensuring that you can navigate the application
          effortlessly. Whether you are adding new products to your watchlist,
          reviewing price history, or setting up notifications, our intuitive
          design makes it all a breeze.
        </Text>
      </Box>
      <Box>
        <Text
          color={"#FF6347"}
          fontWeight={"600"}
          fontSize={"1.5rem"}
          mb={"0.4rem"}
        >
          Why Choose ShopSleuth?
        </Text>
        <Text fontSize={"1rem"} lineHeight={"1.6rem"} mt={0} pt={0}>
          Unbeatable Savings: ShopSleuth is your key to unlocking unbeatable
          savings. By keeping a close eye on product prices, we help you seize
          the opportunity to buy at the lowest possible price. Our goal is to
          ensure you always get the best value for your money. <br />
          <br />
          Real-Time Notifications: Timing is everything when it comes to online
          shopping. With ShopSleuth, you receive instant email alerts whenever
          there is a price reduction on your favorite items. This means you can
          act quickly and never miss out on a great deal. <br />
          <br />
          Comprehensive Price Tracking: Our detailed price tracking feature
          allows you to monitor the price history of any product. By
          understanding price trends, you can make more informed decisions about
          when to make a purchase, optimizing your shopping strategy.
          <br />
          <br /> Secure and Reliable: We take your privacy and security
          seriously. ShopSleuth employs robust security measures to protect your
          data, ensuring that your personal information remains confidential.
          You can trust us to handle your data with the utmost care.
        </Text>
      </Box>
      <Box>
        <Text
          color={"#FF6347"}
          fontWeight={"600"}
          fontSize={"1.5rem"}
          mb={"0.4rem"}
        >
          Join the ShopSleuth Community
        </Text>
        <Text fontSize={"1rem"} lineHeight={"1.6rem"} mt={0} pt={0}>
          Discover the future of online shopping with ShopSleuth. Join our
          growing community of savvy shoppers who are already benefiting from
          our innovative price-tracking features. By signing up, you gain access
          to a wealth of resources designed to help you shop smarter and save
          more. <br />
          <br />
          Stay Informed: Receive timely updates and insights on the latest price
          drops and trends. Our comprehensive notifications ensure you are
          always in the loop, ready to make the most of every shopping
          opportunity. <br />
          <br />
          Engage with Fellow Shoppers: Connect with like-minded individuals who
          share your passion for smart shopping. Exchange tips, share your
          experiences, and learn from the community to enhance your shopping
          strategy.
          <br />
          <br /> Get Started Today: Signing up is quick and easy. Simply create
          an account, add your favorite products to your watchlist, and let
          ShopSleuth do the rest. Start your journey towards smarter, more
          efficient shopping today!
        </Text>
      </Box>
      <Text fontSize={"1rem"} lineHeight={"1.6rem"} mt={0} pt={0}>
        Thank you for choosing ShopSleuth. We are excited to be a part of your
        shopping journey and look forward to helping you discover incredible
        savings. Happy shopping!
      </Text>
    </Box>
  );
};

export default About;
