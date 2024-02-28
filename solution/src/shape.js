import React,{useState} from 'react';

const DrawingArea = () => {

    const [shapes,setShape] = useState([]);
    const [history,setHistory] = useState([]);
    const [currentStep, setCurrentStep] = useState(-1)

    const addShape = () => {
        const newShape = {
            type:'circle',
            x:Math.random() * 500,
            y: Math.random() * 500,
            radius:50,
            selected:false
        };
        console.log('>>>',newShape)
        const newShapes = [...shapes,newShape]
        setShape(newShapes)
        updatedHistory(newShapes)

    }

    const selectedShape = (index) => {
        const updatedShape = shapes.map((shape,i) => ({
            ...shape,
            selected:i === index
        }));
        setShape(updatedShape)
    }

    const deleteSelectedShape = () => {
        const  updatedShape = shapes.filter((shape) => !shape.selected)
        setShape(updatedShape)
        updatedHistory(updatedShape)
    }


    const updatedHistory = (newShapes) => {
        const newHistory = history.slice(0, currentStep+1)
        newHistory.push(newShapes)
        setHistory(newHistory)
        setCurrentStep(newHistory.length-1)
    }


    const undoAction =() => {
        if(currentStep > 0 ){
            setCurrentStep(currentStep-1)
            setShape(history[currentStep-1])
        }
    }
    const redoAction  =() => {
        if(currentStep < history.length-1 ){
            setCurrentStep(currentStep+1)
            setShape(history[currentStep+1])
        }
    }


  
    return(
        <div>
            <button onClick={deleteSelectedShape}>Delete</button>
            <button onClick={addShape} >Add Shape</button>
            <button onClick={undoAction} disabled ={currentStep===0}>Undo</button>
            <button onClick={redoAction} disabled ={currentStep===history.length-1}>Redo</button>
           {shapes.map((shape,index) => (
                <div key={index}
                style={{
                    position:'absolute',
                    left:shape.x,
                    top:shape.y,
                    width:shape.radius *2,
                    height:shape.radius*2,
                    borderRadius:'50%',
                    backgroundColor:shape.selected?'blue':'red'
                }}

                onClick={() => selectedShape(index)}
                />
           ))


           }
        </div>
    )

}

export default DrawingArea;