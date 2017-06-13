import React from 'react'
import { Button } from 'antd'

async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

class Root extends React.PureComponent {
  state = {
    now: ''
  }

  async componentDidMount() {
    await delay(2000)
    this.setState({ now: new Date().toLocaleString() })
  }

  render() {
    return (
      <div>
        <h1>Hello React Hot Loader! <span> {this.state.now}</span></h1>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="primary" shape="circle" icon="search" />
        </div>
      </div>
    )
  }
}

export default Root
