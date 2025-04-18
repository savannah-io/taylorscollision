import { Box } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Reviews } from '../components/Reviews'
import { ServiceOverview } from '../components/ServiceOverview'

export const Home = () => {
  return (
    <Box>
      <Hero />
      <ServiceOverview />
      <Reviews />
      <Services />
    </Box>
  )
} 