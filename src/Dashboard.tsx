"use client";

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import ChartView from "./ChartView";
import KpiCardGrid from "./KpiGrid";
import ScatterChart from "./ScatterChart";

export default function DashboardExample() {
  return (
    <main className="px-12 py-12 bg-red w-full">
      <Title>Dashboard</Title>
      <Text>Some example components</Text>

      <TabGroup className="mt-6 w-full">
        <TabList>
          <Tab>Kpi Cards</Tab>
          <Tab>Chart</Tab>
          <Tab>Scatter Chart</Tab>
        </TabList>
        <TabPanels className="w-full">
          <TabPanel className="w-full">
            <Grid numItems={1} className="gap-6 mt-6">
              <KpiCardGrid/>
            </Grid>
          </TabPanel>
          <TabPanel className="w-full">
            <Card className="mt-6">
              <ChartView />
            </Card>
          </TabPanel>
          <TabPanel className="w-full">
            <Card className="mt-6">
              <ScatterChart />
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}