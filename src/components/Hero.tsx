import { Box, Heading, Text, Button, Container, VStack, Icon, HStack, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCar, FaTools, FaWrench, FaShieldAlt, FaClock } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionIcon = motion(Icon)

const FeatureItem = ({ icon, text }: { icon: any; text: string }) => (
  <HStack spacing={3} color="white">
    <Icon as={icon} boxSize={5} color="brand.200" />
    <Text fontSize="sm" fontWeight="500">{text}</Text>
  </HStack>
)

export const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box
      bg="gray.900"
      minH="90vh"
      pt={{ base: "120px", md: "140px" }}
      pb={{ base: "20", md: "32" }}
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, brand.900, gray.900)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <Container maxW="1200px" position="relative" zIndex={1}>
        <VStack
          align="flex-start"
          spacing={{ base: 8, md: 10 }}
          maxW={{ base: "100%", md: "800px" }}
        >
          <MotionHeading
            size={{ base: "2xl", md: "4xl" }}
            lineHeight="1.1"
            fontWeight="bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Expert Auto Repair{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, brand.200, brand.400)"
              bgClip="text"
            >
              You Can Trust
            </Text>
          </MotionHeading>

          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            maxW="600px"
            color="gray.300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            With over 30 years of experience, we deliver professional auto collision repair services
            that get you back on the road safely and efficiently.
          </MotionText>

          <HStack spacing={4}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                colorScheme="brand"
                px={8}
                fontSize="md"
                fontWeight="500"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Get Free Estimate
              </Button>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                size="lg"
                variant="outline"
                px={8}
                fontSize="md"
                color="white"
                borderColor="white"
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Our Services
              </Button>
            </MotionBox>
          </HStack>

          {/* Features */}
          {!isMobile && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              mt={16}
            >
              <HStack spacing={8} flexWrap="wrap">
                <FeatureItem icon={FaShieldAlt} text="Lifetime Warranty" />
                <FeatureItem icon={FaClock} text="Fast Turnaround" />
                <FeatureItem icon={FaTools} text="Expert Technicians" />
              </HStack>
            </MotionBox>
          )}
        </VStack>
      </Container>

      {/* Decorative elements */}
      <MotionIcon
        as={FaCar}
        position="absolute"
        top="15%"
        right="5%"
        boxSize={{ base: 12, md: 16 }}
        color="brand.200"
        opacity={0.2}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <MotionIcon
        as={FaTools}
        position="absolute"
        bottom="20%"
        left="10%"
        boxSize={{ base: 10, md: 12 }}
        color="brand.300"
        opacity={0.15}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </Box>
  )
} 