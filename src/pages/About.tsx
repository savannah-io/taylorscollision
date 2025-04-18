import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '30+' },
    { label: 'Vehicles Repaired', value: '15,000+' },
    { label: 'Insurance Partners', value: '50+' },
    { label: 'Team Members', value: '20+' },
  ]

  return (
    <Box pt="100px">
      {/* Hero Section */}
      <Box bg="gray.900" color="white" py={20}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading size="2xl" mb={6}>About Taylor's Collision</Heading>
              <Text fontSize="lg" color="gray.300" lineHeight="tall">
                Since 1990, Taylor's Collision has been the trusted name in auto collision repair
                in Duluth, GA. Founded by Max Permiakev, our shop has grown from a small local
                business to one of the most respected collision repair centers in the area.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/shop-front.jpg"
                alt="Taylor's Collision Shop Front"
                borderRadius="lg"
                shadow="2xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                textAlign="center"
              >
                <Text fontSize="4xl" fontWeight="bold" color="red.500">
                  {stat.value}
                </Text>
                <Text color="gray.600">{stat.label}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={16}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl">Our Mission</Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="tall">
                Our mission is to provide the highest quality auto collision repair services
                while ensuring complete customer satisfaction. We believe in transparency,
                integrity, and using the latest technology to restore vehicles to their
                pre-accident condition.
              </Text>
              <Text color="gray.600" fontSize="lg" lineHeight="tall">
                We invest in continuous training for our technicians and use state-of-the-art
                equipment to deliver the best possible results for our customers.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing={6}>
              <Heading size="xl">Why Choose Us</Heading>
              <SimpleGrid columns={1} spacing={4}>
                {[
                  'I-CAR Gold Class certified technicians',
                  'Limited lifetime warranty on repairs',
                  'Direct insurance billing',
                  'Free computerized estimates',
                  'Modern facility with latest equipment',
                  'Environmentally friendly practices',
                ].map((item, index) => (
                  <Flex key={index} align="center">
                    <Box w={2} h={2} borderRadius="full" bg="blue.500" mr={3} />
                    <Text color="gray.600">{item}</Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
} 