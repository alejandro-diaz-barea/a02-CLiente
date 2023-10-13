const abrirVentana = document.getElementById("abrir-ventana");
        let ventana;
        let ancho = 400;
        let alto = 400;
        let creciendo = false;

        abrirVentana.addEventListener("click", () => {
            if (!ventana || ventana.closed) {
                ventana = window.open("", "ventanaCambiante", `width=${ancho}, height=${alto}, left=${Math.random() * (window.innerWidth - ancho)}, top=${Math.random() * (window.innerHeight - alto)}`);
                creciendo = true;

                const interval = setInterval(() => {
                    if (creciendo) {
                        ancho += 40;
                        alto += 40;
                    } else {
                        ancho -= 40;
                        alto -= 40;
                    }

                    if (ancho <= 160 || alto <= 160) {
                        creciendo = true;
                    }

                    ventana.resizeTo(ancho, alto);

                    if (ancho >= 400 || alto >= 400) {
                        clearInterval(interval);
                    }
                }, 1000);
            } else {
                ventana.focus();
            }
        });