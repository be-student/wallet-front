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
import { useAppDispatch, useInput } from "../features/core/hooks";
import {
  onReconnectUserWithKey,
  onReconnectUserWithMnemonic,
} from "../features/wallet/walletSlice";

const Verify = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const dispatch = useAppDispatch();
  const [mnemonic1, setMnemonic1] = useInput("");
  const [mnemonic2, setMnemonic2] = useInput("");
  const [mnemonic3, setMnemonic3] = useInput("");
  const [mnemonic4, setMnemonic4] = useInput("");
  const [mnemonic5, setMnemonic5] = useInput("");
  const [mnemonic6, setMnemonic6] = useInput("");
  const [mnemonic7, setMnemonic7] = useInput("");
  const [mnemonic8, setMnemonic8] = useInput("");
  const [mnemonic9, setMnemonic9] = useInput("");
  const [mnemonic10, setMnemonic10] = useInput("");
  const [mnemonic11, setMnemonic11] = useInput("");
  const [mnemonic12, setMnemonic12] = useInput("");
  const [privateKey, onChangePrivateKey] = useInput("");
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 연결하기">
          <Stack spacing={3}>
            <TextField
              id="create-pass"
              label="private key"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={privateKey}
              onChange={onChangePrivateKey}
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
          <Button
            onClick={() => {
              dispatch(onReconnectUserWithKey(privateKey));
            }}
          >
            로그인
          </Button>
        </BaseCard>
      </Grid>

      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 복구하기">
          <div style={{ marginBottom: "1.5rem" }}>
            <TextField
              value={mnemonic1}
              onChange={setMnemonic1}
              id="mnemonic1"
              label="니모닉 1"
              variant="outlined"
            />
            <TextField
              value={mnemonic2}
              onChange={setMnemonic2}
              id="mnemonic2"
              label="니모닉 2"
              variant="outlined"
            />
            <TextField
              value={mnemonic3}
              onChange={setMnemonic3}
              id="mnemonic3"
              label="니모닉 3"
              variant="outlined"
            />
            <TextField
              value={mnemonic4}
              onChange={setMnemonic4}
              id="mnemonic4"
              label="니모닉 4"
              variant="outlined"
            />
            <TextField
              value={mnemonic5}
              onChange={setMnemonic5}
              id="mnemonic5"
              label="니모닉 5"
              variant="outlined"
            />
            <TextField
              value={mnemonic6}
              onChange={setMnemonic6}
              id="mnemonic6"
              label="니모닉 6"
              variant="outlined"
            />
            <TextField
              value={mnemonic7}
              onChange={setMnemonic7}
              id="mnemonic7"
              label="니모닉 7"
              variant="outlined"
            />
            <TextField
              value={mnemonic8}
              onChange={setMnemonic8}
              id="mnemonic8"
              label="니모닉 8"
              variant="outlined"
            />
            <TextField
              value={mnemonic9}
              onChange={setMnemonic9}
              id="mnemonic9"
              label="니모닉 9"
              variant="outlined"
            />
            <TextField
              value={mnemonic10}
              onChange={setMnemonic10}
              id="mnemonic10"
              label="니모닉 10"
              variant="outlined"
            />
            <TextField
              value={mnemonic11}
              onChange={setMnemonic11}
              id="mnemonic11"
              label="니모닉 11"
              variant="outlined"
            />
            <TextField
              value={mnemonic12}
              onChange={setMnemonic12}
              id="mnemonic12"
              label="니모닉 12"
              variant="outlined"
            />
          </div>
          <Button
            onClick={() => {
              dispatch(
                onReconnectUserWithMnemonic([
                  mnemonic1,
                  mnemonic2,
                  mnemonic3,
                  mnemonic4,
                  mnemonic5,
                  mnemonic6,
                  mnemonic7,
                  mnemonic8,
                  mnemonic9,
                  mnemonic10,
                  mnemonic11,
                  mnemonic12,
                ])
              );
            }}
          >
            로그인
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Verify;
