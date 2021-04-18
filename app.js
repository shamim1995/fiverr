

setInterval(function(){


    if(document.getElementsByClassName("banner_image")[0].classList.contains("active")){
        document.getElementsByClassName("banner_image")[1].classList.add("active")
        document.getElementsByClassName("banner_image")[0].classList.remove("active")
    }else if(document.getElementsByClassName("banner_image")[1].classList.contains("active")){
      
        document.getElementsByClassName("banner_image")[2].classList.add("active")
        document.getElementsByClassName("banner_image")[1].classList.remove("active")
    
    
    }else if(document.getElementsByClassName("banner_image")[2].classList.contains("active")){
      
        document.getElementsByClassName("banner_image")[3].classList.add("active")
        document.getElementsByClassName("banner_image")[2].classList.remove("active")
    
    
    }else if(document.getElementsByClassName("banner_image")[3].classList.contains("active")){
      
        document.getElementsByClassName("banner_image")[0].classList.add("active")
        document.getElementsByClassName("banner_image")[3].classList.remove("active")
    
    
    }








},3000)