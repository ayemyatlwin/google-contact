import React from "react";
import EditSection from "../Components/EditSection";
import { useLocation } from "react-router-dom";

const EditContact = () => {
  const location = useLocation();
  const contactDetail = location.state;
  console.log(contactDetail);
  


  return (
    <>
    
    <EditSection contactDetail={contactDetail}/>
    </>
  );
};

export default EditContact;
