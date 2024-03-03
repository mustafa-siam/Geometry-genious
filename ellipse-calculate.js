function calculateEllipseArea(){
    const ellipseA=getValuefromId('Ellipse-a')
    const ellipseB=getValuefromId('Ellipse-b')

    const ellipseArea=3.1416*ellipseA*ellipseB

    movefunction('demonstrate',ellipseArea)
}
function getValuefromId(inputfield){
    const Inputfieldid=document.getElementById(inputfield)
    const inputfieldIdValue=Inputfieldid.value
    const value=parseFloat(inputfieldIdValue)
    return value
}
function movefunction(elementid,area){
    const destinationId=document.getElementById(elementid)
    destinationId.innerText=area
}