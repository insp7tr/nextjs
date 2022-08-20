import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Link from "next/link";

import projects from "../../utils/data";
import ImageScrollbar from "../../components/ImageScrollbar";
import { Box, Text, Flex } from "@chakra-ui/react";

const ProjectDetails = () => {
  const router = useRouter();
  const { id, name } = router.query;

  const {
    projectId,
    project,
    title,
    description,
    features,
    bannerImgUrl,
    images,
    packages,
    startDate,
    endDate,
    completed,
  } = projects[name][id - 1];
  return (
    <div className="project-details-page bg-black">
      <Link href={"/"} passHref>
        <button className="w-full p-2">
          <MdOutlineArrowBackIosNew size={50} />
        </button>
      </Link>
      <Box maxWidth="1000px" margin="auto" p="4">
        <Box w="full" p="6">
          <Text fontSize="3xl" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
        </Box>
        {images && <ImageScrollbar data={images} />}
        <Box>
          <Text
            fontSize="3xl"
            marginBottom="2"
            marginTop="10"
            fontWeight="bold"
          >
            Description
          </Text>
          <Text lineHeight="2">{description}</Text>
        </Box>
        <Box>
          <Text fontSize="3xl" marginBottom="2" marginTop="7" fontWeight="bold">
            Features
          </Text>
          <ul>
            {features.map((feature, index) => (
              <Text key={index}>
                <li className="p-1">- {feature}</li>
              </Text>
            ))}
          </ul>
        </Box>
        <Box>
          <Flex
            flexWrap="wrap"
            textTransform="uppercase"
            justifyContent="space-between"
            paddingTop="50"
            paddingBottom="10"
          >
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text fontWeight="bold">Start Date:</Text>
              <Text fontWeight="bold">{startDate}</Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text fontWeight="bold">End Date: </Text>
              <Text fontWeight="bold">{endDate}</Text>
            </Flex>
          </Flex>

          {packages.length && (
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Packages:
            </Text>
          )}
          <Flex flexWrap="wrap">
            {packages?.map((amenity) => (
              <Text
                key={amenity}
                fontWeight="bold"
                color="white"
                fontSize="l"
                p="2"
                bg="purple.600"
                m="1"
                borderRadius="5"
              >
                {amenity}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectDetails;
