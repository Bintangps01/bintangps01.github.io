document.addEventListener('DOMContentLoaded', () => {
    const mouseCircle = document.createElement('div');
    mouseCircle.classList.add('mouse-circle');
    document.body.appendChild(mouseCircle);
    mouseCircle.style.position = 'absolute';
    mouseCircle.style.left = '-100px';
    mouseCircle.style.top = '-100px';

    const tinyCircle = document.createElement('div');
    tinyCircle.classList.add('tiny-circle');
    document.body.appendChild(tinyCircle);
    tinyCircle.style.position = 'absolute';
    tinyCircle.style.left = '-100px';
    tinyCircle.style.top = '-100px';

    document.addEventListener('mousemove', (e) => {
        mouseCircle.style.left = `${e.clientX - 15}px`;
        mouseCircle.style.top = `${e.clientY - 15}px`;

        tinyCircle.style.left = `${e.clientX - 5}px`;
        tinyCircle.style.top = `${e.clientY - 5}px`;
    });

    const hoverTargets = document.querySelectorAll('.mouse-scale');

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            mouseCircle.classList.add('hovered');
        });

        target.addEventListener('mouseleave', () => {
            mouseCircle.classList.remove('hovered');
        });
    });
});
