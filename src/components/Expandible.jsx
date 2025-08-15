import { useState, useRef, useEffect } from 'preact/hooks';
import './Expandible.css';

export default function Expandible({ children }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (expanded) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [expanded]);

  return (
    <div class="transition-container">
      <h3 class="flex flex-col mx-8 my-10 sm:mx-0 sm:px-[15%] lg:px-[22%] items-center justify-between">
        NUESTRAS PÁGINAS PUEDEN TENER 3 <br/>ENFOQUES DISTINTOS
        <button onClick={() => setExpanded(!expanded)} class="expand-btn relative flex h-10 w-full justify-center items-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class={`arrow-icon ${expanded ? 'rotate' : ''} icon icon-tabler icons-tabler-outline icon-tabler-chevron-down`}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>        
        </button>
      </h3>
      
      <div ref={contentRef} class="expand-content" style={{ maxHeight: height }}>
        {children}
      </div>
    </div>
  );
}