# Exchange rates (pet project)

## Requirements

Create a simple React app (don’t use NextJS please), which:

1. When it starts, retrieve the latest currency exchange rates from the Czech National Bank.

API URL: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
Documentation: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/

2. Parses the downloaded data and clearly displays it to the user in the UI.
3. Add a simple form, into which the customer can enter an amount in CZK and select a currency, and after submitting (clicking a button or in real-time) sees the amount entered in CZK converted into the selected currency.
4. Commit your code throughout your work and upload the resulting codebase into a Github repo.
5. Deploy the app so it can be viewed online (it doesn’t matter where - e.q. Vercel, Netflify, etc.).
6. Tech stack: React (+ Hooks), TypeScript, Styled Components, React Query.
   Overall: Keep the code simple and the UI nice and easy to use for the user.


## Nice to have features to implement
- [ ] Allow local development without Vercel by adding local server to fetch data from API (now the `vercel dev` needs to be run to use serverless function)
- [ ] Add decimal format into `AmountInput` and format input while user type
- [ ] On click on `ListItem` select currency and scroll on form
- [ ] Add calculated rates to each currency in the `List` (user type ones and see calculated rates for all)
- [ ] Improve and unify naming of components (eg names ExchangeRate, Currency)
