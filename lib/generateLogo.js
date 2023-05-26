
function generateLogo(name, textColor) {
    const logo=`
<svg height="30" width="200">
  <text x="0" y="15" fill="${textColor}">${name}</text>
</svg>

`
return logo
}

module.exports=generateLogo
