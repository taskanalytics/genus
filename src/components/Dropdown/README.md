```react
state: {toggle: true}
---
<div>
  <Dropdown
    renderTrigger={props => {
      return <button {...props}>Toggle it</button>
    }}
    actions={[
      {
        name: 'Option 1',
        type: '',
        action: () => console.log('Clicked Option 1'),
      },
      {
        name: 'Option 2',
        type: '',
        action: () => console.log('Clicked Option 2'),
      },
      {
        name: 'Option 3',
        type: '',
        action: () => console.log('Clicked Option 3'),
      },
      {
        name: 'Option 4',
        type: '',
        action: () => console.log('Clicked Option 4'),
      },
      {
        type: 'separator',
      },
      {
        name: 'Heading',
        type: 'heading',
      },
      {
        name: 'Option 5',
        type: '',
        action: () => console.log('Clicked Option 5'),
      },
      {
        name: 'Delete',
        type: 'destructive',
        action: () => console.log('Delete'),
      }
    ]} />
  
</div>
```
