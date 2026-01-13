"use client";

import { ReactNode } from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

export default function Providers({ children }: { children: ReactNode }) {
    const tracks = [
        { src: "/audio/focus-1.mp3" },
        { src: "/audio/focus-2.mp3" },
    ];

    const audio = useAudioPlayer(tracks);

    return (
        <>
            {children}

            {/* Global audio engine */}
            <audio
                ref={audio.audioRef}
                src={tracks[audio.currentTrack].src}
                onEnded={audio.next}
            />
        </>
    );
}
