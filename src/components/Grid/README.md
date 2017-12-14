## Example grid
```react
<Grid>
  <Row>
    <Box w={1/2} p={1}>
      1/2
    </Box>
    <Box w={1/2} p={1}>
      1/2
    </Box>
  </Row>
  <Row>
    <Box w={1/3} p={1}>
      1/3
    </Box>
    <Box w={1/3} p={1}>
      1/3
    </Box>
    <Box w={1/3} p={1}>
      1/3
    </Box>
  </Row>
</Grid>
```

## Semantic grid
```react
<Grid is="main">
  <Row is="section">
    <Box is="article" w={1/2} p={1}>
      1/2
    </Box>
    <Box is="article" w={1/2} p={1}>
      1/2
    </Box>
  </Row>
  <Row is="section">
    <Box is="article" w={1/3} p={1}>
      1/3
    </Box>
    <Box is="article" w={1/3} p={1}>
      1/3
    </Box>
    <Box is="article" w={1/3} p={1}>
      1/3
    </Box>
  </Row>
</Grid>
```

## Grid with no gutters
```react
<Grid>
  <Row mx={-2}>
    <Box w={1/2} p={1}>1/2</Box>
    <Box w={1/4} p={1}>1/4</Box>
    <Box w={1/4} p={1}>1/4</Box>
  </Row>
  <Row mx={-2}>
    <Box w={1/6} p={1}>1/6</Box>
    <Box w={1/3} p={1}>1/3</Box>
    <Box w={1/6} p={1}>1/6</Box>
    <Box w={1/3} p={1}>1/3</Box>
  </Row>
</Grid>
```

## Media object
```react
<Flex
  css={{
    alignItems: 'center'
  }}>
  <Box m2>
    <img
      width={128}
      height={128}
      src='http://placehold.it/256/ff6347/fff?text=Axs'
      />
  </Box>
  <Box w={1}>
    <Heading>Hello</Heading>
    <Text>Try changing the example code below</Text>
  </Box>
</Flex>
```

## Flex
```react
<Grid>
  <Row
    css={{
      backgroundColor: 'aqua'
    }}>
    <Box px2 css={{backgroundColor:'red'}}>
      Hello
    </Box>
    <Box ml='auto'>
      Flex
    </Box>
  </Row>
</Grid>
```

## Responsiveness
```react
responsive: true
---
<Grid>
  <Row>
    <Box w={[ 1, 1/2 ]} p={1}>Responsive</Box>
    <Box w={[ 1, 1/2 ]} p={1}>Responsive</Box>
    <Box w={[ 1, 1/2 ]} p={1}>Responsive</Box>
  </Row>
</Grid>
```

## Task list grid
```react
responsive: true
---
<Grid>
  <Row>
    <Box w={[1, 6/12]}>
      Task
    </Box>
    <Box w={[1, 2/12]}>
      Demand
    </Box>
    <Box w={[1, 4/12]}>
      Completion rate
    </Box>
  </Row>
</Grid>
```
