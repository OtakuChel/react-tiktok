import { useQuery } from "@tanstack/react-query";

export const useFeed = () => {
    const {data} = useQuery({
        queryKey: ['feed'],
        queryfn
    })
};
