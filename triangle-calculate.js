function calculateArea(){
    const triangleBase=document.getElementById('triangle-base')
    const tringleBaseValue=triangleBase.value
    const base=parseFloat(tringleBaseValue)
    //console.log(base)

    const triangleHeight=document.getElementById('triangle-height')
    const triangleHeightvalue=triangleHeight.value
    const height=parseFloat(triangleHeightvalue)
   //console.log(height)
   const tringleArea=0.5*base*height
   //console.log(tringleArea)

   const showarea=document.getElementById('demonstrate')
   showarea.innerText=tringleArea
}