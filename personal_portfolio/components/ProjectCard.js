import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  projectId,
  project,
  title,
  description,
  bannerImgUrl,
  type,
  images: { imageId, imageUrl, imageTitle },
  features,
  packages,
  startDte,
  endDate,
  completed,
  github,
}) => {
  const styles = "proj-imgbx w-full h-64 border-2";
  const fullStackStyles = "proj-imgbx w-full h-64 border-2 border-yellow-300";

  return (
    <Link href={`/project/${projectId - 1}`}>
      <Col xs={12} sm={12} md={6} lg={4} className="mb-3">
        <div className={type === "Full-Stack" ? fullStackStyles : styles}>
          <Image src={bannerImgUrl} layout="fill" alt="" quality={100} />
        </div>
        <div className="proj-txtx text-center pb-3 text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-yellow-200">
          <h4 className="pb-2">{title}</h4>
          <span>{description}</span>
        </div>
      </Col>
    </Link>
  );
};
