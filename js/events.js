// OPTION-1
// DIRECTLY SET ON THE HTML ELEMENTS


// OPTION-2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// OPTION-3
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;
    //  makeBlue() --> will initialize and set blue value for first time. That's why we need to just initialice the function nmae instead of calling it.

    function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }


// OPTION-3 ANOTHER WAY
const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.onclick = function makeGreen(){
        document.body.style.backgroundColor = 'green';
    }


// OPTION-4
const makePinkButton = document.getElementById('make-pink');
    makePinkButton.addEventListener('click', makePink);

    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }


// OPTION-4 ANOTHER WAY
const makeOrangeButton = document.getElementById('make-orange');
    makeOrangeButton.addEventListener('click', function makeOrange(){
        document.body.style.backgroundColor = 'orange';
    });


// OPTION-4 FINAL
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})