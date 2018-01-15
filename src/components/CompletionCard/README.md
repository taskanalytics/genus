## Default
```react
<CompletionCard
  name="Website"
  completion="90.2" />
```

## In grid
```react
<Flex wrap>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="Website"
      completion="99.6" />
  </Flex>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="iOS"
      completion="78.5" />
  </Flex>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <CompletionCard
      name="Android"
      completion="56.2" />
  </Flex>
</Flex>
```
