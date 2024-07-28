const Anecdote = ({ anecdote }) => {
    return (
        <div>
            <p>{anecdote.content}</p>
            <p>Author: {anecdote.author}</p>
            <p>Info: {anecdote.info}</p>
            <p>votes: {anecdote.votes}</p>
        </div>
    )
}

export default Anecdote