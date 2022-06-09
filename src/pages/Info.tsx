import {
  Grid,
  Stack,
  Alert,
  AlertTitle,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import BaseCard from "../components/template/Card";
import { DataColumns, Transactions } from "../constants/Info";
import { useAppSelector } from "../features/core/hooks";
import { selectCurrentUserData } from "../features/wallet/walletSlice";

const Info = () => {
  const selector = useAppSelector(selectCurrentUserData);
  const [nowWatching, setNowWatching] = useState<any>(null);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 주소">
          <Stack spacing={2}>
            <Typography>{selector.walletAddress}</Typography>
          </Stack>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="토큰 잔액">
          <Stack spacing={2}>
            <Alert severity="info">
              <AlertTitle>
                {!nowWatching ? "{토큰 이름}" : nowWatching[1].symbol} :
                {!nowWatching ? "{잔액}" : nowWatching[1].amount} 주소
                {!nowWatching ? "{주소}" : nowWatching[0]}
              </AlertTitle>
            </Alert>
            <FormControl>
              <FormLabel id="info-hoose-token">전송할 토큰</FormLabel>
              <RadioGroup
                aria-labelledby="info-choose-token"
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
          </Stack>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="토큰 거래 내역">
          <div style={{ height: 430 }}>
            <DataGrid
              columns={DataColumns}
              rows={Transactions}
              rowsPerPageOptions={[25, 50, 100]}
              pageSize={6}
            />
          </div>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Info;
