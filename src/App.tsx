import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeProvider } from '@mui/material'
import { LigthTheme } from './shared/themes'

export const App = () => {
  return (
    <ThemeProvider theme={LigthTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
