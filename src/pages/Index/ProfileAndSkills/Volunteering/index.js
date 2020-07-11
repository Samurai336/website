import React from "react" 


function index({volunteering}){


    return (
        <div className="yui-gf last">
        
      <div className="yui-u first">
        <h2>Professional Affiliations,</h2>        
        <h2>Volunteering,</h2>
        <h2>Independent Projects</h2>
      </div>

      <div className="yui-u">
      {volunteering !== undefined && volunteering.map((item, index) => (
        <div>
          <a href={item.link} target="_blank"><b>{item.name}:</b></a> {item.description}
        </div>
      ))}
      </div>
    </div>
    )

}

export default index