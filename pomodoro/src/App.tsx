import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" textColor='grey' />
      <Button variant="secondary" textColor='white' />
      <Button variant="success" textColor='black' />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
