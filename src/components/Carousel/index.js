import React from 'react'

export default function Carousel() {
    return <div
                id="carouselExampleCrossfade"
                className="carousel slide carousel-fade relative "
                data-bs-ride="carousel"
            >
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                            className="block w-full rounded-xl h-72"
                            alt="Wild Landscape"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            class="block w-full"
                            alt="Camera"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            class="block w-full"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
            </div>
            
}