import { useState } from "react";

import { AmountInput } from "components/ExchangeRate/AmountInput";
import { CurrencySelector } from "components/ExchangeRate/CurrencySelector";
import { Loading } from "components/ui";
import { Typography } from "components/ui/Typography";
import { useExchangeRates } from "store/api/hooks";
import { ExchangeRate } from "store/api/types";
import { convertCurrency } from "utils/exchange.helpers";

// FIXME: prevent re-rendering of CurrencySelector on state change
const _ExchangeRate = () => {
    const { data, isPending } = useExchangeRates();
    const [currency, setCurrency] = useState<ExchangeRate | null>(null); // [1
    const [amount, setAmount] = useState<number | null>(null);

    if (isPending) {
        return <Loading />;
    }

    const result = currency && amount ? convertCurrency(currency, amount) : null;
    return (
        <Typography.Centered>
            <Typography.Prompt>
                Exchange
                <AmountInput onChange={setAmount} /> CZK
            </Typography.Prompt>
            <Typography.Small>for</Typography.Small>

            <div>
                {!currency && <Typography.Hint>Select currency first 👉</Typography.Hint>}
                {currency && <Typography.Prompt>{result?.toFixed(2)}</Typography.Prompt>}
                <CurrencySelector currencies={data} onSelect={setCurrency} />
            </div>
        </Typography.Centered>
    );
};

export { _ExchangeRate as ExchangeRate };
