import './StickerCard.css'

function StickerCard({ sticker }) {
  return (
    <div className="sticker-card">
      <img src={sticker.image} alt={sticker.player} />
      <div className="sticker-info">
        <h3>{sticker.player}</h3>
        <p>{sticker.country}</p>
        <span className="number">#{sticker.number}</span>
      </div>
    </div>
  )
}

export default StickerCard
