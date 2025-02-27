import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
        >
          Metcon
        </Heading>

        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          Push Ups
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        10:00
      </Text>
    </HStack>
  );
}
