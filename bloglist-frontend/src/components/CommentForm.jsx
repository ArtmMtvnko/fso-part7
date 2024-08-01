import useField from "../hooks/useField"

const CommentForm = () => {
    const [content, resetContent] = useField('text', 'content')

    const addComment = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={addComment}>
            <input {...content} />
            <button type="submit">leave comment</button>
        </form>
    )
}

export default CommentForm
