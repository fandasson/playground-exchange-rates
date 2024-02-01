import fetch from "node-fetch";

export const fetchExchangeRates = async () => {
    const url = process.env.EXCHANGE_RATES_API;
    if (!url) {
        throw new Error("Missing EXCHANGE_RATES_API env variable");
    }
    const apiResponse = await fetch(url);
    return await apiResponse.text();
};
