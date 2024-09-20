import { useInfiniteQuery } from "@tanstack/react-query";
import request from "../utils/common";
import { REGION } from "../utils/constans";
import React from "react";
import { AxiosResponse } from "axios"; // Убедитесь, что AxiosResponse импортирован

// Интерфейс для параметров поиска
interface ISearchFeedParams {
  keywords: string;
  cursor: number;
}

// Интерфейс для ответа от API
interface IFeedResponse {
  cursor: number;
  hasMore: any;
  data: {
    hasMore: boolean;
    cursor: number;
    videos: any[]
    [key: string]: any; // другие необходимые поля
  };
}

// Функция для выполнения запроса поиска по ключевым словам
const getSearchFeedByKeywords = async ({
  keywords,
  cursor,
}: ISearchFeedParams): Promise<AxiosResponse<IFeedResponse>> => {
  const pathData: string = "feed/search";

  const response = await request({
    path: pathData,
    method: "GET",
    params: {
      keywords,
      cursor,
      region: REGION,
      count: 20,
    },
  });

  if (!response) {
    throw new Error("Failed to fetch search feed");
  }
  return response;
};

// Хук для получения данных с пагинацией
export const useSearch = () => {

  // Состояние для параметров поиска
  const [params, setParams] = React.useState<ISearchFeedParams>({
    keywords: "",
    cursor: 0,
  });

  // Реализация бесконечного запроса
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["searchFeed", params.keywords], // Ключ для запроса

    // Функция для выполнения запроса (принимает pageParam для пагинации)
    queryFn: ({ pageParam = params }: { pageParam: ISearchFeedParams }) =>
      getSearchFeedByKeywords(pageParam),

    // Логика для получения следующей страницы
    getNextPageParam: (lastPage) => {
      if (lastPage?.data?.hasMore) {
        return {
          ...params,
          cursor: lastPage.data.cursor// + 20, // Увеличиваем курсор для следующей страницы
        };
      }
      return undefined; // Если больше страниц нет, возвращаем undefined
    },

    // Выполняем запрос только если заданы ключевые слова
    enabled: !!params.keywords,

    // Добавляем начальный параметр страницы
    initialPageParam: params,
  });

  return {
    // Объединяем все страницы данных в один массив
    data: data?.pages?.flatMap((page) => page.data) || [],
    isFetching, // Состояние запроса (идёт ли загрузка)
    setParams, // Функция для установки новых параметров поиска
    fetchNextPage, // Функция для получения следующей страницы
    hasNextPage, // Флаг, есть ли еще страницы для загрузки
  };
};
