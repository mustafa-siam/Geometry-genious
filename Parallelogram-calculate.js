function calculateParallelogramArea(){
    const parallelogramBase=document.getElementById('parallelogram-base')
    const parallelogramBaseValue= parallelogramBase.value
    const Base=parseFloat(parallelogramBaseValue)

    const parallelogramHeight=document.getElementById('parallelogram-height')
    const parallelogramHeightValue=parallelogramHeight.value
    const height=parseFloat(parallelogramHeightValue)

    const parallelogramArea=Base*height
    const showPrallelogram=document.getElementById('demonstrate')
    showPrallelogram.innerText=parallelogramArea
}