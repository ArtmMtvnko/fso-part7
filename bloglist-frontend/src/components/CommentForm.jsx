import { useDispatch } from 'react-redux'
import useField from '../hooks/useField'
import blogService from '../services/blogs'
import { addComment } from '../reducers/blogReducer'

const CommentForm = ({ blog }) => {
    const [content, resetContent] = useField('text', 'content')

    const dispatch = useDispatch()

    const createComment = async (event) => {
        event.preventDefault()

        const createdComment = await blogService.createComment(blog.id, {
            content: content.value
        })

        dispatch(addComment(createdComment))

        resetContent()
    }

    return (
        <form onSubmit={createComment}>
            <input {...content} />
            <button type="submit">leave comment</button>
        </form>
    )
}

export default CommentForm
