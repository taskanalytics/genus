Form controls

```react
showSource: true
---
<Flex wrap w={600} flexDirection="column" p={4} bg="white">
  <Box pb={3}>
    <Input 
      placeholder="Please select a username"
      label="Username"
      renderAfter={ ({ value: { length } }) => (
        length > 2 && <Text color="green">✓</Text>
      )}
    />
  </Box>
  <Box pb={3}>
    <Input 
      placeholder="What is your work email?" 
      type="email"
      label="Email"
      error="Badly formatted email"
    />
  </Box>
  <Box pb={3}>
    <PasswordInput 
      placeholder="Select a secure password" 
      label="Password"
    />
  </Box>
  <Box pb={3}>
    <Select 
      placeholder="What is your work email?" 
      label="Email"
      renderAfter={ () => '' }
    >
      <option>Option A</option>
      <option>Option B</option>
    </Select>
  </Box>
  <Box pb={3}>
    <CheckBox label="This is a checkbox" />
  </Box>
</Flex>
```

