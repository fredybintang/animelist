"use client"
import { X } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250",
    }

    return (
        <>
            {isOpen ?
                <div className="fixed bottom-4 right-4">
                    <button className="float-right bg-white rounded" onClick={handleVideoPlayer}> <X size={24} /></button>
                    <YouTube videoId={youtubeId}
                        onReady={(event) => event.target.pauseVideo()}
                        opts={option} 
                        onError={() => alert("Video is broken, please try another.")}
                        />
                </div >
                : 
                <button className="fixed bottom-4 right-4 text-md bg-white text-blue-600 border-2 border-indigo-600 rounded p-2" onClick={handleVideoPlayer}>Watch Trailer</button>
            }
        </>
    )
}

export default VideoPlayer