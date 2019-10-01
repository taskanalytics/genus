```code
[name]                                The name/title for the card
[completion: {value, description}]    An object with a value/description pair for the completion rate
[response: {value, description}]      An object with a value/description pair for the response
[render: ({ children })]              A render function to modify the content of the card (i.e. wrap it in a link)
```

## Default

```react
span: 3
showSource: true
---
<CompletionCard
  name="Website"
  completion={{
    value: 90.2,
    description: 'completion'
  }}
  responses={{
    value: 2192,
    description: 'responses'
  }} />
```

## In grid

```react
<Grid
  gridGap={2}
  grid={[
    "auto-flow / 1fr",
    null,
    "auto-flow / repeat(3, 1fr)",
  ]}
>
  <CompletionCard
    name="Website"
    completion={{
      value: 99.6,
      description: 'completion'
    }}
    responses={{
      value: 9999,
      description: 'responses'
    }}
  />
  <CompletionCard
    name="App"
    completion={{
      value: 78.5,
      description: 'completion'
    }}
    responses={{
      value: 9999,
      description: 'responses'
    }}
  />
  <CompletionCard
    name="A rather long name here yes"
    completion={{
      value: 56.2,
      description: 'completion'
    }}
    responses={{
      value: 9999,
      description: 'responses'
    }}
  />
</Grid>
```
