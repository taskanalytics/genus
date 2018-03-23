To make every card on the same line have equal height, simply wrap them in `Flex`.

```react
<Flex wrap>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <ReportCard
      heading="Desktop"
      byline="91 312 responses"
      source="demobank.com"
      type="Report"
      value='85.1'
    />
  </Flex>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <ComparisonCard
      heading="Comparison name"
      source="iOS App"
      type="Comparison"
      values={[
        45.2,
        51.2,
      ]}
    />
  </Flex>
  <Flex w={[1, 1/2, 1/3]} p={2}>
    <ComparisonCard
      heading="Comparison name"
      source="demobank.com"
      type="Comparison"
      values={[
        45.2,
        51.2,
        72.4,
      ]}
    />
  </Flex>
</Flex>
```

```react|span-3
<ReportCard
  heading="Desktop"
  byline="91 312 responses"
  source="demobank.com"
  type="Report"
  value='45.2'
/>
```

```react|span-3
<ReportCard
  heading="Desktop"
  byline="91 312 responses"
  source="demobank.com"
  type="Report"
  value='85.1'
/>
```

```react|span-3
<ComparisonCard
  heading="Desktop"
  source="iOS App"
  type="Comparison"
  values={[
    85.2,
    79.4,
  ]}
/>
```

```react|span-3
<ComparisonCard
  heading="Desktop"
  source="demobank.com"
  type="Comparison"
  values={[
    45.2,
    51.2,
    72.4,
  ]}
/>
```
