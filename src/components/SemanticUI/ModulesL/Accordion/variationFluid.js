import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Answer from './DesContent'

const Answer2 = <p>
  We will assist you to manage identify result-driving strategies and implement your project campaigns as well as will monitor results and optimize campaigns. We integrate strategies for the best results and save your time and money by bundling services and pride ourselves on being there when you need us, our support team will be on hand for such occasions.
</p>

const Answer3 = <p>
  We help clients implement and manage marketing strategies to achieve their business goals. Here’s an overview of what we will do for your business :
</p>;
<p>
  <li>Identify valuable marketing solutions :</li>
  we work with clients to pinpoint marketing strategies that will drive the best business results with the purpose of maximising return of investment (ROI).
  <li>Implement marketing solutions :</li>
  we execute and manage marketing campaigns for clients.
  <li>Evaluate marketing result :</li>
  we will monitor marketing efforts and use data to improve campaign results.
</p>

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is CryptoSky?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <Answer />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Why choose us for management and development of your project?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          {Answer2}
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do we work?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          {Answer3}
        </Accordion.Content>
      </Accordion>
    )
  }
}
