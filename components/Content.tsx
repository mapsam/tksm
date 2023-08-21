import type { ReactNode } from 'react';
import Block from './Block';
import Image from 'next/image';

interface ContentProps {
  name: string,
  img?: any,
  imgHover?: any,
  summary?: string,
  children?: ReactNode,
}

export default function Content(props: ContentProps) {
  return (
    <div className="content">
      <Block id={props.name} backgroundClass="color-light-bg">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: props.name}}></h1>
        {props.img &&
          <div className="title-image-container">
            <Image src={props.img} placeholder="blur" layout="responsive" />
          </div>
        }
        {props.summary &&
          <p dangerouslySetInnerHTML={{ __html: props.summary }}></p>
        }
      </Block>

      {props.children}
    </div>
  );
}