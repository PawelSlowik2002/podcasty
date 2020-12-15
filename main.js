function changeImage() {
    if (document.getElementById(`changeToPause`).src == "./zdjęcia/play.png")
    {
        document.getElementById(`changeToPause`).src = "./zdjęcia/play.png"
    }else
    {
        document.getElementById(`changeToPause`).src = "./zdjęcia/pause.png"
    }

}