import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className="py-4 px-3 bg-cyan-700 hover:bg-cyan-600 transition-colors focus:ring-2 ring-white rounded font-semibold text-white text-sm w-full">
      {children}
    </Comp>
  );
};
