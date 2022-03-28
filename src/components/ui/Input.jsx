import React from 'react'
import PropTypes from 'prop-types'

const Input = ({label, type='text', name, register}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}:</label>
            <input
                className=" border-[1px] border-grey rounded-lg p-2 outline-none"
                type={type} id={name}
                placeholder={label}
                {...register(name, {required: true})}
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired
}

export default Input