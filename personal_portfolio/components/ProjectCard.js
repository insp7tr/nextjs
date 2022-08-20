import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  projectId,
  title,
  description,
  bannerImgUrl,
  project,
}) => {
  return (
    <Link href={`/project/${projectId}?name=${project}`}>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx w-full h-64">
          <Image src={bannerImgUrl} layout="fill" alt="" />
        </div>
        <div className="proj-txtx text-center pb-3">
          <h4 className="pb-2">{title}</h4>
          <span>{description}</span>
        </div>
      </Col>
    </Link>
  );
};
