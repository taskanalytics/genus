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
<ProgressBar value={90} />
```

```react|span-2
<ProgressBar value={65} />
```

```react|span-2
<ProgressBar value={30} />
```

## Less used variations

```react|span-2,dark
<ProgressBar light value={30} />
```
```react|span-2,dark
<ProgressBar />
```
```react|span-2
<ProgressBar empty value={30} />
```
