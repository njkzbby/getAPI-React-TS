import 'normalize.css'

import { Layout } from '../components/Layout'
import { Providers } from './Providers'
import { Routes } from './Routes'

export const App: React.FC = () => {
  return (
    <Providers>
      <Layout>
        <Routes />
      </Layout>
    </Providers>
  )
}
