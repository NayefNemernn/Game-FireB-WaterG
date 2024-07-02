document.getElementById('startButton').addEventListener('click', () => {
    window.scrollTo({
    top: document.querySelector('.container').offsetTop,
    behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const fallingObj1 = document.getElementById('falling1');
    const fallingObj2 = document.getElementById('falling2');
    const fallingObj3 = document.getElementById('falling3');
    const fallingObj4 = document.getElementById('falling4');
    const speed = 6; 
    const fall = (obj) => {
        let topPosition = parseFloat(obj.style.top) || -50;
        topPosition += speed;
        obj.style.top = `${topPosition}px`;

        if (topPosition < document.documentElement.scrollHeight - window.innerHeight - obj.clientHeight) {
            requestAnimationFrame( () => fall(obj));
        } else {
            obj.style.top = '-50px'; 
            requestAnimationFrame(() => fall(obj)); 
        }
    };

    requestAnimationFrame(() => fall(fallingObj1));
    requestAnimationFrame(() => fall(fallingObj2));
    requestAnimationFrame(() => fall(fallingObj3));
    requestAnimationFrame(() => fall(fallingObj4));
});