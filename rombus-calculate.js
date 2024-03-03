function calculateRombusArea(){
const diagonal1=getInputValuebyid('rhombus-diagonal1')
const diagonal2=getInputValuebyid('rhombus-diagonal2')

const rombusArea=0.5*diagonal1*diagonal2
showingTextInParticular('demonstrate',rombusArea)
}
function getInputValuebyid(Inputfieldid){
    const Inputfield=document.getElementById(Inputfieldid)
    const inputValue=Inputfield.value
    const value=parseFloat(inputValue)
    return value
}
function showingTextInParticular(destinationId,Area){
    const destinationelement=document.getElementById(destinationId)
    destinationelement.innerText=Area
}