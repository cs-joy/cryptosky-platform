import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
const src2 = '/Images/ReddCoin_CSP.png'

const GridColumnWidth = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src={src2} height={100} width={200} alt='banner' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridColumnWidth