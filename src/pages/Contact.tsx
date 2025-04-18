import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Flex,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const MotionBox = motion(Box)

const ContactInfo = ({ icon, title, content }: { icon: any; title: string; content: string }) => (
  <Flex align="center" mb={4}>
    <Icon as={icon} boxSize={5} color="blue.500" mr={4} />
    <Box>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text color="gray.600">{content}</Text>
    </Box>
  </Flex>
)

export const Contact = () => {
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    toast({
      title: 'Message Sent',
      description: "We'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box pt="100px">
      {/* Hero Section */}
      <Box bg="gray.900" color="white" py={20}>
        <Container maxW="1200px">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Contact Us</Heading>
            <Text fontSize="xl" color="gray.300" maxW="800px">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form and Info Section */}
      <Box py={20}>
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VStack align="flex-start" spacing={8}>
                <Box>
                  <Heading size="xl" mb={6}>Get in Touch</Heading>
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    title="Address"
                    content="2785 Buford Hwy STE 101, Duluth, GA 30096"
                  />
                  <ContactInfo
                    icon={FaPhone}
                    title="Phone"
                    content="(770) 495-0050"
                  />
                  <ContactInfo
                    icon={FaEnvelope}
                    title="Email"
                    content="info@taylorscollision.com"
                  />
                  <ContactInfo
                    icon={FaClock}
                    title="Business Hours"
                    content="Monday - Friday: 8:00 AM - 6:00 PM"
                  />
                </Box>

                {/* Map */}
                <Box w="100%" h="300px" borderRadius="lg" overflow="hidden">
                  <iframe
                    title="Taylor's Collision Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=2785+Buford+Hwy+STE+101,+Duluth,+GA+30096"
                    allowFullScreen
                  />
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                as="form"
                onSubmit={handleSubmit}
                p={8}
                bg="white"
                borderRadius="lg"
                shadow="lg"
              >
                <VStack spacing={6}>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} w="full">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input placeholder="John" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input placeholder="Doe" />
                    </FormControl>
                  </SimpleGrid>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="john@example.com" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input type="tel" placeholder="(123) 456-7890" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="How can we help you?"
                      rows={4}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    w="full"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
} 