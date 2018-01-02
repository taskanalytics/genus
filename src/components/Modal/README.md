```react
state: {showModal: false}
---
<div>
  <button onClick={() => setState({showModal: true})}>Trigger modal</button>
  <Modal
    isOpen={state.showModal}
    close={() => setState({showModal: false})}
    title='Title'>
    <Text>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</Text>
  </Modal>
</div>
```
