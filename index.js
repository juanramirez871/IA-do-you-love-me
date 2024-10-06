const btnNot = document.getElementById('no');
const btnYes = document.getElementById('yes');
const image = document.getElementById('image');
const text = document.getElementById('text');

const changePositionBtn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(e.target.id == 'no')
    {
        btnNot.style.position = 'absolute';
        btnNot.style.left = Math.random() * 95 + '%';
        btnNot.style.top = Math.random() * 100 + '%';
        sendInfoClick('no');
    }
}

const clickBtnYes = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(e.target.id == 'yes')
    {
        btnNot.style.display = 'none';
        btnYes.style.display = 'none';
        image.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJjMnE3ODd4a21yeXRleDljY3dlaXl5eDV1dnJkMHI2MWp5aWVkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T7Qx28nEdo9NK/giphy.gif';
        text.innerHTML = 'ayyy mas linda (espero que no hayas intentado dar en el "NO" porque no podias jsjsj te amo <3)';
        text.style.fontSize = '30px';
        image.style.width = '300px';
        sendInfoClick('yes');
    }
}

const sendInfoClick = (btn) => {
    fetch("https://seagull-glad-cheaply.ngrok-free.app", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "text/plain",
            'Access-Control-Allow-Origin': '*'
        }),
        body: btn
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

document.addEventListener('mouseover', changePositionBtn);
document.addEventListener('click', clickBtnYes);
