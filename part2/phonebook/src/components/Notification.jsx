const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    const errorStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div className='error' style={errorStyle}>
        {message}
        </div>
    )
}
export default Notification