import React from 'react'
import getIcon from '@/utils/getIcon'

const TextArea = ({ label, icon, placeholder, labelId, row="3" }) => {
    return (
        <div className="row align-items-center">
                <label htmlFor={labelId} className="fw-semibold">{label} </label>
                <div className="input-group">
                    {/* <div className="input-group-text">{getIcon(icon)}</div> */}
                    <textarea className="form-control" id={labelId} cols="30" rows={row} placeholder={placeholder}></textarea>
                </div>
        </div>
    )
}

export default TextArea