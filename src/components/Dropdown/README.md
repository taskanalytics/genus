```react
state: {toggle: true}
span: 3
showSource: true
---
<Box>
  <Dropdown
    renderTrigger={props => {
      return <button {...props}>Toggle it</button>
    }}
    actions={[
      {
        name: 'Option 1',
        type: '',
        action: () => console.log('Clicked Option 1'),
      }, {
        name: 'Option 2',
        type: '',
        action: () => console.log('Clicked Option 2'),
      },
      { type: 'separator' },
      { name: 'Heading', type: 'heading' },
      {
        name: 'Delete',
        type: 'destructive',
        action: () => console.log('Delete'),
      }
    ]} />
</Box>
```

```react
state: {toggle: true}
span: 3
showSource: true
---
<Box w={1} p={2}>
  <Dropdown
    renderTrigger={props => {
      return <Button compact {...props}>Toggle it</Button>
    }}
    dialogStyles={{width: 400}}
    actions={[
      {
        render: ({ onClick, props }) => {
          return (
            <Box>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Box>
          )
        },
      }, {
        name: 'Option 2',
        action: () => console.log('Clicked Option 2'),
      },
    ]} />
</Box>
```


# Taking full control of the rendered actions

```react
state: {toggle: true}
showSource: true
---
<Box w={1} p={2}>
  <Dropdown
    renderTrigger={props => {
      return <Button compact {...props}>Toggle it</Button>
    }}
    dialogStyles={{width: 600}}
    actions={({close, Item}) => {
      return (
        <Flex flexDirection="row">
          <Flex flexDirection="column" w={1/2}>
            <Item onClick={close}>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Item>
            <Item>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Item>
          </Flex>
          <Flex flexDirection="column" w={1/2}>
            <Item>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Item>
          </Flex>
        </Flex>
      )
    }} />
</Box>
```
