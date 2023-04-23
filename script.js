const btn = document.querySelector("button");
const color = document.querySelector(".color");

const pickColor = async () => {
    const eyeDropper = new EyeDropper();

    const { sRGBHex } = await eyeDropper.open();
    
    color.innerHTML += ` color: ${sRGBHex}`
}

btn.onclick = pickColor;