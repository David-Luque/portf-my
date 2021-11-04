export const typeEffect = (html_id, text, _speed)=>{
    let i = 0;
    const txt = text;
    const speed = _speed; //miliseconds

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById(html_id).innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
};