import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { ImWink2 } from "react-icons/im";
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
    bannerImgUrl,
    bannerType,
    images,
    features,
    packages,
    startDate,
    endDate,
    completed,
    github,
  } = projects[name][id - 1];
  return (
    <div className="project-details-page bg-black">
      <Link href={"/"} passHref>
        <button className="w-full p-2">
          <MdOutlineArrowBackIosNew size={50} />
        </button>
      </Link>
      <Box maxWidth="1000px" margin="auto" p="4">
        <Flex className="justify-center items-center mb-3">
          <Text
            fontSize="3xl"
            marginBottom="2"
            fontWeight="bold"
            className="tagline"
          >
            {title}
          </Text>
        </Flex>
        {images && <ImageScrollbar data={images} />}
        <Box>
          <Text
            fontSize="3xl"
            marginBottom="2"
            marginTop="10"
            fontWeight="bold"
            className="tagline"
          >
            Description
          </Text>
          <Text lineHeight="2" fontSize="xl">
            {description}
          </Text>
        </Box>
        <Box>
          {features && (
            <Text
              fontSize="3xl"
              marginBottom="2"
              marginTop="7"
              fontWeight="bold"
              className="tagline"
            >
              Features
            </Text>
          )}
          <ul>
            {features?.map((feature, index) => (
              <Text key={index} fontSize="xl">
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
              <Text fontWeight="bold" className="tagline">
                Start Date:
              </Text>
              <Text fontWeight="bold" className="tagline">
                {startDate}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text fontWeight="bold" className="tagline">
                End Date:
              </Text>
              <Text fontWeight="bold" className="tagline">
                {endDate}
              </Text>
            </Flex>
          </Flex>

          <Flex className="justify-center items-center">
            <Flex
              justifyContent="space-evenly"
              width="max-content"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
              marginBottom="20px"
            >
              <Text fontWeight="bold" className="tagline">
                <VscGithub />
              </Text>
              <a
                href={github}
                className="hover:text-purple-400"
                target="_blank"
                rel="noreferrer"
              >
                <Text fontWeight="bold" className="tagline">
                  Github Source Code
                </Text>
              </a>
              <Text fontWeight="bold" className="tagline">
                Leave a star!
              </Text>
              <Text fontWeight="bold" className="tagline">
                <ImWink2 />
              </Text>
            </Flex>
          </Flex>

          {packages && (
            <Text
              fontSize="2xl"
              fontWeight="black"
              marginTop="5"
              className="tagline"
            >
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
