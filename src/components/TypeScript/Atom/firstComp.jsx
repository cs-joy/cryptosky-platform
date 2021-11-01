import React from 'react';
import { ThemeProvider, AspectRatio, Image } from '@lapidist/components';

const firstCom = () => (
  <ThemeProvider>
      <AspectRatio ratio={{ x: 16, y: 9 }}>
          <Image src="cat.jpg" alt="A pretty cat" />
      </AspectRatio>
  </ThemeProvider>
);

export default firstCom
