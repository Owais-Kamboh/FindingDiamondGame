// function changeImage(image) {
//     console.log(image.src);
//     var newImg = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";
//     image.src = newImg;
// }
// function changeImage(image) {
//     if (image.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U1pCX8tuyNlsvslOPeoa0cHeqYmt7esyL3fUzFOe7XHp3H8jCCKaVa6uPyzVsG8XFDY&usqp=CAU") {
//         var newImg = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630";
//     } else {
//         var newImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U1pCX8tuyNlsvslOPeoa0cHeqYmt7esyL3fUzFOe7XHp3H8jCCKaVa6uPyzVsG8XFDY&usqp=CAU";
//     }
//     image.src = newImg;
// }
// var images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U1pCX8tuyNlsvslOPeoa0cHeqYmt7esyL3fUzFOe7XHp3H8jCCKaVa6uPyzVsG8XFDY&usqp=CAU",
//     "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fsunset%2F&psig=AOvVaw1Eoc_V6h11-DJMGm8iSsh-&ust=1713813010144000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID_2I6B1IUDFQAAAAAdAAAAABAE",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youramazingplaces.com%2F50-stunning-sunset-and-sunrise-photos%2F&psig=AOvVaw1Eoc_V6h11-DJMGm8iSsh-&ust=1713813010144000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID_2I6B1IUDFQAAAAAdAAAAABAS",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWo0v5BaB0KxGkLqRSOE6jYTTedJpfCjpx5TGyFxytiV9MO2uZUEbU9BUUwQQQ95e67w&usqp=CAU"
//     // Add more image URLs here
// ];
// var currentIndex = 0;

// function changeImage(image) {
//     currentIndex = (currentIndex + 1) % images.length;
//     image.src = images[currentIndex];
// }
var img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/640px-Empty_set_symbol.svg.png";
var img2 = "https://www.psdgraphics.com/file/2017/diamond-on-white-background.jpg";
var count = 0;

function changeImage(elem, diamond) {
    if(count < 3){
        if(diamond == true){
            elem.src = img2;
            setTimeout(function() {
                alert("👏 Congratulations! You win a Diamond.");
            }, 200); // Delay the alert for a very short time (0.2 milliseconds)
        } else {
            elem.src = img1;
        }
    } else {
        alert("Three attempts are completed");
    }
    count++;
}
