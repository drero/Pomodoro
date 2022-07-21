import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button';

import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <h1>Hello World</h1>
      <Button variant="primary" textColor='grey' />
      <Button variant="secondary" textColor='white' />
      <Button variant="success" textColor='black' />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  )
}
