import { ControllerProps, Controller } from "react-hook-form";
import { TextInput, TextInputProps, Text } from "react-native-paper";

/**
 * Input props properties
 * extend {@link TextInputProps} props
 */
type customInputProps = TextInputProps &
  Pick<ControllerProps, "control" | "defaultValue" | "name" | "rules">;

const CustomInput = ({
  mode = "outlined",
  name,
  control,
  rules = {},
  ...props
}: customInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
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
            {...props}
          />
          {error && <Text children={error.message} />}
        </>
      )}
    />
  );
};

export default CustomInput;
