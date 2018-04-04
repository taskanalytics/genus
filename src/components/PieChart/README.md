```code
Required:

[value]       Numeric value

Optional:

[max]         Max value in pie
[size]        Pixel size
[light]       Lightly themed for dark background
```

## Basic pie

```react|span-2
showSource: true
---
<PieChart value={10} />
```
```react|span-2
showSource: true
---
<PieChart value={50} />
```
```react|span-2
showSource: true
---
<PieChart value={98} />
```

## Light
```react|span-2,dark
showSource: true
---
<PieChart light value={10} />
```
```react|span-2,dark
showSource: true
---
<PieChart light value={50} />
```
```react|span-2,dark
showSource: true
---
<PieChart light value={98} />
```

## Differently sized
```react|span-2
showSource: true
---
<PieChart size={24} value={10} />
```
```react|span-2
showSource: true
---
<PieChart size={96} value={10} />
```
```react|span-2
showSource: true
---
<PieChart size={192} value={10} />
```
