import { Box, Chip } from "@mantine/core";
import useStyles from "./GlobalFeedChips.styles";

export default function GlobalFeedChips() {
  const { classes } = useStyles();
  const chipNames = [
    "🔥 Trending now",
    "#hiphop",
    "#soul",
    "#indie",
    "#808",
    "#synthpad",
  ];

  return (
    <Box className={classes.box}>
      <Chip.Group
        defaultValue="0"
        position="left"
        className={classes.chipGroup}
      >
        {chipNames.map((chipName, index) => (
          <Chip
            key={index}
            value={`${index}`}
            radius="md"
            classNames={{
              root: classes.chip,
              iconWrapper: classes.iconWrapper,
              label: classes.label,
            }}
          >
            {chipName}
          </Chip>
        ))}
      </Chip.Group>
    </Box>
  );
}
