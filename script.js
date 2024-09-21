let IsStatus = document.querySelector("h5")
let btn = document.getElementById("add")
let check =0
btn.addEventListener("click",function(){
    if(check===0){
    IsStatus.innerHTML="Friends"
    IsStatus.style.color="green"
    btn.innerHTML="Remove Friend"
    check=1
    }else{
        IsStatus.innerHTML="Stranger"
        IsStatus.style.color="red"
        btn.innerHTML="Add Friend"
        check=0      
    }
    
})
