const content = document.getElementById("content")
const date= document.getElementById("date")
const time = document.getElementById("time")
const addedBtn = document.getElementById("addedBtn")
const deletedBtn = document.getElementById("deletedBtn")
const list = document.getElementById("list")


const listContent = []

// 多功能class
// class RenderFeature{
//     append(){

//     }
//     render() {
//         //渲染页面的list
//         let htmlStr = ''

//         listContent.forEach(function(item){
//             htmlStr = htmlStr + `
//                 <div class="item">
//                     <div>
//                         <p>内容：${item.content}</p>
//                         <p>时间：${item.date} ${item.time}</p>
//                     </div>
//                 </div>
//             `
//         })
        
    
//         list.innerHTML = htmlStr
//     }
// }

// const r1 = new RenderFeature()




// 封装调用function
function render (){
     //渲染页面的list
     let htmlStr = ''

     listContent.forEach(function(item){
         htmlStr = htmlStr + `
             <div class="item">
                 <div>
                     <p>内容：${item.content}</p>
                     <p>时间：${item.date} ${item.time}</p>
                 </div>
             </div>
         `
     })
     
 
     list.innerHTML = htmlStr
}


addedBtn.addEventListener('click', function(){

    listContent.unshift({
        content:content.value,
        date: date.value,
        time: time.value
    })

    render()

})

deletedBtn.addEventListener('click', function(){
    listContent.shift()

   render()
})

