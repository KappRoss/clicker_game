import React from 'react'
import s from './GamePage.module.css'
import NickName from "./components/nickname/NickName";

const GamePage = () => {
  return (
    <div className={s.GamePage}>
      <div className={s.HeaderGame}>
          <h2>THE CLICKER GAME</h2>
      </div>
      <div className={s.Name}>
        <NickName/>
      </div>
      <div className={s.LevelDiff}>
        Level of difficulty
      </div>
      <div className={s.Play}>
        Start GAME / repeat
      </div>
      <div className={s.PlaceOfGame}>
        PLACE GAME with count of cells
      </div>
      <div className={s.WinnersList}>
        Winners List
        NAME and DATA
      </div>
    </div>
  )
}

export default GamePage
