import { createContext } from "react";
import { useState } from "react";
import checkGravatarExists from "../Components/checkGravatarExists";
import ProfileCard from "../Components/ProfileCard";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});


export const DataProvider = ({ children }) => {

    const [gravatarData, setGravatarData] = useState({
        avatar_url: "",
        display_name: "",
        job_title: "",
        company: "",
        location: "",
        description: "",
        profile_url: "",
      });

    const [formData, setFormData] = useState({
        email: "jaivignesham@gmail.com",
        fullName: "Jaivignesh",
        username: "jay",
        phone: "9080776698",
        location: "Coimbatore",
        website: "https://jay.com",
        bio: "Hello! developer",
      });

    const [gravatarexists, setGravatarExists] = useState(false)
    const [finalData, setFinalData] = useState({
        avatar_url : '',
        fullname : '',
        display_name : '',
        location : '',
        email : '',
        phone : '',
        bio : '',
        website : ''
    });

    const navigate = useNavigate();
    const apikey = "1684:gk-NEJ684qiFYUPUJSl-hSqul4Xt0QACYKbdxCB31zYeO8WYYrM9jAiFp4MVT77x"

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          alert("Please enter a valid email address.");
          return;
        }
        
        //console.log("Form data submitted", formData)

        const response = await checkGravatarExists(formData.email, apikey, setGravatarExists, setGravatarData)

        console.log(response);

        const mergedData = {
            avatar_url : response?.avatar_url || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Favatar&psig=AOvVaw0fqpt9T1Tw0Kt9Js4ZzjTM&ust=1732773896608000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiVl_rr-4kDFQAAAAAdAAAAABAE',
            fullname : formData.fullName,
            display_name : response?.display_name || formData.username,
            location : response?.location || formData.location,
            email : formData.email,
            phone : formData.phone,
            bio : response?.description || formData.bio,
            website : response?.profile_url || formData.website
        };

        setFinalData(mergedData);
        //console.log("Hello");
        //console.log(mergedData);
        navigate('/profile', { state : mergedData });

      };

    
    return (
        <DataContext.Provider value={{
            formData, setFormData, handleSubmit, setGravatarExists, apikey, finalData
        }}>
            {children}
        </ DataContext.Provider>
    )
}

export default DataContext;