import React, { useEffect, useState } from 'react';
import {DATA} from './data';
import SelectLevel from './components/SelectLevel';
import ResetGame from './components/ResetGame';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import ModalPortal from './components/ModalPortal';



function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matchedCount, setMatchedCount] = useState(0); //정답 수
    const [cardPairs, setCardPairs] = useState(5); //카드 짝 수

    const [isModalOpen, setIsModalOpen] = useState(false);
   
   

    const getFilteredData = () => {
      // 원본 데이터를 복사하여 새로운 배열 생성
      const copiedData = [...DATA];
    
      // 무작위로 샘플링한 카드 쌍 수 만큼 데이터를 추출하여 배열 생성
      const filteredData = [];
      for (let i = 0; i < cardPairs; i++) {
        const randomIndex = Math.floor(Math.random() * copiedData.length); // 남은 데이터 중 무작위 인덱스 선택
        const randomData = copiedData.splice(randomIndex, 1)[0]; // 선택한 데이터 추출
        filteredData.push(randomData); // 추출한 데이터를 배열에 추가
      }
    
      // 추출한 데이터를 두 번 연속해서 이어붙인 배열을 생성하여 반환
      const dataWithPairs = [...filteredData, ...filteredData];
      return dataWithPairs;
    };
  
  //shuffle cards
    const shuffleCards = ()=>{
      /*
      const filtered = getFilteredData(filteredData);
      */
      const shuffledCards = getFilteredData()
      .sort(()=>Math.random()-0.5)
      .map((card)=>({...card, id:Math.random()}));
  
      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
      setMatchedCount(0);
     // 게임 리셋하면 정답 수도 초기화
    };
  //level-button 클릭 시, 할당된 카드 짝 수 변경
   const handleLevelClick = (pairs) => {
      setCardPairs(pairs);
      const filteredData = getFilteredData();
      const shuffledCards = filteredData
      .sort(()=>Math.random()-0.5)
      .map((card)=>({...card, id:Math.random()}));
  
      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
      setMatchedCount(0);
      console.log(cardPairs)
    };
  
  //선택한 level에 맞게 카드 짝 수 할당
    useEffect(()=> {
      if (cardPairs ===5) {
        handleLevelClick(5);
        console.log(cardPairs)
      } else if (cardPairs === 7) {
        handleLevelClick(7);
        console.log(cardPairs)
      } else if (cardPairs === 9) {
        handleLevelClick(9);
        console.log(cardPairs)
      }
    }, [cardPairs]);
  
  
    //handle a choice
    const handleChoice = (card) => {
      if(!choiceOne || (choiceOne && !choiceTwo)){
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
      }
    }
    //2개의 카드가 선택되면 비교하기
    useEffect(()=>{
      if(choiceOne && choiceTwo){
        setDisabled(true)
  
        if(choiceOne.src === choiceTwo.src){
          setCards(prevCards =>{
            const newCards = prevCards.map(card =>{
              if(card.src === choiceOne.src){
                return {...card, matched: true}
            } else {
              return card;
            }
          });
  
          //정답 수 증가
          setMatchedCount(prevMatchedCount => prevMatchedCount + 1);
  
          return newCards;
        });
         
          resetTurn();
        }else {
          setTimeout(() => resetTurn(), 1000)
        }
      }
    },[choiceOne, choiceTwo])
  
    console.log(cards)
  
    // choice 리셋하고 턴 수 증가
    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
      setDisabled(false);
    }
  
    
    useEffect(()=>{
      shuffleCards()
    },[])

    const handleMatchedCount = (count) => {
      setMatchedCount(count);
    };

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Render ModalPortal based on the isModalOpen state
  const modal = isModalOpen ? (
    <ModalPortal isOpen={isModalOpen} closeModal={closeModal} />
  ) : null;

 useEffect(() => {
  if (matchedCount/2 === cards.length /2 && !isModalOpen) {
    openModal();
  }
 }, [matchedCount, cards.length, isModalOpen]);
  
  return(
    <div>
      {modal}
      <Header matchedCount={matchedCount} cards={cards}/>
      <SelectLevel handleLevelClick={handleLevelClick}/>
      <ResetGame shuffleCards={shuffleCards}/>
      <CardGrid
        cards={cards}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        handleChoice={handleChoice}
        disabled={disabled}
      />
      <p>시도횟수: {turns}</p>
      <p>정답수: {matchedCount /2} / {cards.length / 2}</p>
    
    </div>
  );
  }
  
  export default App;
  
