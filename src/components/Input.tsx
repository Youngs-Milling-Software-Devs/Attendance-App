import { ControllerProps, Controller } from "react-hook-form";
import { TextInput, TextInputProps, Text } from "react-native-paper";

type customInputProps = TextInputProps &
  Pick<ControllerProps, "control" | "defaultValue" | "name" | "rules">;

const CustomInput = ({
  mode = "outlined",
  name,
  control,
}: customInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            mode={mode}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
          {error && <Text children={error.message} />}
        </>
      )}
    />
  );
};

export default CustomInput;
