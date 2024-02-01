import type { VercelRequest, VercelResponse } from "@vercel/node";

// NOTE: it really should import .js file as in serverless runtime there is no .ts file available
// eslint-disable-next-line no-restricted-imports
import { fetchExchangeRates } from "./_api.helpers.js";

export default async function handler(_request: VercelRequest, response: VercelResponse) {
    const result = await fetchExchangeRates();
    response.status(200).send(result);
}
