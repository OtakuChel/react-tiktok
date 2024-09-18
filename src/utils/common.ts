import axios from "axios";

type TRequest = {
  path: string;
  method: string;
  body: string;
};

//настроить параметры запроса
const request = async ({ path, method = "GET", body }: TRequest) => {
  const options = {
    method,
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/comment/reply",
    params: {
      video_id: "7093219391759764782",
      comment_id: "7093219663211053829",
      count: "10",
      cursor: "0",
    },
    headers: {
      "x-rapidapi-key": "3aa00d510emsh94bee683e50397cp1b0931jsn7cf93b4370cb",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response
  } catch (error) {
    console.error(error);
  }
};

export default request;
