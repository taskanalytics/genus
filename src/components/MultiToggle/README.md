```code
state: { selected: 'no' }
```

```react
state: { selected: 'no' }
---
<MultiToggle
  options={[
    {
      name: 'No',
      value: 'no',
      destructive: true,
    },
    {
      name: 'Read',
      value: 'read'
    },
    {
      name: 'Write',
      value: 'write'
    },
    {
      name: 'Admin',
      value: 'admin'
    }
  ]}
  selectedOption={state.selected}
  onSelectOption={(value) => setState({ selected: value })} />
```

```react
state: { selected: 'no' }
responsive: true
---
<MultiToggle
  options={[
    {
      name: 'No',
      value: 'no',
      destructive: true,
    },
    {
      name: 'Read',
      value: 'read'
    },
    {
      name: 'Write',
      value: 'write'
    },
    {
      name: 'Admin',
      value: 'admin'
    }
  ]}
  selectedOption={state.selected}
  onSelectOption={(value) => setState({ selected: value })} />
```

```code
state: { selected: 'read' }
```

```react
state: { selected: 'enable' }
---
<MultiToggle
  options={[
    {
      name: 'Enable',
      value: 'enable',
    },
    {
      name: 'Disable',
      value: 'disable',
      destructive: true,
    }
  ]}
  selectedOption={state.selected}
  onSelectOption={(value) => setState({ selected: value })} />
```
