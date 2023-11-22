import OverviewExpenses from "../components/cards/OverviewExpenses";
import OverviewRevenue from "../components/cards/OverviewRevenue";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import { useState } from "react";
import { OverviewBalance } from "../components/cards/OverviewBalance";
import { OverviewPendingTransactions } from "../components/cards/OverviewPendingTransactions";
import { Box, Container, Grid } from "@mui/material";
import ActiveFilters from "../components/ActiveFilters";

function DashboardContent() {
  const testData = [
    { month: "Jan", userGain: 80000, userLost: 823 },
    { month: "Fev", userGain: 180000, userLost: 8223 },
  ];
  const [userData, setUserData] = useState({
    labels: testData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: testData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Users Lost",
        data: testData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <ActiveFilters />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <OverviewExpenses sx={{ height: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OverviewRevenue sx={{ height: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OverviewBalance sx={{ height: "100%" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OverviewPendingTransactions sx={{ height: "100%" }} />
          </Grid>

          <Grid item xs={12} lg={8} sx={{ width: 700 }}>
            <BarChart />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ width: 700 }}>
            <LineChart chartData={userData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DashboardContent;
