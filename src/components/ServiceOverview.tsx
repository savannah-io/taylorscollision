import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, Button, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCarCrash, FaPaintRoller, FaWrench, FaCar, FaShieldAlt } from 'react-icons/fa'
import { IconType } from 'react-icons'

const MotionBox = motion(Box)

interface ServiceItemProps {
  title: string;
  description: string;
  icon: IconType;
  image: string;
}

const services: ServiceItemProps[] = [
  {
    title: 'Collision Repair',
    description: 'Expert repair services for all types of collision damage, restoring your vehicle to its pre-accident condition.',
    icon: FaCarCrash,
    image: '/images/collision-repair.jpg',
  },
  {
    title: 'Paint Services',
    description: 'Professional auto painting with color matching technology for a flawless finish every time.',
    icon: FaPaintRoller,
    image: '/images/paint-services.jpg',
  },
  {
    title: 'Frame Repair',
    description: 'Precision frame straightening using state-of-the-art equipment and measuring systems.',
    icon: FaWrench,
    image: '/images/frame-repair.jpg',
  },
  {
    title: 'Dent Removal',
    description: "Paintless dent repair and traditional dent removal services to restore your vehicle's appearance.",
    icon: FaCar,
    image: '/images/dent-removal.jpg',
  },
  {
    title: 'Insurance Claims',
    description: 'We work with all major insurance companies and help manage your claim process.',
    icon: FaShieldAlt,
    image: '/images/insurance-claims.jpg',
  },
];

const ServiceCard = ({ title, description, icon, image }: ServiceItemProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Box
      bg="white"
      shadow="xl"
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-8px)',
        shadow: '2xl',
      }}
    >
      <Box position="relative" h="200px" overflow="hidden">
        <Image
          src={image}
          alt={title}
          w="full"
          h="full"
          objectFit="cover"
          transition="transform 0.3s"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          transition="opacity 0.3s"
          _groupHover={{ opacity: 0.7 }}
        />
        <Icon
          as={icon}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          boxSize={12}
        />
      </Box>
      
      <VStack p={6} align="flex-start" spacing={3}>
        <Heading size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="tall">
          {description}
        </Text>
        <Button
          variant="ghost"
          colorScheme="brand"
          size="sm"
          rightIcon={<Icon as={FaCarCrash} />}
          _hover={{
            bg: 'brand.50',
          }}
        >
          Learn More
        </Button>
      </VStack>
    </Box>
  </MotionBox>
);

export const ServiceOverview = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Text
              color="brand.600"
              fontWeight="semibold"
              fontSize="lg"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              OUR SERVICES
            </Text>
            <Heading
              size="2xl"
              color="gray.900"
              mb={4}
            >
              Comprehensive Auto Care Solutions
            </Heading>
            <Text fontSize="lg" color="gray.600">
              From minor dents to major collision repairs, our expert team delivers quality
              service using state-of-the-art equipment and proven techniques.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="full"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </SimpleGrid>

          <Flex gap={4} justify="center">
            <Button
              size="lg"
              variant="outline"
              colorScheme="brand"
              px={8}
            >
              View All Services
            </Button>
            <Button
              size="lg"
              colorScheme="brand"
              px={8}
            >
              Schedule Service
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}; 