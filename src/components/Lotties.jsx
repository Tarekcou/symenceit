import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

const Lotties = ({lottie}) => {
  return (
    <div>
        <Player
            autoplay
            loop
            src={lottie}
            style={{ height: "300px", width: "100%" }}
          />
    </div>
  )
}

export default Lotties