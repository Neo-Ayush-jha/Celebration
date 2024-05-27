const docType = document.implementation.createDocumentType('html', '', '');
document.doctype = docType;

const html = document.createElement('html');
html.setAttribute('lang', 'en');

const head = document.createElement('head');

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

const title = document.createElement('title');
title.textContent = 'Celebration Boom';
head.appendChild(title);

const style = document.createElement('style');
style.textContent = `
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #282c34;
    color: white;
    font-family: Arial, sans-serif;
    overflow: hidden;
}

#boomEffect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.spark {
    position: absolute;
    width: 2.8px;
    height: 1.5px; 
    background-image: linear-gradient(to right, #adb300, #eaff00, #FF6600, #FF9900, #FFFF00);
    opacity: 0;
    animation: boom 1.8s ease-out forwards;
}

@keyframes boom {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(var(--x), var(--y)) scale(1.5);
    }
}
`;
head.appendChild(style);

html.appendChild(head);

const body = document.createElement('body');

const boomEffect = document.createElement('div');
boomEffect.setAttribute('id', 'boomEffect');
body.appendChild(boomEffect);

const script = document.createElement('script');
script.textContent = `
document.addEventListener('click', function(event) {
    const boomEffect = document.getElementById('boomEffect');
    for (let i = 0; i < 200; i++) {
        const angle = Math.random() * 360; 
        const radius = Math.random() * 100; 
        const x = 3*radius * Math.cos(angle * Math.PI / 180); 
        const y = 3*radius * Math.sin(angle * Math.PI / 180); 

        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.setProperty('--x', \`\${x}px\`);
        spark.style.setProperty('--y', \`\${y}px\`);
        spark.style.left = \`\${event.clientX}px\`;
        spark.style.top = \`\${event.clientY}px\`;
        boomEffect.appendChild(spark);

        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }
});
`;
body.appendChild(script);

html.appendChild(body);

document.documentElement.replaceWith(html);
