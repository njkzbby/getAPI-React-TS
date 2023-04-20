import { Box, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Data } from '../Users'
import { PerosnalInfo, PersonalInfoPanel, PersonalNavigation } from './styles'

export const User: React.FC = () => {
  const { id } = useParams()
  const [userData, setUserData] = useState<Data>()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `https://json-placeholder-api.herokuapp.com/users/${id}`,
      )

      if (response.status !== 200) {
        throw new Error('User error')
      }
      const data = (await response.json()) as Data

      setUserData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <PerosnalInfo>
        <Typography sx={{ fontSize: 24 }} color='text.secondary' gutterBottom>
          {userData?.name} <br /> {userData?.username}
        </Typography>
      </PerosnalInfo>
      <PersonalNavigation>
        <div>Posts</div>
        <div>Albums</div>
        <div>Todos</div>
      </PersonalNavigation>
      <PersonalInfoPanel>
        <Box sx={{ maxWidth: 275 }}>
          <TextField
            key={userData?.name}
            id='outlined-read-only-input'
            label='Name'
            defaultValue={userData?.name}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ maxWidth: 275 }}>
          <TextField
            key={userData?.phone}
            id='outlined-read-only-input'
            label='Phone'
            defaultValue={userData?.phone}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ maxWidth: 275 }}>
          <TextField
            key={userData?.email}
            id='outlined-read-only-input'
            label='Email'
            defaultValue={userData?.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ maxWidth: 275 }}>
          <TextField
            key={userData?.username}
            id='outlined-read-only-input'
            label='Username'
            defaultValue={userData?.username}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ maxWidth: 275 }}>
          <TextField
            key={userData?.website}
            id='outlined-read-only-input'
            label='Website'
            defaultValue={userData?.website}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </PersonalInfoPanel>
    </>
  )
}
