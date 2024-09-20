import { useQuery } from "@tanstack/react-query";
import request from "../utils/common";
import { REGION } from "../utils/constans";

// url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/feed/list',
//   params: {
//     region: 'JP',
//     count: '10'
//   }

const getFeed = async () => {
  const pathData: string = `feed/list?region=${REGION}&count=20`
  const response = await request({
    path: pathData,
    method: "GET",
    body: "",
  });
  return response;
};

export const useFeed = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
  });
  return { data: data?.data || [], isLoading };
};
