import { useState } from 'react';
import Canvas from './Canvas';


function Main() {
    const [shapes, setShapes] = useState([])
    const [history, setHistory] = useState([])

    function handleAddShape(e) {
        e.preventDefaults();
        console.log("add shape?")
        const x = Math.floor(Math.random() * 1000);
        const y = Math.floor(Math.random() * 1000);
        const id = Math.random() * 1;

        setShapes([{x, y, id}, ...shapes]);
    }

    function handleDelete(e) {
        e.preventDefaults();

        const newShapes = shapes.filter((shape) => shape.id !== id);

        setShapes([...newShapes]);
    }

    function undo(e) {
        e.preventDefaults();


    }

    return (
        <>
        <button onClick={handleAddShape}>Add Shape</button>
        <button onClick={handleDelete}>Delete</button>

        <button onClick="">Undo</button>
        <button onClick="">Redo</button>


        <Canvas shapes={shapes}/>
        </>
    )
}

export default Main;