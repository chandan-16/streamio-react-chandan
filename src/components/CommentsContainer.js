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

    const { name, text } = data;

    return (
      <div className="        
        flex items-start space-x-3 bg-gray-100 p-3 rounded-lg shadow-sm
        my-2 max-w-full
        md:max-w-2xl lg:max-w-3xl">

        <img className="w-10 h-10 rounded-full flex-shrink-0" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Img" />
        <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-800">{name}</p>
            <p  className="text-gray-700 text-sm break-words">{text}</p>
        </div>
      </div>
    )
  }

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
    <div key={index} className="mb-4">
      <Comment key={index} data={comment} />

      <div className=" mt-2 ml-4 pl-4 border-l-2 border-gray-300
          md:ml-6 md:pl-6
          lg:ml-8 lg:pl-8">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
  }



const CommentsContainer = () => {
  return (
    <div className="  
    container mx-auto px-4 mt-4 mb-6
    sm:px-6 md:px-8 lg:px-10
    max-w-full
    lg:max-w-3xl">

      <h1 className="text-2xl font-bold mb-4">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer


