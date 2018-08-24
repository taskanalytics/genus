```code
[name]                                The name/title for the card
[description]                         Description for the card
[actions]                             An array of actions passed to the <Dropdown>
[avatar]                              A link to an image to act as the avatar
[render: ({ children })]              A render function to modify the content of the card (i.e. wrap it in a link)
```

## With avatar

```react
showSource: true
span: 2
---
<EntityCard
  name="Acme Corporation"
  avatar="http://via.placeholder.com/64x64"
  description="2 surveys" />
```

```react
showSource: true
span: 2
---
<EntityCard
  name="Long entity names should be truncated"
  actions={[{type:'Heading', name:'An action'}]}
  description="2 surveys" />
```

## No avatar

```react
showSource: true
span: 3
---
<EntityCard
  name="NoAvatar Corporation"
  description="2 surveys" />
```

```react
showSource: true
span: 3
---
<EntityCard
  name="Wrap content in link"
  render={(p) => <Box w={1}><a href="https://google.com" {...p} /></Box>}
  actions={[{type:'heading', name:'An action'}]}
  description="2 surveys" />
```
