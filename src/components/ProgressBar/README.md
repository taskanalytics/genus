```code
Required:

[value={num}]       Percentage value ranging from {min=0} to {max=100}

Optional:

[light]             Light theme produces a white meter
[min]               Override the minimum value
[max]               Override the maximum value

```

## Basic semantic variants

The progress bar uses colors to indicate the level of completion as you cross pre-defined thresholds. There are three variants:

```react|span-2
showSource: true
---
<ProgressBar value={90} />
```

```react|span-2
showSource: true
---
<ProgressBar value={65} />
```

```react|span-2
showSource: true
---
<ProgressBar value={30} />
```

```react|span-2
showSource: true
---
<ProgressBar value={100} />
```

```react|span-2
showSource: true
---
<ProgressBar value={1} />
```

```react|span-2
showSource: true
---
<ProgressBar value={10} label={<Text nowrap color="white">Custom label</Text>} />
```

## Less used variations

```react|span-2,dark
showSource: true
---
<ProgressBar light value={30} />
```
```react|span-2,dark
showSource: true
---
<ProgressBar light />
```
```react|span-2
showSource: true
---
<ProgressBar />
```

```react|span-2
showSource: true
---
<ProgressBar empty value={30} color="green" />
```
