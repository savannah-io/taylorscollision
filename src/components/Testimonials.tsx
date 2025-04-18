import { Box, Container, Heading, Text, Button, HStack, Icon, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const MotionBox = motion(Box)

interface TestimonialProps {
  content: string;
  author: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Thank you for always getting my car taken care of! Andre and their crew of techs do quality work at a fair price.",
    author: "Kyle",
    rating: 5
  },
  {
    content: "Best auto repair shop in town! Professional service and transparent pricing.",
    author: "Sarah",
    rating: 5
  },
  {
    content: "They fixed my car quickly and the price was very reasonable. Highly recommend!",
    author: "Mike",
    rating: 5
  }
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            size="2xl"
            mb={10}
            color="blue.900"
            fontFamily="heading"
            textAlign="center"
          >
            Our Testimonials
          </Heading>

          <Flex align="center" justify="center" position="relative">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              position="absolute"
              left={0}
              zIndex={2}
            >
              <Icon as={FaChevronLeft} boxSize={6} color="blue.500" />
            </Button>

            <MotionBox
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              maxW="800px"
              mx="auto"
              textAlign="center"
              px={16}
            >
              <Text fontSize="xl" color="gray.600" mb={6}>
                {testimonials[currentIndex].content}
              </Text>
              
              <Text fontWeight="bold" color="gray.800" mb={4}>
                {testimonials[currentIndex].author}
              </Text>

              <HStack spacing={1} justify="center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="blue.500" />
                ))}
              </HStack>
            </MotionBox>

            <Button
              variant="ghost"
              onClick={handleNext}
              position="absolute"
              right={0}
              zIndex={2}
            >
              <Icon as={FaChevronRight} boxSize={6} color="blue.500" />
            </Button>
          </Flex>

          <Flex justify="center" mt={10} gap={4}>
            <Button
              variant="outline"
              colorScheme="blue"
              size="lg"
              onClick={() => {}}
            >
              VIEW ALL REVIEWS
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              size="lg"
              onClick={() => {}}
            >
              LEAVE A REVIEW
            </Button>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  )
} 