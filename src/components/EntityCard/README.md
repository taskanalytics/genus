## With avatar

```react
showSource: true
span: 2
---
<EntityCard
  name="Acme Corporation"
  avatar="http://via.placeholder.com/64x64"
  description="2 surveys" />
```

```react
showSource: true
span: 2
---
<EntityCard
  name="Long entity names should be truncated"
  actions={[{type:'Heading', name:'An action'}]}
  description="2 surveys" />
```

## No avatar

```react
showSource: true
---
<EntityCard
  name="NoAvatar Corporation"
  description="2 surveys" />
```
