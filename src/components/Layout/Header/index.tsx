import { AppBar, Button } from '@mui/material'

import { Link } from '../../Link'
import { HeaderContent, NavbarBox } from './styles'

export const Header: React.FC = () => {
  return (
    <AppBar position='sticky' sx={{ p: 1 }}>
      <HeaderContent>
        <NavbarBox>
          <Link to='/'>Users</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/albums'>Albums</Link>
          <Link to='/todos'>Todos</Link>
        </NavbarBox>
        <Button variant='outlined' color='inherit' size='small'>
          Login
        </Button>
      </HeaderContent>
    </AppBar>
  )
}
