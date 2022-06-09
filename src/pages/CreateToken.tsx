import { Grid, Stack, TextField, Typography } from "@mui/material";
import Button from "../components/core/Button";
import BaseCard from "../components/template/Card";
import { useAppDispatch, useInput } from "../features/core/hooks";
import { random } from "../features/utilities/random";
import { onCreateToken } from "../features/wallet/walletSlice";

const CreateToken = () => {
  const [name, onChangeName] = useInput("");
  const [symbol, onChangeSymbol] = useInput("");
  const [amount, onChangeAmount] = useInput("");
  const address: string = random();
  const dispatch = useAppDispatch();
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="커스텀 토큰 추가">
          <Stack spacing={3}>
            <TextField
              id="add-token-symbol"
              label="토큰 이름"
              variant="outlined"
              value={name}
              onChange={onChangeName}
            />
            <TextField
              id="add-token-symbol"
              label="토큰 기호"
              variant="outlined"
              value={symbol}
              onChange={onChangeSymbol}
            />
            <TextField
              id="add-token-symbol"
              label="토큰 발행 양"
              variant="outlined"
              type="number"
              value={amount}
              onChange={onChangeAmount}
            />
          </Stack>
          <br />
          <Button
            onClick={() => {
              if (name === "") {
                alert("please enter name");
                return;
              }
              if (symbol === "") {
                alert("please enter symbol");
                return;
              }
              if (amount === "") {
                alert("please enter amount");
                return;
              }
              dispatch(
                onCreateToken({
                  address,
                  name,
                  symbol,
                  amount: parseFloat(amount),
                })
              );
              parseFloat(amount);
              alert("add success");
            }}
          >
            추가하기
          </Button>
        </BaseCard>
        <Grid item xs={12} lg={12}>
          <BaseCard title="토큰 컨트랙트 주소">
            <Typography>{address}</Typography>
          </BaseCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateToken;
