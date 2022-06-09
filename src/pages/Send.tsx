import {
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
} from "@mui/material";
import Button from "../components/core/Button";
import BaseCard from "../components/template/Card";

const Send = () => {
  return (
    <Grid item xs={12} lg={12}>
      <BaseCard title="토큰 전송">
        <Stack spacing={3}>
          <FormControl>
            <FormLabel id="send-hoose-token">전송할 토큰</FormLabel>
            <RadioGroup
              aria-labelledby="send-choose-token"
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
          <TextField
            id="address-to"
            label="전송할 주소"
            multiline
            rows={4}
            variant="outlined"
          />
          <TextField
            id="amount-to-send"
            label="전송할 수량"
            variant="outlined"
          />
        </Stack>
        <br />
        <Button
          onClick={() => {
            console.log("click");
          }}
        >
          전송하기
        </Button>
      </BaseCard>
    </Grid>
  );
};

export default Send;
