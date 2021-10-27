import React from 'react';
import 'antd/dist/antd.css';
import './de.css';
import { Divider } from 'antd';

class NeAnt extends React.Component {
  render() {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider dashed />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
      </>
    );
  }
}

export default NeAnt
