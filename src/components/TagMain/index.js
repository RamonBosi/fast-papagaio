import Container from "react-bootstrap/Container";

export function TagMain({ children }) {

  return (
    <main>
      <Container fluid='xl' className="p-2 d-flex flex-column my-4">
        {children}
      </Container>
    </main>
  )
}