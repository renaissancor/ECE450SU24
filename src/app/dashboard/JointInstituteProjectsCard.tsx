"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'; // Adjust the import based on your actual structure

const JointInstituteProjectsCard = () => {
  const [jointInstituteProjects, setJointInstituteProjects] = useState(0);

  useEffect(() => {
    fetch('http://123.57.48.172:5000/joint-institute-projects')
      .then(response => response.json())
      .then(data => setJointInstituteProjects(data.total_projects))
      .catch(error => console.error('Error fetching Joint Institute projects:', error));
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Joint Institute Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{jointInstituteProjects}</div>
        <p className="text-xs text-muted-foreground">
          Projects sponsored by Joint Institute
        </p>
      </CardContent>
    </Card>
  );
};

export default JointInstituteProjectsCard;
