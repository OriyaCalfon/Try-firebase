import { useState } from 'react'


function Square({ s, c, children }) {
    const [count, setCount] = useState(0)

    const squareStyle = {
        width: `${s}px`,
        height: `${s}px`,
        backgroundColor: c,
    };

    return (
        <>
            <div style={squareStyle}>
                {children}
            </div>
        </>
    )
}

export default Square