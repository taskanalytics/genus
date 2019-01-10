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
  <Flex wrap>
    <Box width={1/2} p={1}>
      Spans half width
    </Box>
    <Box width={1/2} p={1}>
      Spans half width
    </Box>
    <Box width={1/3} p={1}>
      Spans a third of the width
    </Box>
    <Box width={1/3} p={1}>
      Spans a third of the width
    </Box>
    <Box width={1/3} p={1}>
      Spans a third of the width
    </Box>
  </Flex>
</Container>
```

## Space
The space utility converts shorthand margin and padding props to margin and padding CSS declarations. Numbers from 0-4 are converted to values on the spacing scale. Negative values can be used for negative margins. Numbers greater than 4 are converted to raw pixel values. String values are passed as raw CSS values. And array values are converted into responsive values.

Margin and padding props follow a shorthand syntax for specifying direction.

`m:` margin
`mt:` margin-top
`mr:` margin-right
`mb:` margin-bottom
`ml:` margin-left
`mx:` margin-left and margin-right
`my:` margin-top and margin-bottom
`p:` padding
`pt:` padding-top
`pr:` padding-right
`pb:` padding-bottom
`pl:` padding-left
`px:` padding-left and padding-right
`py:` padding-top and padding-bottom

## Responsive styles
All core function props accept arrays as values for mobile-first responsive styles.
```
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

## `is`
The `is` prop allows the element's HTML tag to be changed on a per-instance basis. This is helpful for ensuring HTML semantics and expanding upon the core set of Genus primitive components.
```react
<Container as="main">
  <Flex wrap as="section">
    <Box as="article" width={1/2} p={1}>
      I'm an article
    </Box>
    <Box as="article" width={1/2} p={1}>
      I'm an article
    </Box>
  </Flex>
</Container>
```

## Grid with no gutters
```react
<Container>
  <Flex wrap mx={-2}>
    <Box width={1/2} p={1}>1/2</Box>
    <Box width={1/4} p={1}>1/4</Box>
    <Box width={1/4} p={1}>1/4</Box>
    <Box width={1/6} p={1}>1/6</Box>
    <Box width={1/3} p={1}>1/3</Box>
    <Box width={1/6} p={1}>1/6</Box>
    <Box width={1/3} p={1}>1/3</Box>
  </Flex>
</Container>
```

## Flex
Flex elements can receive different props.

```
<Flex alignItems='center' />
<Flex justifyContent='center' />
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
