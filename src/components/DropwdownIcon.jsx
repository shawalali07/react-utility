export const DropdownIcon = ({ color = '#383D43', onClick, rotate }) => (
  <svg
    style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)' }}
    onClick={onClick}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 8.73064L12 14.5511L18 8.73064'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
