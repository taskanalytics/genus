### Props
```code
[actions: [{name, type, action}]]       Actions can be an array
[actions: props => {}]                  Or actions can be a render function
[renderTrigger: props => {}]            Render function for rendering the trigger
[dialogStyles: {}]                      An object with CSS to apply to the dialog element
[right]                                 Attempt to position the dropdown from the right
```

## Variations

```react
span: 3
showSource: true
---
<Box>
  <Dropdown
    actions={[
      {
        name: 'Option 1',
        action: () => console.log('Clicked Option 1'),
      }, {
        name: 'Option 2',
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
span: 3
showSource: true
---
<Box w={1} p={2}>
  <Dropdown
    right
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
