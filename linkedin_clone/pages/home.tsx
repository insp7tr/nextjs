import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";
import {
  MdArrowForwardIos,
  MdBusinessCenter,
  MdExplore,
  MdGroup,
  MdOndemandVideo,
} from "react-icons/md";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

type Props = {
  providers: any;
};

const home = ({ providers }: Props) => {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkedIn Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-around items-center py-4 ">
        <div className="relative h-10 w-36">
          <Image
            layout="fill"
            objectFit="contain"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={MdExplore} text="Discover" />
            <HeaderLink Icon={MdGroup} text="People" />
            <HeaderLink Icon={MdOndemandVideo} text="Learning" />
            <HeaderLink Icon={MdBusinessCenter} text="Jobs" />
          </div>

          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:p-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <MdArrowForwardIos className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <MdArrowForwardIos className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <MdArrowForwardIos className="text-gray-700" />
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image
            layout="fill"
            priority
            src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          />
        </div>
      </main>
    </div>
  );
};

export default home;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
