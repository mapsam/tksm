import type { ReactNode } from 'react';
import Block from './Block';

interface ContentProps {
  name: string,
  img?: string,
  summary?: string,
  children?: ReactNode,
}

export default function Content(props: ContentProps) {
  return (
    <div className="content">
      <Block id={props.name} backgroundClass="color-light-bg">
        <h1 className="title">{props.name}</h1>
        {props.img &&
          <div className="title-image-container">
            <div className="title-image" style={{ backgroundImage: `url('/${props.img}')`}}></div>
          </div>
        }
        {props.summary &&
          <p>{props.summary}</p>
        }
      </Block>

      {props.children}
    </div>
  );
}