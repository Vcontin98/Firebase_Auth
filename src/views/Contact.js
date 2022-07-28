import { useEffect, useState } from "react"

export default function Contact() {
    const [color, setColor] = useState('Green')
    const [count, setCount] = useState(0)

    // We want to run code only once
    // when our component is initialized
    useEffect(() => {
        console.log('Component Mounted')
    }, [])

    // We want to run code everytime
    // when our component is updated
    useEffect(() => {
        console.log('Component Updated')
    })

    // We want to run code whenever
    // the value of color changes
    useEffect(() => {
        console.log('Color changed to: ' + color)
        document.body.style.backgroundColor = color
    }, [color])

    function changeColor() {
        let colors = ["blue", "green", "orange", "yellow", "pink"]

        // Get random color from array
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <>
            <h1>Contact</h1>
            <p>Count: { count }</p>
            <button onClick={() => setCount(count+1)}>Increment Counter</button>
            <p>Color: { color }</p>
            <button onClick={changeColor}>Updated Color</button>
        </>
    )
}