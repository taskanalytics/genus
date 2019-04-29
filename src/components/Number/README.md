```code
Required:

[value]                       Numeric value

Optional:

[description]                 Label for number
[suffix]                      Denominator for number, like %
[prefix]                      Prefix that appears right before the number, +/- for example
[size={small,large,display}]  Render either a small or a large variant
```

```react|span-3
showSource: true
---
<Number value={2} description={"Types"} />
```
```react|span-3
showSource: true
---
<Number value={12092} description={"Types"} />
```

## Size prop

```react|span-3
showSource: true
---
<Flex justifyContent="space-evenly">
<Number size="small" value={2} />
<Number size="small" value={2} description="Types" />
<Number size="small" value={25192} description="Types" />
</Flex>
```

```react|span-3
showSource: true
---
<Flex justifyContent="space-evenly">
<Number size="large" value={2} />
<Number size="large" value={2} description="Types" />
<Number size="large" value={25192} description="Types" />
</Flex>
```

```react|span-6
showSource: true
---
<Flex justifyContent="space-evenly">
<Number size="display" value={2} />
<Number size="display" value={2} description="Types" />
<Number size="display" value={25192} description="Types" />
</Flex>
```

## Suffix & prefix
Since percentages are used widely, they have their own dedicated component. For everything else, theres the `suffix` prop

```react|span-3
showSource: true
---
<Flex justifyContent="space-evenly">
<Number prefix="+" suffix="℃" size="large" value={25} description="Degrees" />
<Number prefix="+" suffix="℃" size="large" value={25} />
</Flex>
```
