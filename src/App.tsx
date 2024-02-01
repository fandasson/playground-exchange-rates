import { ExchangeRate } from "components/ExchangeRate";
import { List } from "components/List";
import { useExchangeRates } from "store/api/hooks";

const App = () => {
    const { data: exchangeRates } = useExchangeRates();
    return (
        <div>
            <ExchangeRate />
            <List exchangeRates={exchangeRates} />
        </div>
    );
};

export { App };
