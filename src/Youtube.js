import React from 'react'

const Youtube = ({videoId, opts}) => {
    return (
        <video width={opts.width} height={opts.height} autoplay>
            <source src={videoId} type="video/mp4" />
            <source src={videoId} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        
    )
}

export default Youtube
