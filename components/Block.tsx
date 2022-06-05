import type { ReactNode } from 'react';

interface BlockProps {
  id: string,
  style?: Object,
  children?: ReactNode
}

const defaultStyle = {
  backgroundColor: '#ffffff'
}

export default function Block(props: BlockProps) {
  return (
    <div id={props.id} className="block" style={props.style || defaultStyle}>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}