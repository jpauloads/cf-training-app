import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
} from "@gluestack-ui/themed";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepsSvg from "@assets/repetitions.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} size="xl" color="$green500" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            Push Up
          </Heading>
          <HStack>
            <BodySvg />
            <Text color="$gray200" textTransform="capitalize" ml="$1">
              Push Up
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p={"$8"}>
          <Image
            source={{
              uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERUTEBIVFhUWFhcXGRgXGBUWGRUbFx0XGBgYGhYYHSgiGholHR0aIjEhJSkrLi4uHx8zODMtNygtLisBCgoKDg0OGhAQGC8lIB0yLTctNzcxOC01LTcrLy03NzcrLS0rLS0tNy0tLS02Ly0tLTUvLSsrKy0tKy0tLS0tLf/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAgMEAQj/xABBEAACAQIDBQUFBQYFBAMAAAABAgADEQQSIQUGMUFREyJhcYEHMpGhsSNCcoLBFFKSstHwFVNiouFDk8LxFiQz/8QAGQEBAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAIxEBAAICAgIBBQEAAAAAAAAAAAECAwQREjFBISIyUWGhE//aAAwDAQACEQMRAD8A3CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIvAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEhd7N5aWBoGrVuSdEQe9UbjYdPE8pNTDd8sWcdj6hBvTok0afTuGzt6tf0A6QK9t/fXaGMcmrWejS5UqTNTUebizMfEn0Ei8LjCG7laorjn2jqfiDeTW0tnnIVt01lUFL7TvcriBqO5XtNqUnFLaD56RIAqn36fTOR76ePEePLZUcEAgggi4I1BB4GflCtTBHd49OnDSbJ7E94GqUamDqm7Yexpk86bXGX8raeREDTYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgInwmRO0N5cLRF2rIx/dQh2P5V4eZsIEvOjE4ynT/AP0qIl/3mVfqZmu8XtEqVCKeDU0xfvO1i/koFwvnqfKQibMatUGYliRcsxLMfUwNhp7ToN7takbdHQ/Qzidr4f8Az6X/AHE/rKlsnc6moBKC/kJN/wCA08tgoufAepgeDfHfSjh8NUOHqJVrlSEVCGCk6BmI0AHG3PhK5sHZFGnh6dNkJquubOQTe3vMW8+XiPOd+N2MrV1QAWVrn0nHD48qex0PZDswwvcqOGYddB8IHnxOBVzky38tbSIo7iF6xvopv6enwl82fRBXMBrzPOSGEr0m+8AfMawMQ3o3NxGE7zC6G9nGo8j0M9fscqOu11XWxo1VbpbusPmBNe27UU0yj2ZSNb63kT7O9gU0qVcSi2zXpoTqSLgub9LgD0MC9xEQEREBERAREQEREBERAREQEREBERAREQEREBBiVbfnazU0WhRJFStfvA2KILZiPEkgD16QIfe3bHb1Goq32NPutY6VHHG5HELwt1v4TPEpNWqlaVxTBszDTPbkPCevFIaVJcODZ6lXIOtiSWPw1+EvewNgKqABeAECJ2Tu+gW2UAD6yawWAFM/Se9sCVHDS5t/f98pGYiuVNidIE+u1O7l5g6z7g8WxRqh0W1hfTTr/fhKZSx/2jZj3SOPIWvJHHY6nWoqha5cgAL7qINWLHgDl+cCQwZADPzbX0N7SibLxmXG4inU5tmHkf8Am8nxthAhYsB2jsUB0si2QHyNi3rKBvjtNaT0sUmc9/IWCkKQRcjN1sLjraBqWxcdkcgHQz7jd3qeKr5jWampHeSmFXOepYjjITYVYVaIrIwZCL3AzG3lJ/YfaVm7TD5eyHdJbMAx0NhpmDeJHxgfNm7oNnKviar0VAADEFyTqVz2uFAtrx1OukuGFw600VEUKqiwA5CccHRKrY2vck26kk/8TvgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiU3f7f+js4BAva4hhdaQNgo5PUb7q34czy4EgLlPmcdRPy1t/fPH4xj2+JcKf+nSJpUx4WU3P5iTPm7+y85apUzlFV24tZmUaAkeJED9TzLt9toBdosx72SnTUDncgtb5zO8Zj6tSn2bdpQpjXKj1AGI/0g6eoM927+A7oGpLdSSbc9TOWXJFI5dsOGcluIeztjVxtKrUIuHW9uAvpYeAmybKYBCRx4eusyurssKCeFpYN3tvlnpox1zqG8cuv6SbUz95mFu/rf51raGhYil9nYchM43orZDa+pNv6mX7HbQUISDymP7bxbYmuwp6hTlzch1Moz361R69O9/Hhw2PWyu11zU20Kcb+PnLbtB6bYapkfXsyFDWBp9bEC/8A6EhsNTp0lC63HE/pOqo/b1aeHpjV3GbwUasfhJcGe3br5hfs61evfxMJJN0TUpU6z6lwCyudKaL7qhfvaf3ykcpw4R8MyLWFRjnNQXF+WXoRYWI1Fpa99dsrTUUkI0A8L+Gkz3BVRUrhE5EMx/d6ep1nTLnmea19OODWrHW9/fpLYDYFHC0z2SkKdSC7kN1FidDLvuE9jXQcLo46d4EH6CVzatcdnlB6ST3I2kq42phrd40UYH8BsV/3Xmune089p5bb+OkdZrHC/wAREueaREQEREBERAREQEREBERAREQETjUqBRdiAOpNhPlKsraqwbyIP0gc5wrVlRSzsFUC5JIAA6knhPFtja9LDoWqMLgaICMznkAP15TJ9vbeq4l+8c5v3UF+zp+n3m8Tr5cIF1297ScDh0Zg7VGAOUIrZWa2gzkAWvzF5+fNoY+piKtSvXbNUqMWY8vADoALADoJ7N5qbivkqEllAvrwLC9rcBpaRoWBwprczdtgbMVNk0CB71LP+Z+8T8/lMQRLTYtzNvpU2clBn76Z0C24izMp4cLaekCB2/s8LSzAe8yoPqfjYyR2dgOwxFINwZL+pnopqK9fB0eIVXrN6WVf/KTe9FICvRtxVf1kO3H09pelo/d0j3y+7WwfdJtxlNU9hWpNzJYnwBByD4XP5hL/AItiafe0AFyeg6zP98xbswvFiTpy04D5Ca6eLi03Z3M8zSMb24rbdTE3pUXyqNGfny0UdfpOeF2bTSnlp6FSfM+ZkDhtgVLq2HqGloM2chgxFrkKPd18Z3fs9cP2fbUjzLXbu+Ytz/SZ2MOXJb9M6uxixU+PLs2hjyqm+lp7Nkv+yJ2jG+JqDUcexXkv4uZnbsv2eYvEMKrYhaaa5C1MlieTKlxlHQk36cjJXZvsnbNfFYwut+FNMpP5nLW+EU170j48yX28eS31eI/qu7NwFbH4ns6ZPG9SpqRTXqercgOfoZ6tlbslsOKiNaotwW/eseLDp9NZreyNlUcNTFKggRR04k9WJ1J8TKlucB2LIeTOp9GIMpx4K1rxPtJl2bXvFo+OFNxFGpTINQ3IF7dLSR9n+Fb9upVXvmqLWJ4+6VGX6fOWbeTY61aKECzBkBPVWIDCdm7FNTjahX/pUVH8ZP6LM0xVpHENcme2S3NvwuMRE6uBERAREQEREBERAREQEREBK7vNthkIoUGAqEAs3Hs1PC1/vH5DzE8e3t/aNElKSNWqcABZVv4sdbeIBlQ2XVrk1KtZ0L1GzMbEa8OZ4AWA8AIE7W3Rp1x/9l2q8/tHZvkTK5t3chMKO1wlZ6L8uzYgn4SUXadQ6JUvyzDJYebFbTuxdIPT7zszkWLZtfIaCw8hAzfZ2BrZmTtXd3YmpUdixF/uhuNzz5y87K2WKS90Le3FtB8JXDRqmsyIezUEAACxPjflJ7C7ITKM/ePVtfrAz/e6gwxlUvxYg/IDlIe0uu+WwwE7SnxXiOq9QPCUhngci09uxtrfs9VX5Ai48Lzw4TD1Kz5KK3PMk2VL82bgolmbcdOyN8VTapyswVfK1r+t/SBe9xUFTHVKiEGmKSZCOFmZ2tJXGVxWxjW1CkKPTj85FezXY9TD4Fslu1qMdWOijhe4vwHTmZJU6Aw1OyktXq373DIv3mHjyB9eUmz4rZOKx49rdbNXFE2nzxxCN3p239rTw9MjKHvVI5lblaYPgQCfGw5SJp4fE4rFdphsOaqUu4GOUIDbXVtCfDlpOobKqYh0o4ewqFzqeCLc5nPgBy5mw5zY9jbMTDUEo0h3UFvEniWPiTcmUVrFY4hHa02nmVAT2e4mrZq1enRN9UpqW08WuAfL5mWvYG6GHw3et2lQ2u7gaW/dXgv18ZYYmWHy0+xEBKLs6iaWLxNLl2pceVXv38rkj0MvUz7fTGOm0KfZLdloAsObhncDXqtjb8RgSu0cVloueS/oZDezKuzYnFM3CotNl8lLL+sUcScaGwqXGYgVW/cFwxAPNiNPC5Mnv8OTD4rDdkLAhqZ/CR/UCBZ4iICIiAiIgIiICIiAiIgJ49skjD1SvHs3t8DPZOFZbqQeYI+MDKquyKi0i6Uyxa5zqMxF/DwkBhxUqVVo5XdmLWz/AGaXQKWvp0ZdNeM1/YKWojwUfSQGzqIeti1f91K1M8wyh1ZgfLID4GBD1Nj4ikaS1Cmaq2VAtyL2JsL2A0B1Mk6O5dY6mrlPUnNb8qgD4kzz+0faJp0qFZAS1EpWAGhPZsGK+oFvWX7B4lKtNKlMhkdQ6kcwwuD8IFJ2judiGIam9IsBoTmW/mLHT1kdW2DtFCQKKMOqODf8rWmmxAyI7MxOb7XC1mP4Lj5d2dFf2X1MUS/ZrhfAtq35FBC/3pNkiBnWD9n1WlSFKm9FEHEAPdjzLORcnxnyvutVw9OpVIw6qiM5IzEnKCf3dT5maNKp7S8TlwLIDY1WVPTVm+S29YEbsXFE0adKmLtkBYnggIvr1J6SSwezgapOp0XU8wLg6chcGefd3DZKLORqbHzJsFH0E7UxXYPQD63psp6+/qfK7A+kDq3ZwIp7RxVhwpUyPAMzX/l+Uucru7K5quJrdWSnfrkBY/N5YoCIiAiIgJSd6qQXaFGoeFSg6X6GmysP5z8JdpWfaBgi+ENRB36BNQeVirj4G/oIEF7NwqqzH77O5P4iT/QSx4isHxFE395+6P8ASoZifW3wlG3Vqns0ue6wuTyCgXY+VvrLDsSq1baKu3BKT2HTNlAuORseHQiBeIiICIiAiIgIiICIiAiIgIiIFVrbVTC9x1qNYEHKpI/vLdvQysf/ACOmuIVslRNKisWFxkZddR0fsz+Eg9baXXwqP76hrdReeOpsKgTmCFW11VmB1AU8+gA8gIGc7wY4Y6ihwtN2AVqbi3eRtNCnE214cQQRfS9k9lGMqNguzqJYUWKo2oDqe9wbVSCSLeXWWr/DaWVV7MWUBR1AAta/Ei076VNVAVQABwAAAHkBwgc4iICIiAlJ9p+tOkvjUPwUD9ZdpUfaFSutD8VQf7Cf0gSeCpi1NOhznyQaf7isrG+VY56Ipi7FHCqObPlCj+IiT2Hr5e1Y8lRAfFyf+DPDsHC/tGNau3uYcZE6Go1ix/Ktv4vCBZdj4HsaK073I1Y9WJux+JM9sRAREQEREBOLqCCCLgixHUGcogZjhMEaQagFutFqi669wODTFuZYBbDnrJ3cFC2ao2rFFJJ5tUJdvllE7sbgT22KdbAEpqTYD7NQT52+Gsh91d68FRarSOKpkL2YBF21UFTqoIIFhc8oGhiJ0YPF06qB6Tq6ngykEH1E74CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAkBvZTzCiP9b/AMjD9ZPys734+nSeg1UnKM7WUEkkZLWAgdO8ddaVNvxM38KBR/Nf0kzu3s/sMMiN79sz/jfvN8CbekzHHb0tUxCsuFqNRpuHZWZAzBQMgUC41IBNzewItrLVhvaVQJTtaFekj6CqQhp35rcNcH0gXeJ14eurqHRgysLgg3BB5gzsgIiICIiAiIgZl7WtnMrU8U2ZqCo3arYsisveR2Tgbi4uegHOcN3dmmvSvWwL0jYXQBAVvqpAJuLix8LzTnQEEEAgixB1BB4gjpOvC4VKYyothx5nw4nWBQTsevQcvh6rUm5h1KhvMrem3nYnxkvs3eTEqLYvDXX/ADaBDj1pAlv4b+Uttp11MOre8oPmBf4wPtGqGUMpuCLic58VbaCfYCIiAiIgIiICIiAiIgIiICIiAiIgIiICQG92xWxCKaYBemTYHTMGGoueegPpJ+IGWVdlVaYBpladQXuKiFgfOxB9QZX8bQclhk43L4eoc1Krfi1JiNDbp6jnNzkfW2LQYkmmNeI5db25HytAwNcRj8OhGzcVVpU81+zYg9kx+6wcEAE8G4eY1G27jpiRg6ZxlXtKrKGY6cSNRoBz+k5jdahmzZQTwuQpuONmuO96yXwuHWmiogsqKFAGlgBYDSB2xEQEREBERAREQEREBERAREQERED/2Q==",
            }}
            alt="Exercício"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
            w="$full"
            h="$80"
          />

          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 Séries
                </Text>
              </HStack>

              <HStack>
                <RepsSvg />
                <Text color="$gray200" ml="$2">
                  10 reps
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
