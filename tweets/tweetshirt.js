window.onload = function() {
    var button = document.getElementById("previewButton");
    console.log("it is ok");
    button.onclick = previewHandler;
    makeImage();
};
function previewHandler() {
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);
    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    drawBird(canvas, context);
    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }
    drawText(canvas, context);
}
function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}
function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function degrees_to_radians(degrees)
{
    var pi = Math.PI;
    return degrees * (pi/180);
}
function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, degrees_to_radians(360), true);
    context.fillStyle = "lightblue";
    context.fill();
}
function updateTweets(tweets) {
    var tweetsSelection = document.getElementById("tweets");
    for (var i = 0; i < tweets.length; i++) {
        tweet = tweets[i];
        var option = document.createElement("option");
        option.text = tweet.text;
        option.value = tweet.text.replace("\"", "'");
        tweetsSelection.options.add(option);
    }
    tweetsSelection.selectedIndex = 0;
}
function drawText(canvas, context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;

    context.fillStyle = fgColor;
    context.font = "bold 1em sans-serif";
    context.textalign = "left";
    context.fillText("I saw this tweet", 20, 40);
    selectObj = document.getElementById("tweets");
    index = selectObj.selectedIndex;
    var tweet = selectObj[index].value;
    context.font = "italic 1.1em serif";
    context.fillText(tweet, 30, 100);

    context.font = "bold 1em sans-serif";
    context.textalign = "right";
    context.fillText("and all I got was this lousy t-shirt!", canvas.width-280,
        canvas.height-40);
}
function drawBird(canvas, context) {
    console.log("hello");
    var twitterBird = new Image();
    twitterBird.src = "twitter.png";
    twitterBird.onload = function() {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}
function makeImage() {
    var canvas = document.getElementById("tshirtCanvas");
    let link = document.getElementById("download");
    link.addEventListener(
        'click',
        function(ev) {
            link.href = canvas.toDataURL();
            link.download = "myshirt.png";
        },
        false
    );
    // canvas.onclick = function () {
    //     //let imag = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    //     //window.location = imag;
    //     window.location.href = canvas.toDataURL("image/png");
        // var data = canvas.toDataURL();
        // var prev = window.location.href;
        // window.location.href = data.replace("image/png", "image/octet-stream");
        // window.location.href = prev;
    // };
}






