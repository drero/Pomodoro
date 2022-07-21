import { Button } from './components/Button';

export function App() {
  return (
    <>
    <h1>Hello World</h1>
      <Button variant="primary" textColor='grey' />
      <Button variant="secondary" textColor='white' />
      <Button variant="success" textColor='black' />
      <Button variant="danger" />
      <Button />
    </>
  )
}
