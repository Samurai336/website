import React from "react"

function index({ educations }) {
  return (
    <div className="yui-gf">
      <div className="yui-u first">
        <h2>Education</h2>
      </div>
      {educations!==undefined && educations.map((item, index) => {
        return (
          <div className="yui-u" key={index}>
            <h2>
              <a href={item.link} target="_blank">{item.institute}</a> - {item.city}
            </h2>
              {item.field}
          </div>
        )
      })}
    </div>
  )
}

export default index
