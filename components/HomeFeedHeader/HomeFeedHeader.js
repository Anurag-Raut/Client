import { Box, Group, Text } from "@mantine/core";
import { SearchIcon } from "../../icons/StemstrIcon";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function HomeFeedHeader() {
  return (
    <Box
      component={Group}
      position="apart"
      sx={(theme) => ({
        marginBottom: theme.spacing.md,
      })}
    >
      <Text
        sx={(theme) => ({
          color: theme.white,
          fontWeight: 700,
          fontSize: 24,
        })}
        lh="normal"
      >
        Stemstr
      </Text>
      <Group spacing={20}>
        <ProfileLink />
      </Group>
    </Box>
  );
}
