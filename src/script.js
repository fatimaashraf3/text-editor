let bold = document.getElementById("bold")
let italic = document.getElementById("italic")
let underline = document.getElementById("underline")
let center = document.getElementById("center")
let left = document.getElementById("left")
let right = document.getElementById("right")
let text = document.getElementById("text")
let fontsize = document.getElementById("fontsize")
let fontfamily = document.getElementById("fontfamily")
let back = document.getElementById("back")
let color = document.getElementById("color")

bold.addEventListener("click" , function(){
    if(text.style.fontWeight == "bold"){
      text.style.fontWeight = "normal"
    }
    else{
 text.style.fontWeight = "bold"
    }  
})
italic.addEventListener("click", function(){
    if(text.style.fontStyle == "italic"){
        text.style.fontStyle = "normal"
    }
    else{
            text.style.fontStyle = "italic"
    }

})
underline.addEventListener("click", function(){
    if(text.style.textDecoration == "underline"){
        text.style.textDecoration = "none"
    }
    else{
         text.style.textDecoration = "underline"
    }
   
})
center.addEventListener("click",function(){
    text.style.textAlign = "center"
})
left.addEventListener("click",function(){
    text.style.textAlign = "left"
})
right.addEventListener("click", function(){
    text.style.textAlign = "right"
})
back.addEventListener("click",function(){
    text.style.backgroundColor = back.value
})
color.addEventListener("click", function(){
    text.style.color = color.value
})
fontfamily.addEventListener("click",function(){
    text.style.fontFamily = fontfamily.value
})
fontsize.addEventListener("click", function(){
    text.style.fontSize = fontsize.value
})