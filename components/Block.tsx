import type { ReactNode } from 'react';

interface BlockProps {
  id: string,
  background?: string,
  children?: ReactNode
}

const defaultColor: string = '#ffffff';

export default function Block(props: BlockProps) {
  return (
    <div id={props.id} className="block" style={{ backgroundColor: props.background || defaultColor }}>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}