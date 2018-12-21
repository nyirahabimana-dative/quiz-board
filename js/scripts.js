
$(document).ready(function (){
    $('#blanks form').submit(function(event){
      var marks=0;
        var blanks=["answer1", "answer2","answer3",]
         blanks.forEach(function(blank) {
            var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                if(userInput=="d"){
                    marks= marks+10;
                                }
                    })
                    alert(marks)
                event.preventDefault();
             });
             });

             
     