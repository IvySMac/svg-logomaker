
function generateLogo(name, textColor, shapes, shapeColor) {
    const logo=`
<svg height="300" width="200">
<${shapes} fill="${shapeColor}"/>
  <text font-size="60" font-family="Times New Roman" fill="${textColor}"x="40" y="120">${name}</text>
</svg>

`
return logo
}

module.exports=generateLogo
