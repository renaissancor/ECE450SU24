"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'; // Adjust the import based on your actual structure

const Projects2023Card = () => {
  const [projects2023, setProjects2023] = useState(0);

  useEffect(() => {
    fetch('http://123.57.48.172:5000/projects-2023')
      .then(response => response.json())
      .then(data => setProjects2023(data.total_projects))
      .catch(error => console.error('Error fetching projects for 2023:', error));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Projects in 2023
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{projects2023}</div>
        <p className="text-xs text-muted-foreground">
          Project count in 2023
        </p>
      </CardContent>
    </Card>
  );
};

export default Projects2023Card;