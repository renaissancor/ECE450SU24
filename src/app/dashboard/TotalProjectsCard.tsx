"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'; // Adjust the import based on your actual structure

const TotalProjectsCard = () => {
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    fetch('http://123.57.48.172:5000/total-projects')
      .then(response => response.json())
      .then(data => setTotalProjects(data.total_projects))
      .catch(error => console.error('Error fetching total projects:', error));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalProjects}</div>
        <p className="text-xs text-muted-foreground">
          Project count in the database
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalProjectsCard;