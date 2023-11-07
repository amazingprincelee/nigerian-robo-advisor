import React from 'react'

function Portfolio(props) {
  return (
    <div className="row container" style={{border:"2px green solid", borderRadius:"5px"}}>
    <div className="col-8">
        {props.scoreTitle}
    </div>
    <div className="col-4">
        {props.score}
    </div>
</div>
  )
}

export default Portfolio