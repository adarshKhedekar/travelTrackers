import {useEffect, useState} from 'react';
import SingleDeck from './SingleDeck'
import Sleeper from './Sleeper'
import MiniBus from './MiniBus'
import './SeatSelection.scss'
function SeatSelection() {
  const [type, setType] = useState(null);
  useEffect(() => {
    setType('MiniBus');
  }, [])
  return (
    <div className="seat-selection">
      {(type === 'SingleDeck' || type === 'AC' || type === 'NonAC') && <SingleDeck/>}
      {type === 'Sleeper' && <Sleeper/>}
      {type === 'MiniBus' && <MiniBus/>}
    </div>
  )
}

export default SeatSelection
