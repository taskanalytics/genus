```code
Required:

[value]               Numeric value

Optional:

[colored={gradient,Bool}] Solid color or gradient based on value
[description]             Describing label text
[sup]                     Denominator for number, like %
[size={small,large}]      Render either a small or a large variant
```

```react|span-3
<Percentage value={2} description={"Types"} />
```
```react|span-3
<Percentage value={12092} description={"Types"} />
```

## Small

```react|span-3
<Percentage size="small" value={2} description={"Types"} />
```
```react|span-3
<Percentage size="small" value={12092} description={"Types"} />
```

## Large

```react|span-3
<Percentage size="large" value={2} description={"Types"} />
```

```react|span-3
<Percentage size="large" value={25192} description={"Types"} />
```

## Colored

```react|span-2
<Percentage colored size="large" value={90.2} />
```

```react|span-2
<Percentage colored size="large" value={54.2} />
```

```react|span-2
<Percentage colored size="large" value={21.9} />
```

## Gradient

```react|span-2
<Percentage colored="gradient" size="large" value={88.2} />
```

```react|span-2
<Percentage colored="gradient" size="large" value={54.2} />
```

```react|span-2
<Percentage colored="gradient" size="large" value={21.9} />
```
