import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_SUBREDDIT_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($id: ID!) {
    getVoteUsingPost_id(id: $id) {
      id
      post_id
      upvote
      username
      created_at
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        topic
        id
      }
      voteList {
        id
        created_at
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        topic
        id
      }
      voteList {
        id
        created_at
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      commentList {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        topic
        id
      }
      voteList {
        id
        created_at
        post_id
        upvote
        username
      }
    }
  }
`;
