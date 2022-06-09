import {
  Grid,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BaseCard from "../components/template/Card";
import Button from "../components/core/Button";
import { useState } from "react";

const Verify = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 연결하기">
          <Stack spacing={3}>
            <TextField
              id="create-pass"
              label="지갑 주소"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <br />
          <Button>로그인</Button>
        </BaseCard>
      </Grid>

      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 복구하기">
          <div>
            <TextField id="mnemonic1" label="니모닉 1" variant="outlined" />
            <TextField id="mnemonic2" label="니모닉 2" variant="outlined" />
            <TextField id="mnemonic3" label="니모닉 3" variant="outlined" />
            <TextField id="mnemonic4" label="니모닉 4" variant="outlined" />
            <TextField id="mnemonic5" label="니모닉 5" variant="outlined" />
            <TextField id="mnemonic6" label="니모닉 6" variant="outlined" />
            <TextField id="mnemonic7" label="니모닉 7" variant="outlined" />
            <TextField id="mnemonic8" label="니모닉 8" variant="outlined" />
            <TextField id="mnemonic9" label="니모닉 9" variant="outlined" />
            <TextField id="mnemonic10" label="니모닉 10" variant="outlined" />
            <TextField id="mnemonic11" label="니모닉 11" variant="outlined" />
            <TextField id="mnemonic12" label="니모닉 12" variant="outlined" />
          </div>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Verify;
