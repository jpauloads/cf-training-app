import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  isReadonly?: boolean;
}

export function Input({ isReadonly = false, ...rest }: Props) {
  return (
    <GluestackInput
    h="$14"
    borderRadius="$md"
    borderWidth="$0"
    $focus={{ borderWidth: 1, borderColor: "$green500" }}
    isReadOnly={isReadonly}
    opacity={isReadonly ? 0.5 : 1}
    >
      <InputField
        px="$4"
        bg="$gray700"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GluestackInput>
  );
}
