import { useParams } from "react-router"
import Container from "../components/container"
import Text from "../components/text"

export default function PagePhotoDetails() {
  const { id } = useParams()
  return (
    <Container>
      <Text variant="heading-medium">Detalhe da foto</Text>
      <hr />
      <Text>ID da foto: {id}</Text>
    </Container>
  )
}
