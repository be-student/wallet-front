import { Grid, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../components/core/Button";
import BaseCard from "../components/template/Card";
import { useAppSelector, useInput } from "../features/core/hooks";
import { useAppDispatch } from "../features/core/hooks";
import {
  onChangeUserCoinVisible,
  selectAllCoins,
} from "../features/wallet/walletSlice";
const Add = () => {
  const [address, onChangeAddress] = useInput("");
  const [symbol, setSymbol] = useState<string>("");
  const dispatch = useAppDispatch();
  const allCoins = useAppSelector(selectAllCoins);
  useEffect(() => {
    if (allCoins[address]) {
      setSymbol(allCoins[address].symbol);
    } else {
      setSymbol("");
    }
  }, [address, allCoins]);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="커스텀 토큰 추가">
          <Stack spacing={3}>
            <TextField
              id="add-contract-address"
              label="토큰 컨트랙트 주소"
              multiline
              rows={4}
              value={address}
              onChange={onChangeAddress}
              variant="outlined"
            />
            <TextField
              id="add-token-symbol"
              label="토큰 기호(자동 입력)"
              variant="outlined"
              value={symbol}
            />
          </Stack>
          <br />
          <Button
            onClick={() => {
              dispatch(onChangeUserCoinVisible(address));
            }}
          >
            추가하기
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Add;
