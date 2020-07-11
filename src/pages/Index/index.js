import React from "react"
import PersonalInformation from "./PersonalInformation"
import ProfileAndSkills from "./ProfileAndSkills"
import ericBasileResume from "../../assets/files/Basile.Eric.Resume.Web.pdf"

function index() {
  return (
    <>
      <PersonalInformation
        Author={"Eric Basile"}
        HeadTitle={"Software Engineer - E-commerce, Cloud Platform, Game Programming"}
        email={"eric@ericbasile.com"}        
        pdfLink={ericBasileResume}
      />
      <ProfileAndSkills />
    </>
  )
}

export default index
