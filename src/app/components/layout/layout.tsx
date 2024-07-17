import { Box,  ChakraProvider,  Flex} from '@chakra-ui/react'
import Menu from "../menu/menu";
import { colors } from '../../utils/colors';
import { ReactElement } from 'react';


export default function Layout(props:{children: any}) {
  return (
    <ChakraProvider>
      <Flex h="100vh">
        <Box w="15%" height="100%" bg={colors.beige} p={4} color={colors.darkBlue}>
          <Menu></Menu>
        </Box>
        <Box w="85%" bg={colors.brown} p={4} color={colors.lightBlue}>
          {props.children}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}