## Container
Containers are the most basic layout element and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

While containers can be nested, most layouts do not require a nested container.
```react
<Container>
  Content here
</Container>
```

Add the `fluid` prop for a full width container, spanning the entire width of the viewport.
```react
<Container fluid>
  Content here
</Container>
```

## Example grid
Our grid system uses a series of containers, flex and box elements to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
```react
<Container>
  <Flex wrap is="main">
    <Box is="section" w={1/2} p={1}>
      Spans half width
    </Box>
    <Box w={1/2} p={1}>
      Spans half width
    </Box>
    <Box w={1/3} p={1}>
      Spans a third of the width
    </Box>
    <Box w={1/3} p={1}>
      Spans a third of the width
    </Box>
    <Box w={1/3} p={1}>
      Spans a third of the width
    </Box>
  </Flex>
</Container>
```

## Grid with no gutters
```react
<Container>
  <Flex wrap mx={-2}>
    <Box w={1/2} p={1}>1/2</Box>
    <Box w={1/4} p={1}>1/4</Box>
    <Box w={1/4} p={1}>1/4</Box>
    <Box w={1/6} p={1}>1/6</Box>
    <Box w={1/3} p={1}>1/3</Box>
    <Box w={1/6} p={1}>1/6</Box>
    <Box w={1/3} p={1}>1/3</Box>
  </Flex>
</Container>
```

## Flex
Flex elements can receive different properties.

```
<Flex align='center' />
<Flex justify='center' />
<Flex wrap />
<Flex flexDirection='column' />
```

```react
<Flex align="center">
  <Box css={{ width: '128px', height: '128px', backgroundColor: 'aqua' }} />
  <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
</Flex>
```

```react
<Container>
  <Flex>
    <Box>
      Hello
    </Box>
    <Box ml='auto'>
      Flex
    </Box>
  </Flex>
</Container>
```

## Responsive grid
```react
responsive: true
---
<Container>
  <Flex wrap>
    <Box w={[1, 6/12]}>
      Task
    </Box>
    <Box w={[1, 2/12]}>
      Demand
    </Box>
    <Box w={[1, 4/12]}>
      Completion rate
    </Box>
  </Flex>
</Container>
```
