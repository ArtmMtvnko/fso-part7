import { useState } from 'react'
import PropTypes from 'prop-types'

const Togglable = ({ buttonLabel, children }) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toogleVisibility = () => {
        setVisible(prev => !prev)
    }
    
    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toogleVisibility}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className="togglableContent">
                {children}
                <button onClick={toogleVisibility}>cancel</button>
            </div>
        </div>
    )
}

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglable