import React from 'react'
import PropTypes from 'prop-types'

const ReceiptItem = ({ text, value }) => {
    return (
        <div className='w-full h-[30px] flex justify-between border-b-[1px] border-b-[#00000030]'>
            <span className=' text-sm'><b>{text}</b></span>
            <span className=' text-sm font-normal'>{value}</span>
        </div>
    )
}

ReceiptItem.propTypes = {}

export default ReceiptItem