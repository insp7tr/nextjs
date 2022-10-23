import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Input from "./Input";
import Post from "./Post";

type Props = {
  posts: any;
};

const Feed = ({ posts }: Props) => {
  const [realtimePosts, setRealtimePosts] = useState([]);

  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {!useSSRPosts
        ? realtimePosts.map((post: any) => <Post key={post._id} post={post} />)
        : posts.map((post: any) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
