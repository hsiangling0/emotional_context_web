import { Stack, Image, Flex, Text, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import bg_v from "../Images/bg.mp4";
import { delay, motion } from "framer-motion";
import logo from "../Images/logo.png";
import pic1 from "../Images/pic1.png";
import pic2 from "../Images/pic2.png";
import pic3 from "../Images/pic3.png";
import pic4 from "../Images/pic4.png";
import pic5 from "../Images/pic5.png";
import { script } from "../Components/introduction";
export default function Home() {
  const [variants_whole_logo, setVariants_w] = useState({});
  const [page1, setPage1] = useState("hidden");
  const [page2, setPage2] = useState("hidden");
  const MotionImage = motion(Image);
  const pic = [pic1, pic2, pic3, pic4, pic5];
  const variants_logo = {
    visible: {
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2.2,
        ease: "linear",
        duration: 0.4,
      },
    },
  };
  const variants_intro = {
    hidden: (i) =>
      i
        ? {
            opacity: 1,
            x: "200%",
          }
        : { opacity: 1, x: "-100%" },
    visible: (i) =>
      i
        ? {
            opacity: 1,
            x: "70%",
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            },
          }
        : {
            opacity: 1,
            x: "30%",
            transition: {
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            },
          },
  };
  const variant_page2 = {
    hidden: {
      opacity: 1,
      y: "300%",
    },
    visible: {
      opacity: 1,
      y: "30%",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const Intro = (user) => (
    <IntroFlex
      animate={page1}
      custom={user.dir}
      variants={variants_intro}
      initial={
        user.dir ? { opacity: 0, x: "200%" } : { opacity: 0, x: "-100%" }
      }
      style={user.dir ? { flexDirection: "row-reverse" } : {}}
    >
      <IntroImg
        src={pic[user.id]}
        whileHover={{
          scale: 2,
          transition: { duration: 0.5 },
        }}
      />
      <Stack
        fontSize="13px"
        alignItems={user.dir ? "flex-end" : "flex-start"}
        mr={user.dir ? "33px" : "0px"}
      >
        <Text>{user.name}</Text>
        <Text>{user.department}</Text>
        <Text fontSize="14px" fontWeight="bold">
          {user.introduction}
        </Text>
      </Stack>
    </IntroFlex>
  );
  const pageSwitch = () => {
    if (page1 == "hidden" && page2 == "hidden") {
      setVariants_w({
        visible: {
          scale: [1, 0.4],
          y: "-70%",
          transition: {
            ease: "linear",
            duration: 1,
          },
        },
      });
      setPage1("visible");
    } else if (page1 == "hidden") {
      setPage1("visible");
      setPage2("hidden");
    } else {
      setPage1("hidden");
      setPage2("visible");
    }
  };
  return (
    <Stack w="100vw" h="100vh">
      <Box
        bgImg={bg_v}
        w="100vw"
        h="100vh"
        bgColor="transparent"
        position="fixed"
        bgSize="cover"
      ></Box>
      <VideoBg autoPlay muted loop playsInline>
        <source type="video/mp4" src={bg_v}></source>
      </VideoBg>
      <Flex
        top="30vh"
        right="0px"
        position="absolute"
        justifyContent="center"
        w="100vw"
      >
        <LogoStack m="auto" animate="visible" variants={variants_whole_logo}>
          <MotionImage
            zIndex="1"
            cursor="pointer"
            animate="visible"
            variants={variants_logo}
            src={logo}
            h="32vh"
            onClick={() => pageSwitch()}
          ></MotionImage>
          <Text mt="8vh" fontSize="30px" fontWeight="bolder">
            我們為世界過濾情緒而生-心碎小狗顧問
          </Text>
          <Text fontSize="20px">powered by ChatGPT 3.5</Text>
        </LogoStack>
      </Flex>
      <Stack top="25vh" right="0px" position="absolute" w="100vw" pb="10vh">
        {script.map((e, index) => (
          <Intro
            key={index}
            id={index}
            name={e.name}
            department={e.department}
            introduction={e.introduction}
            dir={index % 2}
          />
        ))}
      </Stack>{" "}
      <Page2Stack animate={page2} variants={variant_page2}>
        <Text fontWeight="bolder">
          OUR VISION
          <br />
          <br />
          那些難以入耳的 令人沮喪的話往往是無心之舉，卻總讓情況變得更不可收拾
          <br />
          <br />
          這世界只是需要一點坦承
          <br />
          <br />
          為了那些雞毛蒜皮吵架的情侶
          <br />
          為了那些共同目標卻意見分歧的合夥人們
          <br />
          為了因為對用字遣詞的錯誤理解而紛爭不斷的國家與種族
          <br />
          <br />
          這將會是個透過生成式AI 即時翻譯不恰當訊息 為你過濾那些不必要情緒的軟體
        </Text>
      </Page2Stack>
    </Stack>
  );
}
const VideoBg = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;
const LogoStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IntroFlex = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  width: 50vw;
`;
const IntroImg = styled(motion.img)`
  width: 7.5vw;
`;
const Page2Stack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30vh;
  right: 0px;
  width: 100vw;
`;
