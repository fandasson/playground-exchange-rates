import { ExchangeRate } from "store/api/types";

type Props = {
    exchangeRates?: ExchangeRate[];
};

const List = (props: Props) => {
    const { exchangeRates } = props;

    if (!exchangeRates) {
        return <div>loading...</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {exchangeRates.map((exchangeRate) => (
                    <tr key={exchangeRate.code}>
                        <td>{exchangeRate.currency}</td>
                        <td>{exchangeRate.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export { List };
