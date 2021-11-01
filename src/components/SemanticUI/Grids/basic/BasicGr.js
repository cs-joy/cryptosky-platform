import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import source from './images/wireframe/user.png'

const columns = _.times(16, (i) => (
  <Grid.Column key={i}>
    <Image src={source} />
  </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

export default GridExampleGrid
