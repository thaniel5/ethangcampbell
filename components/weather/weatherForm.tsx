import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface IFormData {
  zipcode: number;
}

export default function WeatherForm({
  isLoading,
  handleZipcodeChange,
}: {
  isLoading: boolean;
  handleZipcodeChange: (zipcode: number) => void;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = handleSubmit((data) => handleZipcodeChange(data.zipcode));

  return (
    <form onSubmit={onSubmit}>
      <VStack>
        <FormControl isInvalid={errors.zipcode !== undefined}>
          <FormLabel htmlFor={"zipcode"}>Zipcode</FormLabel>
          <Input
            id={"zipcode"}
            defaultValue={"46033"}
            type={"number"}
            {...register("zipcode", {
              required: "This is required",
              minLength: { value: 5, message: "Zipcode must be 5 digits" },
              maxLength: { value: 5, message: "Zipcode must be 5 digits" },
            })}
          />
          {!errors.zipcode ? (
            <FormHelperText>Enter a zipcode for 5 day forecast</FormHelperText>
          ) : (
            <FormErrorMessage>{errors.zipcode.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button type={"submit"} w={"100%"} disabled={isLoading}>
          Submit
        </Button>
      </VStack>
    </form>
  );
}
