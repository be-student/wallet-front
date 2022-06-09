import { Grid, Stack, TextField } from "@mui/material";
import Button from "../components/core/Button";
import BaseCard from "../components/template/Card";

const Add = () => {
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
              variant="outlined"
            />
            <TextField
              id="add-token-symbol"
              label="토큰 기호"
              variant="outlined"
            />
          </Stack>
          <br />
          <Button>추가하기</Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Add;
