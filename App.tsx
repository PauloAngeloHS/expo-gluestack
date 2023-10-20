import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Text,
  Heading,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useState } from "react";
export default function App() {
  const [idade, setIdade] = useState("18");
  const [resultado, setResultado] = useState(false);

  return (
    <GluestackUIProvider config={config}>
      <Box
        bg="$blueGray400"
        h={"$full"}
        justifyContent="center"
        alignItems="center"
      >
        <Heading>B A N A N A</Heading>
        <FormControl w="$full" px={"$5"} isRequired={resultado}>
          <FormControlLabel>
            <FormControlLabelText>Age</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField type="number" defaultValue="18" placeholder="Age" />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              You must be atleast 18 to sign up
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorText>
              You need at least 18 to enter
            </FormControlErrorText>
          </FormControlError>
          <Button
            mt={"$2"}
            onPress={() => {
              setResultado(true);
            }}
          >
            <ButtonText>Submit</ButtonText>
          </Button>
        </FormControl>
        <Text>Banana</Text>
      </Box>
    </GluestackUIProvider>
  );
}
