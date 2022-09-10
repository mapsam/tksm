import type { ReactNode } from 'react';
import { useState } from 'react';
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
  const [ hoverImage, setHoverImage ] = useState(false);

  function toggleHover(state) {
    if (props.imgHover) {
      setHoverImage(state);
    }
  }

  return (
    <div className="content">
      <Block id={props.name} backgroundClass="color-light-bg">
        <h1 className="title">{props.name}</h1>
        {props.img &&
          <div
            className="title-image-container"
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            onTouchStart={() => toggleHover(true)}
            onTouchEnd={() => toggleHover(false)}>
              {!hoverImage && <Image src={props.img} placeholder="blur" layout="responsive" /> }
              {hoverImage && <Image src={props.imgHover || props.img} placeholder="blur" layout="responsive" /> }
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