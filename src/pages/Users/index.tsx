import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { Link } from 'components/Link'
import { useEffect, useState } from 'react'

import { UserBox, UserList } from './styles'

export interface Data {
  id: number
  username: string
  name: string
  email: string
  phone: string
  website: string
}

export const Users: React.FC = () => {
  const [usersData, setUsersData] = useState<Data[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        'https://json-placeholder-api.herokuapp.com/users',
      )

      if (response.status !== 200) {
        throw new Error('')
      }

      const data = (await response.json()) as Data[]

      setUsersData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <UserBox>
        <UserList>
          {usersData.map(user => (
            <Card variant='outlined'>
              <Box sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography component='div'>{user.email}</Typography>
                  <Typography sx={{ mb: 1 }} color='text.secondary'>
                    {user.username}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/user/${user.id}`}>
                    <Button size='small' variant='contained'>
                      view user
                    </Button>
                  </Link>
                </CardActions>
              </Box>
            </Card>
          ))}
        </UserList>
      </UserBox>
    </>
  )
}

// https://json-placeholder-api.herokuapp.com/users
// {"_id":"643ae36f949159eeaa5321fc","id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889","_id":"643c7b73ecad1c64cdeb9887"},"_id":"643c7b73ecad1c64cdeb9888"},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies","_id":"643c7b73ecad1c64cdeb9889"},"__v":0},{"_id":"643ae36f949159eeaa5321fd","id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232","_id":"643c7b73ecad1c64cdeb988a"},"_id":"643c7b73ecad1c64cdeb988b"},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models","_id":"643c7b73ecad1c64cdeb988c"},"__v":0}
