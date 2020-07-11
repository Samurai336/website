import React from "react"

function index({ keyAccomplishments }) {

  return (
    <div className="yui-gf">
      <div className="yui-u first">
        <h2>Key</h2>
        <h2>Accomplishments</h2>
      </div>

      <div className="yui-u">
      <ol right="100px">
        {keyAccomplishments !== undefined && keyAccomplishments.map((item, index) => (
            <div dangerouslySetInnerHTML={{ __html: `<li>${item.accomplishment}</li>` }} />
        ))}
      </ol>
      </div>
    </div>
  )
}

export default index