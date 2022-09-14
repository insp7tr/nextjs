import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { ImWink2 } from "react-icons/im";
import Link from "next/link";

import projectsData from "../../utils/data";
import ImageScrollbar from "../../components/ImageScrollbar";
import { Box, Text, Flex } from "@chakra-ui/react";

const ProjectDetails = ({
  project: {
    languages,
    title,
    description,
    images,
    features,
    packages,
    backendPackages,
    startDate,
    endDate,
    completed,
    github,
  },
}) => {
  return (
    <div className="">
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
            className="tagline bg-custom-gradient"
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
            className="tagline bg-custom-gradient"
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
              className="tagline bg-custom-gradient"
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
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
                Start Date:
              </Text>
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
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
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
                End Date:
              </Text>
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
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
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
                <VscGithub />
              </Text>
              <a
                href={github}
                className="hover:text-purple-400"
                target="_blank"
                rel="noreferrer"
              >
                <Text fontWeight="bold" className="tagline bg-custom-gradient">
                  Github Source Code
                </Text>
              </a>
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
                Leave a star!
              </Text>
              <Text fontWeight="bold" className="tagline bg-custom-gradient">
                <ImWink2 />
              </Text>
            </Flex>
          </Flex>

          {languages[0] && (
            <Text
              fontSize="2xl"
              fontWeight="black"
              marginTop="5"
              className="tagline bg-custom-gradient"
            >
              {languages[0]} Packages:
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
          {languages[1] && (
            <Text
              fontSize="2xl"
              fontWeight="black"
              marginTop="5"
              className="tagline bg-custom-gradient"
            >
              {languages[1]} Packages:
            </Text>
          )}
          <Flex flexWrap="wrap">
            {backendPackages?.map((amenity) => (
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

export async function getServerSideProps({ params: { id } }) {
  const data = projectsData[id];

  return {
    props: {
      project: data,
    },
  };
}
export default ProjectDetails;
