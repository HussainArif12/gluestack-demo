import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Box
        width="100%"
        height="50%"
        justifyContent="center"
        alignItems="center"
        bgColor="black"
      >
        <Text color="white">This text was styled using Gluestack</Text>
      </Box>
      <Box
        width="100%"
        height={"50%"}
        justifyContent="center"
        alignItems="center"
        bgColor="pink"
      >
        <Text color="blue">This second block of text was styled as well</Text>
      </Box>
    </GluestackUIProvider>
  );
}
