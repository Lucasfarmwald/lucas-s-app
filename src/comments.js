import react from "react";


function CommentBox(){

    function handleLike(){
        

    }
    function handleDislike(){
     let pTag = document.createElement('p')
     pTag.textContent = "what up"
     let myDiv = document.getElementById("myDiv")
     myDiv.appendChild(pTag)
      
    }

    function creatThankYou(){
        let array = ['Your gonna be the best!','Youre gonna be a developer!','Your doing amazing','Think of your future!',' dont quit',
         'Youre so smart!', 'Youre gonna get through this!','Youre doing better than you think!','Give yourself some credit bro!'
    ]
        let string = array[Math.floor(Math.random()* array.length)];
        let Tag = document.createElement('p')
        let div = document.getElementById('myDiv')
        Tag.textContent = string
        div.appendChild(Tag)

    }




    return <div>
        <button id="Like" onClick={creatThankYou}>I Need Motivation!</button>
        <button id="dislike" onClick={handleDislike}>dislike</button>
    </div>
}

export default CommentBox