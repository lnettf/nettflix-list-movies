import { Box, Typography, Paper } from "@mui/material";
import { mappingScore } from "../../utils";

export const PopularItem = ({ title, score }) => {
  const formattedScore = mappingScore(score);

  return (
    <Paper
      elevation={2}
      sx={{
        width: 160,
        height: 220,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        src="https://placehold.co/120x100"
        alt={`Poster de ${title}`}
        sx={{
          width: 120,
          height: 100,
          objectFit: "cover",
          borderRadius: 1,
        }}
      />

      <Typography
        variant="subtitle2"
        align="center"
        sx={{
          mt: 1,
          mb: 0.5,
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          lineHeight: "1.2rem",
          maxHeight: "2.4rem",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: "0.85rem" }}
      >
        {formattedScore}/10
      </Typography>
    </Paper>
  );
};
