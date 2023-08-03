import React from 'react'

export default function Card() {
  return (
    <div>
       <div
          className='card mt-3'
          style={{ width: "18rem", maxHeight: "360px" }}>
          <img src='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1690900379~exp=1690900979~hmac=19774e9b51023c24b5c87df9be0e94e8ffe62ffe27aab304029bd68ee8da1801' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is Some important Text.</p>
            <div className='container' w-100>
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
                <option value='half'>Half</option>
                <option value='full'>Full</option>
              </select>
              <div className='d-inline h-100 fs-5'>Total Price</div>
            </div>
          </div>
        </div>
     
    </div>
  )
}
