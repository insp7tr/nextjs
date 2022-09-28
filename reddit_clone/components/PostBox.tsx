import { LinkIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_POST, ADD_SUBREDDIT } from "../graphql/mutations";
import client from "../apollo-client";
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from "../graphql/queries";
import toast from "react-hot-toast";

type Props = {
  subreddit?: string;
};

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

const PostBox = ({ subreddit }: Props) => {
  const { data: session } = useSession();
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS, "getPostList"],
  });
  const [addSubreddit] = useMutation(ADD_SUBREDDIT);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [imageBoxOpen, setImageBoxOpen] = useState<Boolean>(false);

  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("Creating new post...");

    try {
      const {
        data: { getSubredditListByTopic },
      } = await client.query({
        query: GET_SUBREDDIT_BY_TOPIC,
        variables: {
          topic: subreddit || formData.subreddit,
        },
      });

      console.log(getSubredditListByTopic);

      const subredditExists = getSubredditListByTopic.length > 0;

      if (!subredditExists) {
        console.log("Subreddit is new! -> creating a NEW Subreddit!");

        const {
          data: { insertSubreddit: newSubreddit },
        } = await addSubreddit({
          variables: {
            topic: formData.subreddit,
          },
        });

        console.log("Creating post...", formData);
        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: newSubreddit.id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });

        console.log("New post added: ", newPost);
      } else {
        console.log("Using existing subreddit!");
        console.log(getSubredditListByTopic);

        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            subreddit_id: getSubredditListByTopic[0].id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });

        console.log("New post added: ", newPost);
      }

      setValue("postBody", "");
      setValue("postImage", "");
      setValue("postTitle", "");
      setValue("subreddit", "");

      toast.success("New Post Created", {
        id: notification,
      });
    } catch (error) {
      console.log(error);

      toast.error("Whoops something went wrong!", {
        id: notification,
      });
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-16 z-50 bg-white rounded-md border border-gray-300 p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          {...register("postTitle", { required: true })}
          disabled={!session}
          type="text"
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          placeholder={
            session
              ? subreddit
                ? `Create a post in r/${subreddit}`
                : "Create a post by entering a title!"
              : "Sign in to post"
          }
        />

        <PhotoIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col p-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              {...register("postBody")}
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              placeholder="Text (optional)"
            />
          </div>

          {!subreddit && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Subreddit:</p>
              <input
                {...register("subreddit", { required: true })}
                type="text"
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                placeholder="i.e. reactjs"
              />
            </div>
          )}

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image Url:</p>
              <input
                {...register("postImage")}
                type="text"
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                placeholder="Optional..."
              />
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p className="">A Post Title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p className="">A Subreddit is required</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-blue-400 p-2 text-white"
          >
            Create Post
          </button>
        </div>
      )}
    </form>
  );
};

export default PostBox;
