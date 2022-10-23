import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import { connectToDatabase } from "../util/mongodb";
import Widgets from "../components/Widgets";

type Props = {
  posts: any;
  articles: any;
};

const Home = ({ posts, articles }: Props) => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/home");
    },
  });

  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>LinkedIn Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5 ">
          <Sidebar />
          <Feed posts={posts} />
        </div>
        <Widgets articles={articles} />
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find()
    .sort({ timeStamp: -1 })
    .toArray();

  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=za&apiKey=${process.env.NEWS_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      session,
      posts: posts.map(
        ({ _id, input, photoUrl, username, userImg, createdAt }: any) => ({
          _id: _id.toString(),
          input,
          photoUrl,
          username,
          userImg,
          createdAt,
        })
      ),
      articles: results.articles,
    },
  };
}
