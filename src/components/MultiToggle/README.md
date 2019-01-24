## Basic usage

```react
showSource: true
state: { selected: 'read' }
---
<MultiToggle
  options={[
    {
      name: 'No',
      value: 'no',
      destructive: true,
    }, {
      name: 'Read',
      value: 'read'
    }, {
      name: 'Write',
      value: 'write'
    }, {
      name: 'Admin',
      value: 'admin'
    }
  ]}
  selectedOption={state.selected}
  onSelectOption={(value) => setState({ selected: value })} />
```

## Block element

```react
state: { selected: 'enable' }
showSource: true
---
<Box bg="lightgrey" p={3} width={.5}>
  <MultiToggle
    block
    options={[
      { name: 'Enable', value: 'enable' },
      { name: 'Disable', value: 'disable', destructive: true },
    ]}
    selectedOption={state.selected}
    onSelectOption={(value) => setState({ selected: value })} />
</Box>
```
