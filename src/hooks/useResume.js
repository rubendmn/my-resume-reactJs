
import { useState,useEffect } from 'react';

export function useResumes()
{

    const [resume, setResume] = useState(null);
    
    const getResume = ()=>
    {
           // Ready to inmpement API integration win DB store in the future
           window.fetch('resume.json')
            .then(response => response.json())
            .then(data => {     
                 document.title = [ data.basics.name,  data.basics.label,  [data.basics.location.region, data.basics.location.country].join(", ")].join(" | ");  
                 setResume(data);
            }); 
       
    }
    
    useEffect(() =>
    {
         getResume();
    },[]);

    

    return {resume , getResume }
}