```react
state: {isOpened: true}
---
<div>
  
  <button onClick={() => setState({isOpened: !state.isOpened})}>
    Toggle dropdown
  </button>

  <Dropdown show={state.isOpened}>
    <Option onClick={() => console.log('Clicked Option 1')}>Option 1</Option>
    <Option onClick={() => console.log('Clicked Option 2')}>Option 2</Option>
    <Option onClick={() => console.log('Clicked Option 3')}>Option 3</Option>
    <Option disabled onClick={() => console.log('Clicked Option 4')}>Option 4</Option>
    <Separator />
    <Option onClick={() => console.log('Clicked Option 5')}>Option 5</Option>
    <Option onClick={() => console.log('Clicked Option 6')}>Option 6</Option>
    <Option onClick={() => console.log('Clicked Option 7')}>Option 7</Option>
    <Separator />
    <Option destructive onClick={() => console.log('Clicked Delete')}>Delete</Option>
  </Dropdown>
  
</div>
```
