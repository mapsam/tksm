import type { ReactNode } from 'react';

interface BlockProps {
  id: string,
  style?: Object,
  children?: ReactNode,
  backgroundClass?: string
}

const defaultStyle = {
  backgroundColor: '#ffffff'
}

export default function Block(props: BlockProps) {
  return (
    <div id={props.id} className={`block ${props.backgroundClass}`} style={props.style || defaultStyle}>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}