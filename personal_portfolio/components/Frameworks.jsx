import flutterLogo from "/public/assets/img/logos/flutterLogo.png";
import csharpLogo from "/public/assets/img/logos/csharpLogo.png";
import cppLogo from "/public/assets/img/logos/cppLogo.png";
import dartLogo from "/public/assets/img/logos/dartLogo.png";
import goLogo from "/public/assets/img/logos/golangLogo.png";
import javaLogo from "/public/assets/img/logos/javaLogo.png";
import kotlinLogo from "/public/assets/img/logos/kotlinLogo.png";
import swiftLogo from "/public/assets/img/logos/swiftLogo.png";
import pythonLogo from "/public/assets/img/logos/pythonLogo.png";
import reactLogo from "/public/assets/img/logos/reactLogo.png";
import htmlLogo from "/public/assets/img/logos/htmlLogo.png";
import tsLogo from "/public/assets/img/logos/tsLogo.png";
import angularLogo from "/public/assets/img/logos/angularLogo.png";
import vueLogo from "/public/assets/img/logos/vueLogo.png";
import nodeLogo from "/public/assets/img/logos/nodeLogo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Frameworks = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let content;
  content = (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-tertiary-dark-bg rounded-3xl text-center py-16 px-12 -mt-16">
              <h5>What Skills I Have</h5>
              <h2 className="mb-5 text-4xl sm:text-5xl">
                Languages and Frameworks
              </h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="mb-12 mt-1">
                    <Image src={flutterLogo} alt="" />
                  </div>
                  <h5>Flutter</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="mb-12 mt-1">
                    <Image src={csharpLogo} alt="" />
                  </div>
                  <h5>C#</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mt-12 mb-24">
                    <Image src={goLogo} alt="" />
                  </div>
                  <h5>Golang</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="mb-12 mt-1">
                    <Image src={dartLogo} alt="" />
                  </div>
                  <h5>Dart</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="mb-8">
                    <Image src={cppLogo} alt="" />
                  </div>
                  <h5>C++</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mt-10 mb-20">
                    <Image src={javaLogo} alt="" />
                  </div>
                  <h5>Java</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-12 mt-1">
                    <Image src={kotlinLogo} alt="" />
                  </div>
                  <h5>Kotlin</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-16 mt-1">
                    <Image src={swiftLogo} alt="" />
                  </div>
                  <h5>Swift</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-12 mt-1">
                    <Image src={pythonLogo} alt="" />
                  </div>
                  <h5>Python</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-12 mt-1">
                    <Image src={tsLogo} alt="" />
                  </div>
                  <h5>Javascript / Typescript</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-14 mt-2.5">
                    <Image src={reactLogo} alt="" />
                  </div>
                  <h5>React</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-12 mt-1">
                    <Image src={htmlLogo} alt="" />
                  </div>
                  <h5>HTML</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-10">
                    <Image src={angularLogo} alt="" />
                  </div>
                  <h5>Angular</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-11 mt-1.5">
                    <Image src={vueLogo} alt="" />
                  </div>
                  <h5>Vue</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <div className="w-full mb-16 mt-11">
                    <Image src={nodeLogo} alt="" />
                  </div>
                  <h5>Node</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return content;
};

export default Frameworks;
