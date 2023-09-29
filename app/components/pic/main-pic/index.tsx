import Image from 'next/image';
import * as React from 'react';


export function MainPic () {
  return (
    <div className=" portrait:hidden w-1/3 aspect-video absolute left-8 bottom-8">
      <Image src="/ai-bg.png" fill alt="ai-bg" />
    </div>
  );
}
