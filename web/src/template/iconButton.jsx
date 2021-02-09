import React from 'react'

const iconButton = function (props) {
    if(props.hide) {
        return null
    } else {
        return (
            <button className={'btn btn-'+ props.style}>
               <i className={'fa fa-'+ props.icon}></i> 
            </button>
        )
    }

}

export default iconButton