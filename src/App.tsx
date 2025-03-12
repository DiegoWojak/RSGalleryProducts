import { furnituresPictures } from './Pictures/furnituresPictures.jsx'
import Gallery from './Components/Gallery.jsx'

export function App() {
  return (
    <Gallery pictureData={furnituresPictures} />
  )
}
