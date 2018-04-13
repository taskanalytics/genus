Form controls

```react|span-3
showSource: true
---
<Input placeholder="Placeholder" label="Email" />
```

```react|span-3
---
<Flex wrap flexDirection="column" p={4} bg="white">
  <Box pb={3}>
    <Input placeholder="Please select a username" label="Username" />
  </Box>
  <Box pb={3}>
    <Input placeholder="What is your work email?" type="email" label="Email" error="Badly formatted email" />
  </Box>
</Flex>
```

