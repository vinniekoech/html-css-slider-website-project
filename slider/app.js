var slideimg = document.getElementById("slideimg");

        var images = new Array (
            "images/lib.jpg",
            "images/vkk.jpg",
            "images/lens.jpg"
            )
        var len = images.length;
        var i = 0;
        function slider(){
            if(i>len-1){
                i=0
            }
            slideimg.src = images[i];
            i++;
            setTimeout('slider()',3000)
        }