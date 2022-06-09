import {
  Grid,
  Stack,
  TextField,
  Chip,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BaseCard from "../components/template/Card";
import Button from "../components/core/Button";
import { useEffect, useRef, useState } from "react";

const Create = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerify, setShowPasswordVerify] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowPasswordVerify = () =>
    setShowPasswordVerify(!showPasswordVerify);
  const handleMouseDownPasswordVerify = () =>
    setShowPasswordVerify(!showPasswordVerify);
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const ref = useRef<any>();
  ref.current = [
    { key: "1", label: "wolf" },
    { key: "2", label: "juice" },
    { key: "3", label: "proud" },
    { key: "4", label: "gown" },
    { key: "5", label: "wool" },
    { key: "6", label: "unfair" },
    { key: "7", label: "wall" },
    { key: "8", label: "cliff" },
    { key: "9", label: "insect" },
    { key: "10", label: "more" },
    { key: "11", label: "detail" },
    { key: "12", label: "hub" },
  ];
  useEffect(() => {
    ref.current = [...shuffle(ref.current)];
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 만들기">
          {/* <Stack spacing={3}>
            <TextField
              id="create-pass"
              label="비밀번호"
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
            <TextField
              id="create-pass-verify"
              label="비밀번호 확인"
              variant="outlined"
              type={showPasswordVerify ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordVerify}
                      onMouseDown={handleMouseDownPasswordVerify}
                    >
                      {showPasswordVerify ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }} */}
          {/* />
          </Stack> */}
          <br />

          <Button>지갑 생성하기</Button>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 주소">
          <Typography>0xfs312a2f3E829C0b614566B3E152e417d14q6EP3</Typography>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="니모닉">
          <Stack spacing={3} direction="row">
            {ref.current.map((data, index) => (
              <Chip
                key={data.key + index}
                label={data.label}
                size="medium"
                variant="outlined"
              />
            ))}
          </Stack>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Create;
