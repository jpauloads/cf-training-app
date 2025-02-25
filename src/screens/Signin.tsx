import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

import CrossLog from "@assets/CrossLog.svg";
import LogoSvg from "@assets/logo.svg";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        w="$full"
        h={624}
        defaultSource={BackgroundImg}
        position="absolute"
        source={BackgroundImg}
        alt="Pessoas Treinando"
      />
      <Center my="$24">
        <CrossLog scale={1}/>
        {/* <LogoSvg /> */}
        <Text my="$4" color="$gray100" fontSize="$sm"></Text>
      </Center>

      <Center>
        <Heading color="$gray100"> Acesse a conta</Heading>
      </Center>


    </VStack>
  );
}
