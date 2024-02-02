import { useState } from "react";
import styled from "styled-components";

import { AmountInput } from "components/ExchangeRate/AmountInput";
import { CurrencySelector } from "components/ExchangeRate/CurrencySelector";
import { PromptLayout } from "components/ExchangeRate/PromptLayout";
import { Loading } from "components/ui";
import { Typography } from "components/ui/Typography";
import { ExchangeIcon } from "components/ui/icons";
import { useExchangeRates } from "store/api/hooks";
import { ExchangeRate } from "store/api/types";
import { convertCurrency } from "utils/exchange.helpers";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1.4rem;
    margin-bottom: 2rem;

    small {
        display: block;
        margin: 0.5rem 0;
    }
`;

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
        <Wrapper>
            <ExchangeIcon />
            <Typography.Centered>
                <Typography.Prompt>
                    <PromptLayout>
                        <AmountInput onChange={setAmount} />
                        <span>CZK</span>
                    </PromptLayout>
                </Typography.Prompt>
                <Typography.Small>exchanges for</Typography.Small>
                <PromptLayout>
                    {currency && <Typography.Prompt>{result?.toFixed(2)}</Typography.Prompt>}
                    <CurrencySelector currencies={data} onSelect={setCurrency} />
                </PromptLayout>
            </Typography.Centered>
        </Wrapper>
    );
};

export { _ExchangeRate as ExchangeRate };
