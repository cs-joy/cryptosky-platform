import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import source from '../basic/images/wireframe/user.png'

const GridExampleDividedNumber = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
      <Grid.Column>
        <Image src={source} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedNumber
