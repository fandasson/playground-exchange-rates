import { ExchangeRate } from "components/ExchangeRate";
import { useExchangeRates } from "store/api/hooks";

const App = () => {
    const { data } = useExchangeRates();
    return <ExchangeRate />;
};

export { App };
