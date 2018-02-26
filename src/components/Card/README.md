```react|span-3
<Card>
  <Heading is='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```

# With actions
```react|span-3
<Card
actions={[
  {
    name: 'Setup',
    action: () => console.log('Clicked Action 1')
  },
  {
    name: 'Users',
    action: () => console.log('Clicked Action 1')
  },
  {
    name: 'Delete',
    action: () => console.log('Clicked Action 2'),
    type: 'destructive',
  }
]}>
  <Heading is='h3'>Heading</Heading>
  <Text>Anything goes.</Text>
</Card>
```
