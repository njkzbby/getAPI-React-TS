import { BrowserRouter as Router } from 'react-router-dom'

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Router>{children}</Router>
}
