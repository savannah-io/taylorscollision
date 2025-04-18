import { Box, Container, Heading, Text, Button, HStack, Icon, Flex, VStack, Avatar } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { useState } from 'react'

const MotionBox = motion(Box)

interface ReviewProps {
  content: string;
  author: string;
  rating: number;
  image?: string;
  title?: string;
}

const reviews: ReviewProps[] = [
  {
    content: "They fixed my car quickly and the price was very reasonable. The team was professional and kept me updated throughout the process. Highly recommend!",
    author: "Mike Johnson",
    rating: 5,
    title: "Satisfied Customer",
    image: "/images/avatar1.jpg"
  },
  {
    content: "Outstanding service! They handled my insurance claim seamlessly and restored my car to perfect condition. The attention to detail was impressive.",
    author: "Sarah Williams",
    rating: 5,
    title: "Happy Client",
    image: "/images/avatar2.jpg"
  },
  {
    content: "Best auto repair shop in town! Fair pricing, excellent communication, and quality work. They truly care about their customers.",
    author: "David Chen",
    rating: 5,
    title: "Loyal Customer",
    image: "/images/avatar3.jpg"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <HStack spacing={1}>
    {[...Array(rating)].map((_, i) => (
      <Icon
        key={i}
        as={FaStar}
        color="brand.400"
        boxSize={4}
      />
    ))}
  </HStack>
);

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={16}>
          {/* Section Header */}
          <VStack spacing={3}>
            <Text
              color="brand.600"
              fontSize="lg"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              WHAT PEOPLE SAY ABOUT US
            </Text>
            <Heading
              size="2xl"
              color="gray.900"
              textAlign="center"
              maxW="800px"
            >
              Our Reviews
            </Heading>
          </VStack>

          {/* Reviews Carousel */}
          <Box position="relative" w="full" maxW="900px" mx="auto">
            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="white"
              shadow="xl"
              borderRadius="2xl"
              p={{ base: 8, md: 12 }}
              mx={4}
            >
              <Icon
                as={FaQuoteLeft}
                boxSize={8}
                color="brand.200"
                mb={6}
              />
              
              <MotionBox
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                textAlign="center"
                maxW="600px"
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="gray.700"
                  lineHeight="tall"
                  mb={8}
                >
                  {reviews[currentIndex].content}
                </Text>

                <VStack spacing={4}>
                  <Avatar
                    size="lg"
                    name={reviews[currentIndex].author}
                    src={reviews[currentIndex].image}
                  />
                  <Box textAlign="center">
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      color="gray.900"
                    >
                      {reviews[currentIndex].author}
                    </Text>
                    <Text
                      color="gray.500"
                      fontSize="sm"
                      mb={2}
                    >
                      {reviews[currentIndex].title}
                    </Text>
                    <StarRating rating={reviews[currentIndex].rating} />
                  </Box>
                </VStack>
              </MotionBox>

              {/* Navigation Buttons */}
              <HStack
                position="absolute"
                width="full"
                justify="space-between"
                px={{ base: 2, md: 4 }}
                top="50%"
                transform="translateY(-50%)"
              >
                <Button
                  onClick={handlePrevious}
                  variant="ghost"
                  color="brand.600"
                  _hover={{ bg: 'brand.50' }}
                  leftIcon={<Icon as={FaChevronLeft} boxSize={5} />}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  variant="ghost"
                  color="brand.600"
                  _hover={{ bg: 'brand.50' }}
                  rightIcon={<Icon as={FaChevronRight} boxSize={5} />}
                >
                  Next
                </Button>
              </HStack>
            </Flex>

            {/* Review Navigation Dots */}
            <HStack justify="center" mt={6} spacing={2}>
              {reviews.map((_, index) => (
                <Box
                  key={index}
                  w={2}
                  h={2}
                  borderRadius="full"
                  bg={index === currentIndex ? 'brand.500' : 'gray.300'}
                  cursor="pointer"
                  onClick={() => setCurrentIndex(index)}
                  transition="all 0.2s"
                  _hover={{ bg: 'brand.400' }}
                />
              ))}
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}; 