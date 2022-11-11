import React from 'react';

function BaruvasLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80.122" height="92" viewBox="0 0 70.122 82" className='baruvasLogo'>
      <defs>
        <filter id="Path_25" x="0" y="0" width="70.903" height="81.731" filterUnits="userSpaceOnUse">
          <feOffset dx="5" dy="6" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood floodColor="#6e6e6e" floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rectangle_2" x="9.122" y="8" width="71" height="84" filterUnits="userSpaceOnUse">
          <feOffset dx="5" dy="6" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-2"/>
          <feFlood floodColor="#6e6e6e" floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur-2"/>
          <feComposite in="SourceGraphic"/>
        </filter>
        <filter id="Rectangle_1" x="5.122" y="4" width="70" height="83" filterUnits="userSpaceOnUse">
          <feOffset dx="5" dy="6" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur-3"/>
          <feFlood floodColor="#6e6e6e" floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur-3"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="BaruvasLogo" transform="translate(4 3)" style={{isolation: "isolate"}}>
        <g transform="matrix(1, 0, 0, 1, -4, -3)" filter="url(#Path_25)" style={{mixBlendMode: "multiply", isolation: "isolate"}}>
          <path id="Path_25-2" data-name="Path 25" d="M1.547,0H51.356A1.547,1.547,0,0,1,52.9,1.547V62.184a1.547,1.547,0,0,1-1.547,1.547H1.547A1.547,1.547,0,0,1,0,62.184V1.547A1.547,1.547,0,0,1,1.547,0Z" transform="translate(4 3)" fill="#ff8df2"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -4, -3)" filter="url(#Rectangle_2)" style={{mixBlendMode: "multiply", isolation: "isolate"}}>
          <rect id="Rectangle_2-2" data-name="Rectangle 2" width="53" height="66" rx="5" transform="translate(13.12 11)" fill="#b48dff"/>
        </g>
        <g transform="matrix(1, 0, 0, 1, -4, -3)" filter="url(#Rectangle_1)">
          <g id="Rectangle_1-2" data-name="Rectangle 1" transform="translate(9.12 7)" fill="#fff" stroke="#262626" strokeWidth="5">
            <rect width="52" height="65" stroke="none"/>
            <rect x="2.5" y="2.5" width="47" height="60" fill="none"/>
          </g>
        </g>
        <text id="B" transform="translate(15.122 54)" fill="#262626" fontSize="50" fontFamily="Optima-Bold, Optima" fontWeight="700"><tspan x="0" y="0">B</tspan></text>
      </g>
    </svg>
  )
}
export default BaruvasLogo;