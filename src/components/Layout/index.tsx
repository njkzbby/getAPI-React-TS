import { Box, Container } from '@mui/material'

import { Header } from './Header'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', height: '100vh' }}>
      <Header />
      <Container>{children}</Container>
    </Box>
  )
}
