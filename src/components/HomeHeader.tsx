import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOutIcon } from "lucide-react-native"

export function HomeHeader() {
  return (
    <HStack
      bg="$gray600"
      pt="$16"
      px="$8"
      py="$5"
      gap="$4"
      alignItems="center"
    >
      <UserPhoto source={{ uri: "http://github.com/jpauloads.png" }} alt="Imagem do usuário" w="$16" h="$16"/>

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá!
        </Text>
        <Heading color="$gray100" fontSize="$md">
          João Paulo
        </Heading>
      </VStack>

      <Icon as={LogOutIcon} color="$gray200" size="xl" />
    </HStack>
  );
}
