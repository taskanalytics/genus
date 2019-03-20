## Basic usage

```react
showSource: true
state: { selected: 'read' }
---
<MultiToggle
  options={[
    {
      name: 'No access',
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

## Explicit direction

```react
state: { selected: 'ipsum' }
showSource: true
---
<Box bg="lightgrey" p={3} width={.5}>
  <MultiToggle
    direction="column"
    options={[
      { name: 'Lorem ipsum dolor sit amet', value: 'lorem' },
      { name: 'Ipsum', value: 'ipsum' },
      { name: 'Dolor', value: 'dolor' },
      { name: 'Sit', value: 'sit' },
      { name: 'Amet', value: 'amet' },
      { name: 'Disable', value: 'disable', destructive: true },
    ]}
    selectedOption={state.selected}
    onSelectOption={(value) => setState({ selected: value })} />
</Box>
```
