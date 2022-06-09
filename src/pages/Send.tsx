import {
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useState } from "react";
import Button from "../components/core/Button";
import BaseCard from "../components/template/Card";
import {
  useAppDispatch,
  useAppSelector,
  useInput,
} from "../features/core/hooks";
import {
  onSendToken,
  selectCurrentUserData,
} from "../features/wallet/walletSlice";
const Send = () => {
  const selector = useAppSelector(selectCurrentUserData);
  const dispatch = useAppDispatch();
  const [nowWatching, setNowWatching] = useState<any>(null);
  const [address, onChangeAddress] = useInput("");
  const [amount, onChangeAmount] = useInput("");
  return (
    <Grid item xs={12} lg={12}>
      <BaseCard title="토큰 전송">
        <Stack spacing={3}>
          <Alert severity="info">
            <AlertTitle>
              {!nowWatching ? "{토큰 이름}" : nowWatching[1].symbol} :
              {!nowWatching ? "{잔액}" : nowWatching[1].amount} 주소
              {!nowWatching ? "{주소}" : nowWatching[0]}
            </AlertTitle>
          </Alert>
          <FormControl>
            <FormLabel id="send-hoose-token">전송할 토큰</FormLabel>
            <RadioGroup
              aria-labelledby="send-choose-token"
              defaultValue="ethereum"
              name="radio-buttons-group"
            >
              {Object.entries(selector.coins).map((coin) => {
                return (
                  <FormControlLabel
                    value={coin[0]}
                    control={<Radio />}
                    label={coin[1].symbol}
                    onClick={() => {
                      setNowWatching(coin);
                    }}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <TextField
            id="address-to"
            label="전송할 주소"
            multiline
            rows={4}
            variant="outlined"
            value={address}
            onChange={onChangeAddress}
          />
          <TextField
            id="amount-to-send"
            label="전송할 수량"
            variant="outlined"
            type="number"
            value={amount}
            onChange={onChangeAmount}
          />
        </Stack>
        <br />
        <Button
          onClick={() => {
            dispatch(
              onSendToken({
                coinAddress: nowWatching[0],
                walletAddress: address,
                amount: parseFloat(amount),
              })
            );
          }}
        >
          전송하기
        </Button>
      </BaseCard>
    </Grid>
  );
};

export default Send;
