import './SingleCard.css'



export default function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return(
        <div className = "card" onClick={handleClick}>
        <div className={flipped ? "flipped":""}>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" 
          src="./src/img/cover.svg" 
          onClick={handleClick} 
          alt="card back" />
        </div>
      </div>
    )
}

