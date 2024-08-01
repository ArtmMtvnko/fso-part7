import { useState } from 'react'
import PropTypes from 'prop-types'
import { buttonStyles } from '../styles/button'

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
                <button className={buttonStyles} onClick={toogleVisibility}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible} className="togglableContent">
                {children}
                <button className={buttonStyles} onClick={toogleVisibility}>cancel</button>
            </div>
        </div>
    )
}

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglable