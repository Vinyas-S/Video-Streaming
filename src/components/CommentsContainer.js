import React from "react";
import Comment from "./Comment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Vinyas",
      text: "Lorem ipsum",
      replies: [
        {
          name: "Vinyas",
          text: "Lorem ipsum",
          replies: [
            {
              name: "Vinyas",
              text: "Lorem ipsum",
              replies: [],
            },
            {
              name: "Vinyas",
              text: "Lorem ipsum",
              replies: [
                {
                  name: "Vinyas",
                  text: "Lorem ipsum",
                  replies: [
                    {
                      name: "Vinyas",
                      text: "Lorem ipsum",
                      replies: [
                        {
                          name: "Vinyas",
                          text: "Lorem ipsum",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Vinyas",
          text: "Lorem ipsum",
          replies: [],
        },
      ],
    },
    {
      name: "Vinyas",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      name: "Vinyas",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      name: "Vinyas",
      text: "Lorem ipsum",
      replies: [],
    },
    {
      name: "Vinyas",
      text: "Lorem ipsum",
      replies: [],
    },
  ];

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList key={index} comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
