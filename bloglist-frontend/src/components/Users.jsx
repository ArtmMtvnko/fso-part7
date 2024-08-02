import { useSelector } from 'react-redux'
import User from './User'
import { container } from '../styles/container'

const Users = () => {
    const users = useSelector(state => state.users)

    if (users === null) return null
    
    return (
        <table className={container}>
            <thead>
                <tr>
                    <td></td>
                    <td><b>blogs created</b></td>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <User key={user.id} user={user} />
                )}
            </tbody>
        </table>
    )
}

export default Users