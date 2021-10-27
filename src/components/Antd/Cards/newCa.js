import React from 'react';
import 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class newCa extends React.Component {
  render() {
    return (
      <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    );
  }
}

export default newCa