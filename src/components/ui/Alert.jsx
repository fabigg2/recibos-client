import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ text, type = 'error' }) => {
    return (
        <div
            className={` flex justify-center items-center w-full p-2 border-2 ${type === 'error' ? ' border-red text-red' : ' border-green text-green'}`}>
            {text}
        </div>
    )
}

Alert.propTypes = {}

export default Alert