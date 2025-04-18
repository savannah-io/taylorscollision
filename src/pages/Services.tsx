import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, Button, Flex, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCarCrash, FaPaintRoller, FaTools, FaFileInvoiceDollar, FaCheck } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon: any;
  image: string;
  index: number;
}

const ServiceDetail = ({ title, description, features, icon, image, index }: ServiceDetailProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    mb={20}
  >
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
      <Box order={{ base: 1, md: index % 2 === 0 ? 1 : 2 }}>
        <Flex align="center" mb={4}>
          <Icon as={icon} boxSize={8} color="blue.500" mr={4} />
          <Heading size="xl">{title}</Heading>
        </Flex>
        <Text fontSize="lg" color="gray.600" mb={6}>
          {description}
        </Text>
        <VStack align="flex-start" spacing={4}>
          {features.map((feature, idx) => (
            <Flex key={idx} align="center">
              <Icon as={FaCheck} color="blue.500" mr={2} />
              <Text color="gray.600">{feature}</Text>
            </Flex>
          ))}
        </VStack>
        <Button
          colorScheme="blue"
          size="lg"
          mt={8}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
        >
          Schedule Service
        </Button>
      </Box>
      <Box order={{ base: 2, md: index % 2 === 0 ? 2 : 1 }}>
        <Image
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="2xl"
          w="full"
          h="400px"
          objectFit="cover"
        />
      </Box>
    </SimpleGrid>
  </MotionBox>
)

export const Services = () => {
  const services = [
    {
      title: 'Collision Repair',
      description: 'Our expert technicians use state-of-the-art equipment to restore your vehicle to its pre-accident condition. We handle everything from minor dents to major collision damage.',
      features: [
        'Complete structural repairs',
        'Computerized frame straightening',
        'Expert color matching',
        'Dent removal and panel repair',
        'Quality assurance inspection',
      ],
      icon: FaCarCrash,
      image: '/images/collision-repair.jpg',
    },
    {
      title: 'Paint Services',
      description: 'Our advanced paint facility ensures a perfect color match and flawless finish. We use environmentally friendly materials and techniques for superior results.',
      features: [
        'Computerized color matching',
        'Environmental spray booths',
        'Clear coat protection',
        'Spot repairs and blending',
        'Paint protection options',
      ],
      icon: FaPaintRoller,
      image: '/images/paint-services.jpg',
    },
    {
      title: 'Frame Repair',
      description: "Using precision equipment and advanced measuring systems, we ensure your vehicle's frame is restored to manufacturer specifications.",
      features: [
        'Laser frame measuring',
        'Computerized alignments',
        'Structural welding',
        'Unibody repairs',
        'Safety inspections',
      ],
      icon: FaTools,
      image: '/images/frame-repair.jpg',
    },
    {
      title: 'Insurance Claims',
      description: 'We work directly with all major insurance companies to make your repair process as smooth as possible, handling the paperwork and negotiations.',
      features: [
        'Direct insurance billing',
        'Claim assistance',
        'Rental car arrangement',
        'Progress updates',
        'Warranty documentation',
      ],
      icon: FaFileInvoiceDollar,
      image: '/images/insurance-claims.jpg',
    },
  ]

  return (
    <Box pt="100px">
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="1200px">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Our Services</Heading>
            <Text fontSize="xl" color="blue.100" maxW="800px">
              We provide comprehensive auto collision repair services with state-of-the-art
              equipment and experienced technicians who care about getting you back on the road safely.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Detail Section */}
      <Box py={20}>
        <Container maxW="1200px">
          {services.map((service, index) => (
            <ServiceDetail key={service.title} {...service} index={index} />
          ))}
        </Container>
      </Box>
    </Box>
  )
} 