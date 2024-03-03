function calculatepentagonarea(){
    const perimeter=discovervaluefromid('pentagon-perimeter')
    const apothem=discovervaluefromid('pentagon-apothem')

    const pentagonArea= 0.5*perimeter*apothem

    showingdestination('demonstrate',pentagonArea)
}
function discovervaluefromid(inputfield){
const inputfieldid=document.getElementById(inputfield)
const inputfieldidValue=inputfieldid.value
const value=parseFloat(inputfieldidValue)
return value
}
function showingdestination(destinationid,Area){
    const delebareArea=document.getElementById(destinationid)
    delebareArea.innerText=Area
}