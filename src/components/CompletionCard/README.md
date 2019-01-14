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
    description: 'completion rate'
  }}
  responses={{
    value: 2192,
    description: 'responses'
  }} />
```

## In grid
```react
<Flex wrap>
  <Flex width={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="Website"
      completion={{
        value: 99.6,
        description: 'completion rate'
      }}
      responses={{
        value: 9999,
        description: 'responses'
      }} />
  </Flex>
  <Flex width={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="App"
      completion={{
        value: 78.5,
        description: 'completion rate'
      }}
      responses={{
        value: 9999,
        description: 'responses'
      }} />
  </Flex>
  <Flex width={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="Android"
      completion={{
        value: 56.2,
        description: 'completion rate'
      }}
      responses={{
        value: 9999,
        description: 'responses'
      }} />
  </Flex>
</Flex>
```
