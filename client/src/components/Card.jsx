import React from 'react'

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  return (
    <div>
       <div
          className='card mt-3'
          style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className='card-body'>
          <h5 className="card-title">{props.foodName}</h5>
            <p className='card-text'>This is Some important Text.</p>
            <div className='container' w-100="true">
              <select className='m-2 h-100  bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  )
                })}
              </select>
              <select className='m-2 h-100  bg-success rounded'>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
              </select>
              <div className='d-inline h-100 fs-5'>Total Price</div>
            </div>
          </div>
        </div>
           </div>
  )
}
