import './App.css'
import StickerCard from './components/StickerCard'
import { stickers } from './data/stickers'

function App() {
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
