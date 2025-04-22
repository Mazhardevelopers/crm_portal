import React from 'react'
import getIcon from '@/utils/getIcon'

const Input = ({ label, icon, type = "text", placeholder, labelId, name, centerLink }) => {
    return (
        <div className="d-flex flex-column">
            <label htmlFor={labelId} className="fw-semibold">{label}</label>
            <div className="d-flex align-items-center">
                {/* <div className="me-2">{getIcon(icon)}</div> */}
                {centerLink && <div className="me-2">https://wrapbootstrap.com/user/theme_ocean</div>}
                <input type={type} name={name} className="form-control flex-grow-1" id={labelId} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input