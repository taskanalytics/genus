```react
showSource: true
---
<EmptyState
  heading='You don’t have any Capture Forms yet'
  actions={[
    <Button primaryinverted>Create your first Capture Form</Button>,
    <Button>Learn more</Button>,
  ]}
>
  <Text>Create Capture Forms to bring data into Task Analytics.</Text>
</EmptyState>
```

## No actions
```react
<EmptyState
  heading='You don’t have any Capture Forms yet'
>
  <Text>To get reports, save some presets for your Capture Forms. Learn how in <a href="#">Working with presets</a>.</Text>
</EmptyState>
```
