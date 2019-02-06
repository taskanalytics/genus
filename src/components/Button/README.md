```code
Optional:

[primary]             A blue, primary colored button
[primaryinverted]     A inverted blue button for dark backgrounds
[warning]             A button for dangerous/destructive actions
[inverted]            A basic button for dark backgrounds
[block]               Instruct the button to fill 100% width. Can be combined
[compact]             A button with less padding
[link]                A button rendered as a link
[to]                  Turn the button into an <a href> that links to this target
[disabled]            When a button is disabled it is greyed out and not clickable
[loading]             Animate the button while loading

```

## Variations

```react|span-2
showSource: true
---
<div>
<Button>Default</Button>
<Button link color="white">Default</Button>
</div>
```

```react|span-2
showSource: true
---
<Button primary>Primary</Button>
```

```react|span-2
showSource: true
---
<Button primaryinverted>Primaryinverted</Button>
```

```react|span-2
showSource: true
---
<Button warning>Warning</Button>
```

```react|span-2
showSource: true
---
<Button danger>Danger</Button>
```

```react|dark,span-2
showSource: true
---
<Button inverted>Inverted</Button>
```

```react|span-2
showSource: true
---
<Button block>Block</Button>
```

```react|span-2
showSource: true
---
<Button compact>Compact</Button>
```

```react|span-2
showSource: true
---
<Button disabled>Disabled</Button>
```

```react|span-2
showSource: true
---
<Flex flexDirection="column">
<Button link>Link</Button>
<Button link danger>Danger link</Button>
</Flex>
```

```react|span-2
showSource: true
---
<Button to='/'>As a href</Button>
```


## Loading state

```
<Button loading>My button</Button>
<Button loading="Loading">My button</Button>
```

```react
showSource: false
---
<Flex wrap flexDirection="row" alignItems="start">
<Button loading="Loading">Push me</Button>
<Button color="green" loading>Push me</Button>
<Button compact loading>Push me</Button>
<Button primary loading>Push me</Button>
<Button Primaryinverted loading>Push me</Button>
<Button link loading>Push me</Button>
<Button warning loading>Push me</Button>
<Button danger loading>Push me</Button>
</Flex>
```
