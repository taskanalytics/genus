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

## Small

```react|span-3
showSource: true
---
<Number size="small" value={2} description={"Types"} />
```
```react|span-3
showSource: true
---
<Number size="small" value={12092} description={"Types"} />
```

## Large

```react|span-3
showSource: true
---
<Number size="large" value={2} description={"Types"} />
```

```react|span-3
showSource: true
---
<Number size="large" value={25192} description={"Types"} />
```

## Suffix
Since percentages are used widely, they have their own dedicated component. For everything else, theres the `suffix` prop

```react|span-3
showSource: true
---
<Number prefix="+" suffix="℃" size="large" value={25} description="Degrees" />
```
