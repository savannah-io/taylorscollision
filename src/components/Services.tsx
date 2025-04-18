import { Box, Container, Heading, SimpleGrid, VStack, Text, Image, useColorModeValue, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCarCrash, FaPaintRoller, FaTools, FaFileInvoiceDollar } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <MotionBox
      p={8}
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      shadow="sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      position="relative"
      overflow="hidden"
      style={{
        transition: 'all 0.3s',
      }}
      _hover={{
        transform: 'translateY(-8px)',
        shadow: 'lg',
        borderColor: 'blue.500',
        '& .service-icon': {
          transform: 'scale(1.1)',
        },
      }}
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        right={0}
        width="150px"
        height="150px"
        opacity={0.03}
        transform="translate(30%, -30%)"
        zIndex={0}
      >
        <Icon as={icon} w="100%" h="100%" />
      </Box>

      <VStack spacing={4} align="flex-start" position="relative" zIndex={1}>
        <Box
          p={3}
          bg="blue.50"
          borderRadius="lg"
          color="blue.500"
          className="service-icon"
          transition="transform 0.3s ease"
        >
          <Icon as={icon} boxSize="40px" />
        </Box>
        <Heading size="md" fontWeight="600">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="1.6">
          {description}
        </Text>
      </VStack>
    </MotionBox>
  )
}

export const Services = () => {
  const services = [
    {
      title: 'Collision Repair',
      description: 'Expert repair services for all types of collision damage. We restore your vehicle to its pre-accident condition.',
      icon: FaCarCrash
    },
    {
      title: 'Paint Services',
      description: 'Professional auto painting and color matching. Our experts ensure a flawless finish every time.',
      icon: FaPaintRoller
    },
    {
      title: 'Frame Repair',
      description: 'Precise frame straightening and structural repairs using state-of-the-art equipment.',
      icon: FaTools
    },
    {
      title: 'Insurance Claims',
      description: 'We work with all major insurance companies to make your repair process smooth and hassle-free.',
      icon: FaFileInvoiceDollar
    }
  ]

  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="1200px">
        <VStack spacing={16}>
          <VStack spacing={4} textAlign="center">
            <Heading
              as={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                transition: 'all 0.5s',
              }}
              size="2xl"
              fontWeight="bold"
            >
              Our Services
            </Heading>
            <Text
              color="gray.600"
              fontSize="lg"
              maxW="800px"
              as={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                transition: 'all 0.5s',
              }}
            >
              We provide comprehensive auto collision repair services with state-of-the-art equipment
              and experienced technicians who care about getting you back on the road safely.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="100%">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 