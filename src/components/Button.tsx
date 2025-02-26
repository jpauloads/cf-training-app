import { ComponentProps } from "react";
import {
  Button as GluestackButton,
  Text,
  ButtonSpinner,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  isLoading = false,
  variant = "solid",
  ...rest
}: Props) {
  return (
    <GluestackButton
      w="$full"
      h="$14"
      bg={variant === "solid" ? "$green700" : "$transparent"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-backgroundColor={variant === "outline" ? "$gray500" : "$green500"}
      $active-opacity={isLoading ? 0.5 : 1}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text
          color={variant === "outline" ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
