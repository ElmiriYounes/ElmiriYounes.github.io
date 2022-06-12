(()=>{
    document.querySelector('.target').addEventListener('click', (e)=>{
        let  circle = document.createElement('span');
        circle.classList.add('circle');
        // e.offset = get cursor positions
        circle.style.top = (e.offsetY-15) + "px";
        circle.style.left = (e.offsetX-15) + "px";
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        circle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        e.target.appendChild(circle);
        setTimeout(() => {
            e.target.removeChild(circle)
        }, 1000);
    })
})();