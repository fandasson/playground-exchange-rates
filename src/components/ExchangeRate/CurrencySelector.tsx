import { ChangeEvent } from "react";

import { ExchangeRate } from "store/api/types";

type Props = {
    currencies: ExchangeRate[];
    onSelect: (currency: ExchangeRate) => void;
};
const CurrencySelector = (props: Props) => {
    if (props.currencies.length === 0) {
        return null;
    }

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const code = e.target.value;
        const currency = props.currencies.find((currency) => currency.code === code);
        if (currency) {
            props.onSelect(currency);
        }
    };
    return (
        <select onChange={onSelect}>
            <option value={""}>-- Select currency --</option>
            {props.currencies.map((currency) => {
                return (
                    <option key={currency.code} value={currency.code}>
                        {currency.code}
                    </option>
                );
            })}
        </select>
    );
};

export { CurrencySelector };
