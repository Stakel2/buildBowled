import React from 'react'
import {useParams} from 'react-router-dom'

function PageNotFound() {
    const parms = useParams()
    return (
        <div>
            Page Not Founds
        </div>
    )
}

export default PageNotFound
