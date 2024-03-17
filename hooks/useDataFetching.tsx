import { useQuery } from '@tanstack/react-query'

const fetchData = async (url :any ) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useDataFetching = (dynamicParam:any) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${baseUrl}/${dynamicParam}`;

  return useQuery({queryKey: [`${apiUrl}`], queryFn: () => fetchData(apiUrl)});
};