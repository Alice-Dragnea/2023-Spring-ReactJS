function setImg(){
    let Img = document.getElementById('Img');
    let im_list = ["capy1.jpg", "capy2.jpg", "capy3.jpg"];
    let counter = 4;
    if(Img.src.endsWith("capy1.jpg")){
        counter = 0;
    }
    else if(Img.src.endsWith("capy2.jpg")){
        counter = 1;
    }
    else{
        counter = 2;
    }
    counter++;
    if(counter == 3){
        counter = 0; //go back to first image; slide reset
    }
    Img.src = im_list[counter];
}