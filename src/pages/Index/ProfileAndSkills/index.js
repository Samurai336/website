import React from "react"
import Skills from "./Skills"
import Summary from "./Summary"
import Experience from "./Experience"
import Education from "./Education"
import KeyAccomplishments from "./Keyaccomplishments"
import Volunteering from "./Volunteering"
import experiences from "../../../components/ProfileAndSkills/Experience/experiences"
import skills from "../../../components/ProfileAndSkills/Skills/skills"
import educations from "../../../components/ProfileAndSkills/Education/educations"
import keyAccomplishments from "../../../components/ProfileAndSkills/keyAccomplishments/keyaccomplishments"
import volunteering from "../../../components/ProfileAndSkills/Volunteering/volunteering"

function index() {
  const summary =
    "Creative React Developerwith 5+ years of extensive knowledge in Javascript and scripting languages,developing, and managing complex financial sites and block chain trading platforms. Specializes in ReactJS and responsive design."

  return (
    <div id="bd">
      <div id="yui-main">
        <div className="yui-b">          

          <KeyAccomplishments keyAccomplishments={keyAccomplishments} />

          <Skills Skills={skills} />

          <Experience experiences={experiences} />

          <Education educations={educations} />

          <Volunteering volunteering={volunteering}/>

        </div>
      </div>
    </div>
  )
}

export default index
