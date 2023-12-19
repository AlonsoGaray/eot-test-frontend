import React from 'react'

interface Props {
  filler: string
}

export const DecreaseIcon = ({ filler }: Props) => (
  <svg viewBox='-0.5 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#000000' strokeWidth='2.25'>
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
    <g id='SVGRepo_iconCarrier'>
      <path
        d='M18.65 12.5H5.34998'
        stroke={filler}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 22.56C17.556 22.56 22.06 18.056 22.06 12.5C22.06 6.94402 17.556 2.44 12 2.44C6.44402 2.44 1.94 6.94402 1.94 12.5C1.94 18.056 6.44402 22.56 12 22.56Z'
        stroke={filler}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)
