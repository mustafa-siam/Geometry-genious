
function calculateRactangleArea(){
    const ractangleWidth=document.getElementById('ractangle-width')
    const ractangleWidthValue=ractangleWidth.value
    const width=parseFloat(ractangleWidthValue)
    
    const ractangleHeight=document.getElementById('ractangle-height')
    const ractangleHeightValue=ractangleHeight.value
    const height=parseFloat(ractangleHeightValue)

    const ractangleArea=width*height
    
    const showractangleArea=document.getElementById('demonstrate')
    showractangleArea.innerText=ractangleArea
}