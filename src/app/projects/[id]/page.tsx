"use client";  
  
import { usePathname } from "next/navigation";  
import { useEffect, useState } from 'react';
import { CapstoneProject } from "@/types/types"; // Adjust the import path as needed  
  
export default function ProjectIDPage() {  
  const pathname = usePathname();  
  const id = pathname.split("/").pop();  
  const [project, setProject] = useState<CapstoneProject | null>(null);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState<string | null>(null);  
  
  useEffect(() => {  
    if (!id) {  
      setError("Error: Project ID is missing");  
      return;  
    }  
  
    setLoading(true);  
    fetch("http://123.57.48.172:5000/detail", {  
      method: "POST",  
      headers: {  
        "Content-Type": "application/json",  
      },  
      body: JSON.stringify({  
        "projectid": parseInt(id, 10) // Assuming id should be parsed as integer  
      }),  
    })  
      .then(response => response.json())  
      .then(data => {  
        setProject(data);  
        setLoading(false);  
        setError(null);  
      })  
      .catch(err => {  
        console.error("Error:", err);  
        setError("Failed to load project details");  
        setLoading(false);  
      });  
  }, [id]);  
  
  if (error) {  
    return <div className="text-red-500">{error}</div>;  
  }  
  
  if (loading) {  
    return <div>Loading project details...</div>;  
  }  
  
  if (!project) {  
    return <div>Project not found</div>;  
  }  
  
  return (  
    <div className="p-8 max-w-4xl mx-auto">  
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>  
      <div className="mb-4">  
        <p className="text-xl">  
          <span className="font-semibold">Year:</span> {project.year}  
        </p>  
        <p className="text-xl">  
          <span className="font-semibold">Semester:</span>{" "}  
          {project.semester}  
        </p>  
        <p className="text-xl">  
          <span className="font-semibold">Course:</span>{" "}  
          {project.course}  
        </p>  
        <p className="text-xl">  
          <span className="font-semibold">Sponsor:</span>{" "}  
          {project.sponsor}  
        </p> 
        <p className="text-xl">  
          <span className="font-semibold">Team Members:</span>{" "}  
          {project.members}  
        </p> 
        <p className="text-xl">  
          <span className="font-semibold">Company/School Mentor:</span>{" "}  
          {project.companymentor}  
        </p> 
        <p className="text-xl">  
          <span className="font-semibold">Instructor:</span>{" "}  
          {project.instructor}  
        </p> 


        <p className="text-xl">  
        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
          Problem Statement:
        </span>
          {project.problem}  
        </p> 

        <p className="text-xl">  
        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
            Concept Generation
          </span>
          {project.concept}  
        </p> 


        <p className="text-xl">  
        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
            Design Description
          </span>
          {project.description}  
        </p> 


        <p className="text-xl">  
        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
            Modeling and Analysis
          </span>
          {project.analysis}  
        </p> 

        <p className="text-xl">  
        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
            Validation
          </span>
          {project.validation}  
        </p> 


        <p className="text-xl">  

        <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
        Conclusion
          </span>
          {project.conclusion}  
        </p> 


        <p className="text-xl">  
          <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold',  marginTop: '1em' }}>
            Acknowledgement
          </span>
          {project.acknowledgement}  
        </p> 

      </div>  
    </div>  
  );  
}