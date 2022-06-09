import React, { FC } from "react";

import { Card, CardContent, Box, Typography } from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
}
const BaseCard: FC<Props> = (props) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <Typography variant="h4">{props.title}</Typography>
      </Box>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default BaseCard;
