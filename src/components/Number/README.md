```code
Required:

[value]               Numeric value
[description]         Label for number

Optional:

[sup]                 Denominator for number, like %
[size={small,large}]  Render either a small or a large variant
```

## Small

```react|span-3
<Number size="small" value={2} description={"Types"} />
```
```react|span-3
<Number size="small" value={12092} description={"Types"} />
```

## Large

```react|span-3
<Number size="large" value={2} description={"Types"} />
```

```react|span-3
<Number size="large" value={25192} description={"Types"} />
```

## Sup
Since percentages are used widely, they have their own dedicated component. For everything else, theres the `sup` prop

```react|span-3
<Percentage size="large" value={25} description="Completion" />
```

```react|span-3
<Number sup="℃" size="large" value={25} description="Degress" />
```