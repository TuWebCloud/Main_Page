import { useState, useRef, useEffect } from 'preact/hooks';
import '../components/MoreInfo.css'

export default function MoreInfo({ children }) {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('280px');

    useEffect(() => {

        if (expanded)
            setHeight(`${contentRef.current.scrollHeight}px`);
        else
            setHeight('280px');
        
    }, [expanded]);

    return (
        <>
        <div id="desktop">{children}</div>
        <div ref={contentRef} id="mobile" class={`relative flex flex-col overflow-hidden ${expanded ? '' : 'mask-gradient'}`} 
            style={{ maxHeight: height }}>
            {children}
        </div>
        <button id="mobile-btn" onClick={() => setExpanded(!expanded)} class="more-info absolute bottom-[-15px] w-full h-12
            text-[var(--color-text)]/80 text-2xl text-center font-light">
            {!expanded &&
                <>Leer más</>
            }
            {expanded &&
                <>Leer menos</>
            }
        </button>
        </>
    )
}
