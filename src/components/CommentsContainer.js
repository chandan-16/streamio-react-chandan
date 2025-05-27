const commentsData = [
    {
      name: "Chandan Gautam",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
      replies: [],
    },
    {
      name: "Chandan Gautam",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
      replies: [
        {
          name: "Chandan Gautam",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
          replies: [
            {
              name: "Chandan Gautam",
              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
              replies: [
                {
                  name: "Chandan Gautam",
                  text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                  replies: [
                    {
                      name: "Chandan Gautam",
                      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                      replies: [
                        {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [
                                                        {
                              name: "Chandan Gautam",
                              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                              replies: [],
                            },
                                                        {
                              name: "Chandan Gautam",
                              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                              replies: [],
                            },
                            
                        {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [],
                        },
                                                {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [
                                                    {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [],
                        },
                                                {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [],
                        },
                                                {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [],
                        },
                          ],
                        },

                          ],
                        },
                        {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                          replies: [
                            {
                              name: "Chandan Gautam",
                              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                              replies: [],
                            },
                            {
                              name: "Chandan Gautam",
                              text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
                              replies: [],
                            },
                          ],
                        },
                        {
                          name: "Chandan Gautam",
                          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
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
      ],
    },
    {
      name: "Chandan Gautam",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
      replies: [],
    },
    {
      name: "Chandan Gautam",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
      replies: [],
    },
    {
      name: "Chandan Gautam",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quam. ",
      replies: [],
    },
  ];

  const Comment = ({data}) => {

    const { name, text, replies } = data;

    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded my-2 my-2">
        <img className="w-10 h-10" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Img" />

      <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
      </div>

      </div>
    )
  }

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />

      <div className="pl-5 border border-l-black ml-2">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
  }



const CommentsContainer = () => {
  return (
    <div className="m-1 pl-8 pt-2 w-310 ">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer


