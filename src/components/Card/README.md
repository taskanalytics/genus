```react|span-3
showSource: true
---
<Card>
  <Heading is='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```

```react|span-3
showSource: true
---
<Card>
  <Heading is='h3'>Nice photo</Heading>
  <img src='https://picsum.photos/g/400/200' />
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
    action: (e) => console.log('Clicked Action 2', e),
    type: 'destructive',
  }
]}>
  <Heading is='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```
