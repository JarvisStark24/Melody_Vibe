import { twMerge } from "tailwind-merge";

interface BOxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BOxProps> = ({children,className}) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  )
}

export default Box
