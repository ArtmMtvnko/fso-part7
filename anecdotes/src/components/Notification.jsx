const Notification = ({ notification }) => {
    if (notification === null) return null
    
    const styles = {
        padding: 5,
        border: '2px solid black'
    }
    
    return (
        <div style={styles}>
            <h3>{notification}</h3>
        </div>
    )
}

export default Notification