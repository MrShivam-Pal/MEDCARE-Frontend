
import { Box, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Patients from "../components/Patients";
import Reports from "../components/Reports";

const PatientPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={8}
      mx={8}
    >
      <Box width={"100%"}>
        <DataTabs data={tabData} />
      </Box>

    </Box>
  );
};

function DataTabs({ data }) {
  return (
    <Tabs>
      <TabList gap={5}>
        {data.map((tab, index) => (
          <Tab
            fontSize={"lg"}
            fontWeight={"semibold"}
            key={index}
            pb={4}
            mx={2}
            transition={"all"}
            transitionDelay={"0.1s"}
            transitionDuration={"500ms"}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel
            transition={"all"}
            transitionDelay={"0.1s"}
            transitionDuration={"500ms"}
            p={4}
            key={index}
          >
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

const tabData = [
  {
    label: "Patients",
    content: <Patients />,
  },
  {
    label: "Reports",
    content: <Reports />,
  },
];

export default PatientPage;
