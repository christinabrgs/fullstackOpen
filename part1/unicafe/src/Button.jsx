


export default function Button ({ feedback, onClick}) {

    return (
        <button onClick={onClick}>
            <p> {feedback} </p>    
        </button>
    )
}