
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function LoadAnimation(){
    const loading = document.querySelector(".loadingBackground")

    loading.classList.remove("hidden")
    await sleep(2000)
    loading.classList.add("hidden")
}

document.getElementById("loadingButton").addEventListener("click", () => {
    LoadAnimation()
    
})
