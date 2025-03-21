import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil"></ScreenHeader>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: "https://github.com/jpauloads.png" }}
            alt="Imagem do usuário"
            size="xl"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              /* Handle press action */
            }}
          >
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              textAlign="center"
              mt="$2"
              mb="$8"
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>
          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input
              isReadonly={true}
              keyboardType="email-address"
              value="joao@email.com"
              bg="$gray600"
            />
          </Center>
          <Heading
            alignSelf="flex-start"
            mt="$12"
            mb="$2"
            fontSize="$md"
            color="$gray200"
            fontFamily="$heading"
          >
            Alterar Senha
          </Heading>

          <Center w="$full" gap="$4">
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Button
              title="Atualizar"
              onPress={() => {
                /* Handle password change */
              }}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
