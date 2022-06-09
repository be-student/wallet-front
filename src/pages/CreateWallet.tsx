import { Grid, Stack, Chip, Typography } from "@mui/material";
import BaseCard from "../components/template/Card";
import Button from "../components/core/Button";
import { useRef, useState } from "react";
import { shuffle } from "../features/utilities/shuffle";
import { useAppDispatch } from "../features/core/hooks";
import { createUser } from "../features/wallet/walletSlice";
import { random } from "../features/utilities/random";

const CreateWallet = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<any>();
  const [address, setAddress] = useState<string>(random());
  const [privateKey, setPrivateKey] = useState<string>(random());
  ref.current = [
    "wolf",
    "juice",
    "proud",
    "gown",
    "wool",
    "unfair",
    "wall",
    "cliff",
    "insect",
    "more",
    "detail",
    "hub",
  ];
  ref.current = [...shuffle(ref.current)];
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 만들기">
          <Button
            onClick={() => {
              dispatch(
                createUser({
                  privateKey,
                  walletAddress: address,
                  nimonics: ref.current,
                  coins: {},
                  visible: true,
                })
              );
              setAddress(random());
              setPrivateKey(random());
              ref.current = [...shuffle(ref.current)];
            }}
          >
            지갑 생성하기
          </Button>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 주소">
          <Typography>{address}</Typography>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="니모닉">
          <Stack spacing={3} direction="row">
            {ref.current.map((data: string) => (
              <Chip key={data} label={data} size="medium" variant="outlined" />
            ))}
          </Stack>
        </BaseCard>
      </Grid>
      <Grid item xs={12} lg={12}>
        <BaseCard title="지갑 private key">
          <Typography>{privateKey}</Typography>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default CreateWallet;
