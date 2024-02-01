import { useState } from "react";

import { AmountInput } from "components/ExchangeRate/AmountInput";
import { CurrencySelector } from "components/ExchangeRate/CurrencySelector";
import { Loading } from "components/ui";
import { useExchangeRates } from "store/api/hooks";
import { ExchangeRate } from "store/api/types";
import { convertCurrency } from "utils/exchange.helpers";

const _ExchangeRate = () => {
    const { data, isPending } = useExchangeRates();
    const [currency, setCurrency] = useState<ExchangeRate | null>(null); // [1
    const [amount, setAmount] = useState<number | null>(null);

    if (isPending) {
        return <Loading />;
    }

    const result = currency && amount ? convertCurrency(currency, amount) : null;
    return (
        <>
            <AmountInput onChange={setAmount} />
            <CurrencySelector currencies={data} onSelect={setCurrency} />
            <div>Result: {result?.toFixed(2)}</div>
        </>
    );
};

export { _ExchangeRate as ExchangeRate };
