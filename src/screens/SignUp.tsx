import { VStack, Image, Center, Text, Heading, ScrollView } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

import Logo from "@assets/CrossLog.svg";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          position="absolute"
          source={BackgroundImg}
          alt="Pessoas Treinando"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo height={140} />
            {/* <LogoSvg /> */}
            <Text my="$4" color="$gray100" fontSize="$sm"></Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Crie sua conta</Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" type="password" secureTextEntry />

            <Button title="Criar e acessar" mb="$2" />
          </Center>

          <Center flex={1} mt="$4" justifyContent="flex-end">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Já possui conta?
            </Text>
            <Button variant="outline" title="Voltar para o Login" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
