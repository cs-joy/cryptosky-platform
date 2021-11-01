import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import img from './images/left-side.jpeg'
import img2 from './images/right-side.png'

const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src={img} />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <h3>Heading of this template</h3>
        <Image src={img} />
        <p>.............................</p>
        <p>...........................</p>
        <p>............................</p>
        <p>..........................</p>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleStackable
