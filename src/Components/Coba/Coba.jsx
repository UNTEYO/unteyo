import React from 'react'
import "./Coba.css"
import { useState, useRef, useEffect } from 'react';


function Coba() {
    const [isPaused, seIsPaused] = useState(false);
    const containerRef = useRef(null);

    const cards = [
        { id: 1, title: 'Mountain Trek', content: 'Explore scenic mountain paths', color: 'bg-blue-100' },
    { id: 2, title: 'Beach Resort', content: 'Relax by crystal clear waters', color: 'bg-green-100' },
    { id: 3, title: 'City Tour', content: 'Experience urban adventures', color: 'bg-yellow-100' },
    { id: 4, title: 'Forest Camp', content: 'Connect with nature', color: 'bg-red-100' },
    { id: 5, title: 'Desert Safari', content: 'Discover endless dunes', color: 'bg-purple-100' },
    ]


    useEffect(()=> {
        const cards = document.querySelectorAll(".kartu")

        if (cards[0]) {
            cards[0].style.animationDelay = `${(10 / 5) * (5 - 1) * -1}s`
        }
        if (cards[1]) {
            cards[1].style.animationDelay = `${(10 / 5) * (5 - 2) * -1}s`
        }
        if (cards[2]) {
            cards[2].style.animationDelay = `${(10 / 5) * (5 - 3) * -1}s`
        }
        if (cards[3]) {
            cards[3].style.animationDelay = `${(10 / 5) * (5 - 4) * -1}s`
        }
        if (cards[4]) {
            cards[4].style.animationDelay = `${(10 / 5) * (5 - 5) * -1}s`
        }
    
    })
return (
    <div className="containerCoba">
        <div className="cardContainer" ref={containerRef}>
            {cards.map((card, index) => (
                <div key={index} className={`${card.color} kartu`}>
                    <h3>{card.title}</h3>
                    <h5>{card.content}</h5>
                </div>
            ))}
        </div>
    </div>
)
}

export default Coba