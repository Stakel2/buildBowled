import React, {useState} from 'react'
import { HeadingEditPage } from '../../../common'

const Play = () => {
    const [loading, setLoading] = useState(false);
  return (
    <div> 
    <HeadingEditPage className="centerTitle" title={"Coming Soon"} />
    </div>
  )
}

export default Play