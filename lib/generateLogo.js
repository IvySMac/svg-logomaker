const questions  = require("./questions");

function generateLogo({questions}) {
    const logo=`
<svg height="30" width="200">
  <text x="0" y="15" fill="red">${questions.name}</text>
</svg>

`
return logo
}

module.exports=generateLogo
