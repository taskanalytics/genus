```code
[name]                                The name/title for the card
[subheading]                          A subheading placed after [name] in a h3. Wrap in <Text> to control rendering
[actions]                             Actions as supported by the Card component
[completion: {value, description}]    An object with a value/description pair for the completion rate
[response: {value, description}]      An object with a value/description pair for the response
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
  gridAutoRows="1fr"
  gridTemplateColumns={[
    '1fr',
    'repeat(2, 1fr)',
    'repeat(3, 1fr)',
  ]}
>
  <CompletionCard
    name="Website"
    subheading={<Text color="muted">Discovery survey</Text>}
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
    subheading={<Text color="muted">Task survey</Text>}
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
    actions={[
      {
        name: 'test',
        action: ()  => console.log('hey')
      }
    ]}
    name="A rather longish name here yes"
    subheading={<Text fontWeight={500}>Task survey</Text>}
    completion={{
      value: 56.2,
      description: 'completion'
    }}
    responses={{
      value: 9999,
      description: 'responses'
    }}
  />
  <CompletionCard
    name="Website"
    subheading={<Text color="muted">Task survey</Text>}
    completion={{
      value: 0,
      description: 'completion'
    }}
    responses={{
      value: 0,
      description: 'responses'
    }}
  />
</Grid>
```
