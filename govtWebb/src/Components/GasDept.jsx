import React from 'react';
import { Card, CardContent, Typography, Button, Divider } from '@mui/material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const projects = [
  {
    title: "Pune Gas Pipeline Extension",
    description: "Completed in 2020, this project extended the gas pipeline by 40km across Pune.",
    status: "Completed",
    duration: "2018 - 2020",
  },
  {
    title: "Hyderabad Gas Line Maintenance",
    description: "Ongoing maintenance of critical gas pipelines in Hyderabad, ensuring a safe and sustainable supply. Estimated completion by late 2024.",
    status: "Ongoing",
    duration: "2022 - 2024",
  },
  {
    title: "Chennai Gas Supply Network Expansion",
    description: "Starting in 2025, this project aims to extend the gas network to suburban and rural regions, improving access to energy.",
    status: "Upcoming",
    duration: "2025 - 2027",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
  },
}));

const GasDept = () => {
  return (
    <Box className="min-h-screen p-10 bg-gradient-to-r from-green-50 to-green-100">
      <Box className="container mx-auto">
        {/* Header Section */}
        <Typography variant="h3" component="h1" className="text-center font-bold text-green-900 mb-10">
          Gas Department Projects
        </Typography>

        {/* Introduction Section */}
        <Box className="bg-green-100 p-6 rounded-lg shadow-md mb-12 text-center">
          <Typography variant="h5" component="h2" className="font-semibold text-green-700 mb-4">
            Managing Gas Pipeline Projects Across the City
          </Typography>
          <Typography variant="body1" className="text-gray-700 leading-relaxed">
            The Gas Department is committed to the development and maintenance of gas infrastructure across the city. We aim to coordinate efficiently between departments to ensure smooth operations and minimize disruptions.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" component="h3" className="text-green-700 font-semibold mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" component="p" className="text-sm text-gray-500 mb-2">
                    <strong>Duration:</strong> {project.duration}
                  </Typography>
                  <Divider className="mb-3" />
                  <Typography variant="body2" className="text-gray-600 mb-3">
                    {project.description}
                  </Typography>
                  <Box className="text-right">
                    <Button
                      variant="contained"
                      color={project.status === 'Completed' ? 'success' : project.status === 'Ongoing' ? 'warning' : 'info'}
                    >
                      {project.status}
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GasDept;
