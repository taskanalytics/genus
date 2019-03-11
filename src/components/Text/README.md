```react
showSource: true
---
<Text width={1/2} p={3}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</Text>
```

## Size props
Use `small` and `large` props to set font-size.
```react
showSource: true
---
<Text small>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</Text>
```
```react
showSource: true
---
<Text large>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</Text>
```

## `textAlign`
```react
showSource: true
---
<Text width={1} textAlign='center'>Hello Text</Text>
```

## `muted`
```react
showSource: true
---
<Text width={1} muted>Hello muted text</Text>
```

## `pill`
```react
showSource: true
---
<div>
<Text pill="primary">Primary</Text>
<Text pill="danger">Danger</Text>
<Text pill="dark">Dark</Text>
<Text pill="warning">Warning</Text>
<Text pill="good">Good</Text>
<Text pill={['white', 'dark']}>Good</Text>
</div>
```
