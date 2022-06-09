import { Grid } from "@mui/material";
import TeamCard from "../components/template/TeamCard";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <TeamCard />
      </Grid>
    </Grid>
  );
}
