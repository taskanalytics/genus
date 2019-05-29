### Props

```table
span: 6
rows:
  - Prop: '**actions**'
    Type: array | function
    Description: Dropdown action items
  - Prop: 'action**.name**'
    Type: string
    Description: The rendered text for an action item
  - Prop: 'action**.type**'
    Type: string [item, destructive, separator, heading, component]
    Description: You can render headings and separators, but also indicate that a rendering function should be used to render a component
  - Prop: 'action**.action**'
    Type: function
    Description: 'Function to call on click for `item` type action items'
  - Prop: 'action**.props**'
    Type: object
    Description: Pass extra props to the items styled wrapper
  - Prop: 'action**.render**'
    Type: function
    Description: Take full control of rendering action item
  - Prop: '**renderTrigger**'
    Type: function
    Description: A function to render the trigger element (defaults to a simple button)
  - Prop: '**dialogStyles**'
    Type: object
    Description: Inject custom CSS onto the dropdown content wrapper
  - Prop: '**right**'
    Type: bool
    Description: Toggle crude float content wrapper towards right
```

## Examples

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
        props: {
          fontSize: 3,
        },
      }
    ]} />
</Box>
```

```react
span: 3
showSource: true
---
<Box width={1} p={2}>
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
<Box width={1} p={2}>
  <Dropdown
    renderTrigger={props => {
      return <Button compact {...props}>Toggle it</Button>
    }}
    dialogStyles={{width: 600}}
    actions={({close, Item}) => {
      return (
        <Flex flexDirection="row">
          <Flex flexDirection="column" width={1/2}>
            <Item onClick={close}>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Item>
            <Item>
              <Heading m={0} fontSize={3}>A styled item</Heading>
              <Text muted>A beautifully styled item</Text>
            </Item>
          </Flex>
          <Flex flexDirection="column" width={1/2}>
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
