const User = ({ user }) => {
    return (
        <tr style={{ textAlign: 'end' }}>
            <td>{user.name}</td>
            <td>{user.blogs.length}</td>
        </tr>
    )
}

export default User