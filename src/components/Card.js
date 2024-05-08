import React from 'react'

export const Card = (props) => {
    const { name, description, img, options } = props;
    let priceOptions = Object.keys(options)
    return (
        <div>

            <div className="card mt-3S" style={{ width: "18rem", maxHeight: "360px" }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <div className='container w-100' >
                        <select className='m-2 h-100  bg-success'>
                            {Array.from(Array(6), (e, i) => {
                                return <option key={i + 1} value={i + 1}>{i + 1}</option>

                            })}
                        </select>
                        <select className='m-2 h-100  bg-success'>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>data</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total price
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
