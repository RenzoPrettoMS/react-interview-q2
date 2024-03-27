function Canvas({shapes}) {

    return (
        <div>
            {shapes.map(() => {
                <circle
                cx={shapes.x}
                cy={shapes.y}
                r="45"
                fill="none"
                stroke="#F0CE01"
                strokeWidth="4"
                />
            })}
        </div>

    )
}

export default Canvas;