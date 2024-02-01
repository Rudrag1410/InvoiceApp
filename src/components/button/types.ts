import { IconsType } from "assests/types"

export enum Variant {
   Primary = 'primary',
   Secondary = 'secondary',
   Teritiary = 'teritiary',
   Red = 'red',
   White = 'white',
   Black = 'black'

}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   onClick?: () => void
   variant?: Variant
   children?: React.ReactNode
   icon?: IconsType
   size?: "extraLarge" | "large" | "medium" | "small"
}
