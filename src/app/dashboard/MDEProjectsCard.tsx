"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'; // Adjust the import based on your actual structure

const MDEProjectsCard = () => {
  const [mdeProjects, setMdeProjects] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/mde-projects')
      .then(response => response.json())
      .then(data => setMdeProjects(data.total_projects))
      .catch(error => console.error('Error fetching MDE projects:', error));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          MDE Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mdeProjects}</div>
        <p className="text-xs text-muted-foreground">
          Projects in Major Design Experience(MDE)
        </p>
      </CardContent>
    </Card>
  );
};

export default MDEProjectsCard;