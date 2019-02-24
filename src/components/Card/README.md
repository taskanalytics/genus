```react|span-3
showSource: true
---
<Card width={null}>
  <Heading as='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```

```react|span-3
showSource: true
---
<Card>
  <Heading as='h3'>Nice photo</Heading>
  <img src='https://picsum.photos/g/400/200' />
</Card>
```

```react|span-3
showSource: true
---
<Card
  bg="goodDark"
  color="white"
  shadow="good"
  actions={[{
    name: 'Setup',
    action: () => console.log('Clicked Action 1')
  }]}
>
  <Heading as='h3'>Heading</Heading>
  <Text>You can customise card visuals</Text>
</Card>
```

# With actions
```react|span-4
showSource: true
---
<Card
actions={[
  {
    name: 'Setup',
    action: () => console.log('Clicked Action 1')
  }, {
    name: 'Delete',
    action: () => console.log('Clicked Action 2'),
    type: 'destructive',
  }
]}>
  <Heading as='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```
