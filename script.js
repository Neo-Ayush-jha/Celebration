<script>
info="<!DOCTYPE html>
<html lang=&#34;en&#34;>
<head>
    <meta charset=&#34;UTF-8&#34;>
    <meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1.0&#34;>
    <title>Celebration Boom</title>
    <style>
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
    </style>
</head>
<body>
    <div id=&#34;boomEffect&#34;></div>

    <script>
        document.addEventListener(&#39;click&#39;, function(event) {
            const boomEffect = document.getElementById(&#39;boomEffect&#39;);
            for (let i = 0; i < 200; i++) {
                const angle = Math.random() * 360; 
                const radius = Math.random() * 100; 
                const x = 3*radius * Math.cos(angle * Math.PI / 180); 
                const y = 3*radius * Math.sin(angle * Math.PI / 180); 

                const spark = document.createElement(&#39;div&#39;);
                spark.classList.add(&#39;spark&#39;);
                spark.style.setProperty(&#39;--x&#39;, `${x}px`);
                spark.style.setProperty(&#39;--y&#39;, `${y}px`);
                spark.style.left = `${event.clientX}px`;
                spark.style.top = `${event.clientY}px`;
                boomEffect.appendChild(spark);

                spark.addEventListener(&#39;animationend&#39;, () => {
                    spark.remove();
                });
            }
        });
    </script>
</body>
</html>"

document.write(info)
</script>
