import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Default query fetching data from API.
 * As there is only one endpoint with no params, the default query is all we need.
 * Using it simplifies calling useQuery hook
 */
const defaultQueryFn: QueryFunction = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    if (!response.ok) {
        throw new Error(`Network response failed: ${response.status} ${response.statusText}`);
    }
    return response.text();
};

export const getQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: defaultQueryFn,
            },
        },
    });
