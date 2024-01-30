import { IconProps } from "assests"

const Logo = ({ className }: IconProps) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
         <path d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z" fill="#7C5DFA" />
         <mask id="mask0_0_683" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
            <path d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z" fill="white" />
         </mask>
         <g mask="url(#mask0_0_683)">
            <path d="M72 36.3496H20C8.95431 36.3496 0 45.3039 0 56.3496V88.3496C0 99.3953 8.95431 108.35 20 108.35H72V36.3496Z" fill="#9277FF" />
         </g>
         <path fillRule="evenodd" clipRule="evenodd" d="M29.0461 23.2385C24.8361 25.6164 22 30.087 22 35.21C22 42.8261 28.268 49.0002 36 49.0002C43.732 49.0002 50 42.8261 50 35.21C50 30.087 47.1639 25.6164 42.9539 23.2385L36.4463 36.1249L36 37.0087L35.5537 36.1249L29.0461 23.2385ZM29.9339 22.778C31.7691 21.9076 33.8267 21.4198 36 21.4198C38.1733 21.4198 40.2309 21.9076 42.0661 22.778L36 34.7903L29.9339 22.778Z" fill="white" />
      </svg>
   )
}

export default Logo
