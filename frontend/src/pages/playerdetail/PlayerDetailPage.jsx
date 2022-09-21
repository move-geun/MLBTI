import React from "react"
import { 
  Background, 
} from "./PlayerDetailPage.style"
import PlayerInfo from "../../components/PlayerDetail/PlayerInfo"
import PlayerRecord from "../../components/PlayerDetail/PlayerRecord"

const PlayerDetailPage = () => {

  return (
    <Background>
      <PlayerInfo/>
      <PlayerRecord/>
    </Background>
    )
} 

export default PlayerDetailPage