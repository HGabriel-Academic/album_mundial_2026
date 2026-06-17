import './App.css'
import StickerCard from './components/StickerCard'
import { stickers } from './data/stickers'

function App() {
  // Mostrar stickers en consola
  console.log('Total de figuritas cargadas:', stickers.length)
  console.log('Array de stickers:', stickers)

  return (
    <div className="container">
      <h1>Álbum Mundial 2026</h1>
      <div className="stickers-grid">
        {stickers.map((sticker) => (
          <StickerCard key={sticker.id} sticker={sticker} />
        ))}
      </div>
    </div>
  )
}

export default App
