import { Route, Routes as Switch } from 'react-router-dom'

import { Albums, Posts, Todos, Users } from '../../pages'
import { User } from '../../pages/User'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' element={<Users />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/albums' element={<Albums />} />
      <Route path='/todos' element={<Todos />} />
      <Route path='/user/:id' element={<User />} />
    </Switch>
  )
}
