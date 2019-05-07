Form controls

```react
showSource: true
---
<Flex flexWrap width={600} flexDirection="column" p={4} bg="white">
  <Box pb={3}>
    <Input 
      placeholder="Username (default check mark) "
      fontSize={44}
      color="black"
      label={[
        'Username',
        <Text small color="red">Required</Text>,
      ]}
    />
  </Box>
  <Box pb={3}>
    <Input placeholder="No label" />
  </Box>
  <Box pb={3}>
    <Input 
      placeholder="Username (custom check mark)"
      label="Username"
      renderAfter={ ({ value }) => (
        value.length > 2 && <Text color="green">✓</Text>
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
    >
      <option>Option A</option>
      <option>Option B</option>
    </Select>
    <Select 
      placeholder="Well" 
      label="Email"
      fontSize={3}
      caretSize={14}
    >
      <option>Option A</option>
      <option>Option B</option>
    </Select>
  </Box>
  <Box pb={3}>
    <CheckBox label="This is a checkbox" />
  </Box>
  <Box pb={3}>
    <Radio name="radio1" label="This is a radio" />
    <Radio name="radio1" label="This is a radio 2" />
  </Box>
</Flex>
```

