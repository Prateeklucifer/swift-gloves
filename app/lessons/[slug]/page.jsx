"use client"

import VideoJS from '@/app/components/VideoJS';
import React from 'react'

export default function VideoContent() {
    const playerRef = React.useRef(null);
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: '/videos/1.mp4',
            type: 'video/mp4'
        }]
    };
    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };
    return (
        <div className="md:px-4">

            <div className="container m-auto px-4 md:px-0">
                <div className="md:flex justify-center">
                    <div className="video w-[60%]">
                        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                    </div>
                </div>
                <div className="space-y-6 mt-4">
                    <div className="heading text-3xl font-bold">Introduction to computer science</div>
                    <div className="para">This is CS50x , Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.</div>
                </div>
                <div className="para">Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming.</div>
            </div>
        </div>
    )
}


