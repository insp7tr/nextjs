import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor={"pointer"}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor={"pointer"}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{ overflow: "hidden" }}
      >
        {data.map((image) => (
          <>
            <Box
              key={image.imageId}
              width="910px"
              itemID={image.imageId}
              overflow="hidden"
              p="1"
            >
              <Image
                placeholder="blur"
                blurDataURL={image.imageUrl}
                src={image.imageUrl}
                width={1000}
                height={600}
                sizes="(max-width:500px) 100px, (max-width:1023px) 400px, 1000px"
                alt="property"
              />
            </Box>
            <Flex className="justify-center items-center">
              <Text className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-yellow-200 mt-2 p-3">
                {image.imageTitle}
              </Text>
            </Flex>
          </>
        ))}
      </ScrollMenu>
    </>
  );
};

export default ImageScrollbar;
