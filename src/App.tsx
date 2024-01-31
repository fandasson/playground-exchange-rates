import { useExchangeRates } from "store/api/hooks";

const App = () => {
    const { data } = useExchangeRates();
    return (
        <ul>
            {data.map((item) => (
                <li key={item.code}>
                    {item.code}: {item.rate}
                </li>
            ))}
        </ul>
    );
};

export { App };
