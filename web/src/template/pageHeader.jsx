import React from 'react'

const pageHeader  = function (props) {
    return (
        <h2>{props.name} <small>{props.small}</small></h2>
    )
}

export default pageHeader;