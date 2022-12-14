import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { Jelly } from "@uiball/loaders";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_VOTES_BY_POST_ID } from "../graphql/queries";
import { ADD_VOTE } from "../graphql/mutations";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  const [vote, setVote] = useState<boolean>();
  const { data: session } = useSession();

  const { data, loading, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      id: post?.id,
    },
  });

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BY_POST_ID, "getVoteUsingPost_id"],
  });

  useEffect(() => {
    const votes: Vote[] = data?.getVoteUsingPost_id;

    const vote = votes?.find(
      (vote) => vote.username == session?.user?.name
    )?.upvote;

    setVote(vote);
  }, [data]);

  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );

  const upVote = async (isUpvote: boolean) => {
    if (!session) {
      toast("You will need to be signed in to Vote!");
      return;
    }

    if (vote && isUpvote) return;

    if (vote === false && !isUpvote) return;

    console.log("Voting....");

    const {
      data: { insertVote: newVote },
    } = await addVote({
      variables: {
        post_id: post?.id,
        username: session?.user?.name,
        upvote: isUpvote,
      },
    });
  };

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVoteUsingPost_id;

    const displayNumber = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );

    if (votes?.length === 0) return 0;

    if (displayNumber === 0) {
      return votes[0]?.upvote ? 1 : -1;
    }

    return displayNumber;
  };

  return (
    <div className="flex cursor-pointer border rounded-md border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon
          onClick={() => upVote(true)}
          className={`voteButtons hover:text-red-400 ${
            vote && "text-blue-400"
          }`}
        />
        <p className="text-black text-xs font-bold">{displayVotes(data)}</p>
        <ArrowDownIcon
          onClick={() => upVote(false)}
          className={`voteButtons hover:text-blue-400 ${
            vote === false && "text-red-400"
          }`}
        />
      </div>
      <Link href={`/post/${post.id}`}>
        <div className="p-3 pb-1">
          <div className="flex items-center space-x-2">
            <Avatar seed={post.username} />
            <p className="text-xs text-gray-400">
              <Link href={`/subreddit/${post.subreddit.topic}`}>
                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                  r/{post.subreddit?.topic}
                </span>
              </Link>
              - Posted by u/
              {post.username} <TimeAgo date={post.created_at} />
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
          </div>

          <img className="w-full" src={post.image} alt="" />

          <div className="flex space-x-4 text-gray-400">
            <div className="postButtons">
              <ChatBubbleLeftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">
                {post.commentList.length} Comments
              </p>
            </div>
            <div className="postButtons">
              <GiftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postButtons">
              <ShareIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postButtons">
              <BookmarkIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postButtons">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
