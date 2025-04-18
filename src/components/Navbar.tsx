import { Box, Flex, Button, Text, Link as ChakraLink, Container, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export const Navbar = () => {
  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar with contact info */}
      <Box bg="black" color="white" py={2}>
        <Container maxW="1200px">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" fontFamily="Montserrat">
              2785 Buford Hwy STE 101, Duluth, GA 30096
            </Text>
            <HStack spacing={4}>
              <Button
                as="a"
                href="tel:+17704950050"
                colorScheme="blue"
                size="sm"
                fontWeight="500"
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                (770) 495-0050
              </Button>
              <Button
                colorScheme="whiteAlpha"
                size="sm"
                fontWeight="500"
                _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                SCHEDULE APPOINTMENT
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main navigation */}
      <Box bg="white" py={4} boxShadow="sm" borderBottom="1px" borderColor="gray.100">
        <Container maxW="1200px">
          <Flex justify="space-between" align="center">
            <ChakraLink
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Montserrat"
              color="gray.800"
              _hover={{ textDecoration: 'none' }}
            >
              Taylor's Collision
            </ChakraLink>
            <HStack spacing={8}>
              {['HOME', 'ABOUT', 'SERVICES', 'CONTACT'].map((item) => (
                <ChakraLink
                  key={item}
                  as={RouterLink}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  fontSize="sm"
                  fontWeight="500"
                  color="gray.600"
                  position="relative"
                  _hover={{
                    color: 'blue.500',
                    textDecoration: 'none',
                  }}
                  sx={{
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: '0',
                      bg: 'blue.500',
                      transition: 'all 0.2s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item}
                </ChakraLink>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>
    </MotionBox>
  )
} 