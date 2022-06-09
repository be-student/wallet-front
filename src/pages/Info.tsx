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
import BaseCard from "../components/template/Card";
import { DataColumns, Transactions } from "../constants/Info";

const Info = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 주소">
          <Stack spacing={2}>
            <Typography>
              0xfs312a2f3E829C0b614566B3E152e417d14q6EP3 {}
            </Typography>
          </Stack>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="토큰 잔액">
          <Stack spacing={2}>
            <Alert severity="info">
              <AlertTitle>
                토큰 이름 {} : 잔액{}
              </AlertTitle>
            </Alert>
            <FormControl>
              <FormLabel id="info-hoose-token">전송할 토큰</FormLabel>
              <RadioGroup
                aria-labelledby="info-choose-token"
                defaultValue="ethereum"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="ethereum"
                  control={<Radio />}
                  label="Ethereum"
                />
                <FormControlLabel
                  value="customToken1"
                  control={<Radio />}
                  label="Custom Token 1"
                />
                <FormControlLabel
                  value="customToken2"
                  control={<Radio />}
                  label="Custom Token 2"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="토큰 잔액">
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
