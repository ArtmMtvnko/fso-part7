const ErrorMessage = ({ notification }) => {
    if (notification === null) return null

    const styles = {
        margin: '10px 0',
        padding: 10,
        fontSize: 24,
        backgroundColor: '#dbdbdb',
        color: notification.success ? 'green' : 'red',
        border: `2px solid ${notification.success ? 'green' : 'red'}`,
        borderRadius: 5
    }

    return (
        <div style={styles} className="error">
            {notification.message}
        </div>
    )
}

export default ErrorMessage