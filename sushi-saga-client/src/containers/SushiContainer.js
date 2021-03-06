import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map( sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eaten={props.eaten}/>)
        }
        <MoreButton updateIndex={props.updateIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer