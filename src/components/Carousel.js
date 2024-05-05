import React from 'react'
import Spaghetti from "../assets/herbs-906140_1280.jpg"
import herbs from "../assets/spaghetti-2931846_1280.jpg"

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">

                <div className="carousel-item active" >
                    <img src={herbs} className="d-block w-100" alt="..." style={{ maxHeight: "500px" }} />
                </div>

                {/* <div className="carousel-item active" style={{ objectFit: "contain !important" }}>
                    <img src={Spaghetti} className="d-block w-100" alt="..." style={{ maxHeight: "500px" }} />
                </div> */}


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
