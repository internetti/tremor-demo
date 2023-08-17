"use client";

import { BadgeDelta, Card, Grid, Flex, Metric, ProgressBar, Text } from "@tremor/react";
import { kpiData, Kpi } from "./data/kpiData";


export default function KpiCardGrid() {
  return (
    <Grid numItemsLg={3} className="mt-6 gap-6">
      {kpiData.map((item: Kpi) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex className="mt-4 space-x-2">
            <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}