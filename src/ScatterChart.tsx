import { Card, Title, ScatterChart } from "@tremor/react";
import { performance } from "./data/chartData";

export default () => (
  <Card>
    <Title>Sales performance</Title>
    <ScatterChart
      className="h-80 mt-6 -ml-2"
      yAxisWidth={50}
      data={performance}
      category="date"
      x="Sales"
      y="Profit"
      size="Customers"
      showOpacity={true}
      minYValue={0}
      valueFormatter={{
        // x: (sales) => `${(sales).toFixed(1)}`,
        y: (profit) => `${profit} €`,
        size: (customers) => `${(customers / 1000000).toFixed(1)}M people`,
      }}
      showLegend={false}
    />
  </Card>
);