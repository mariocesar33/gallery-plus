import { useParams } from "react-router"
import Text from "../components/text"

export default function PagePhotoDetails() {
  const { id } = useParams()
  return (
    <div>
      <Text variant="heading-medium">Detalhe da foto</Text>
      <hr />
      <Text>ID da foto: {id}</Text>
    </div>
  )
}
