As a living styleguide, Genus also delivers a React component library as well as generic CSS-in-JS variables for drawing things. You can easily setup and use these components in a project:

```code|lang-bash,span-3
yarn add @taskanalytics/genus
```

You can now pull in specific components and/or styles to build custom UIs:

```code|lang-javascript,span-4
import React, {Component} from 'react'
import {Container, Button, ProgressBar} from '@taskanalytics/genus'

export default class MyUI extends Component {
  static state = {
    value: 50,
  }

  render () {
    const {value} = this.state
    const randomizeValue = () => {
      this.setState({ value: parseInt(Math.random() * 100) })
    }

    return (
      <Container>
        <Button primary onClick={randomizeValue}>Random value</Button>
        <ProgressBar value={value} />
      </Container>
    )
  }
}
```

```react|span-2
state: {value: 50}
---
<Container>
  <Box p={2}>
    <ProgressBar value={state.value} />
  </Box>
  <Box p={2} mt={2}>
    <Button block primary onClick={
      () => setState({ value: parseInt(Math.random() * 100) })
    }>
      Random value
    </Button>
  </Box>
</Container>
```
