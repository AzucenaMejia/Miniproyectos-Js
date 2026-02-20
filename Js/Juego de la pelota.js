
        const inputSaltos = document.getElementById('cantidad-saltos');
        const btnIniciar = document.getElementById('iniciar-juego');
        const pelota = document.getElementById('pelota');
        const contador = document.getElementById('contador');
        const body = document.body;
        
        // Colores que cambiarán cada salto
        const colores = [
            '#c4e9fb', // Azul claro (inicial)
            '#a8e6cf', // Verde menta
            '#ffafbd', // Rosa claro
            '#fdcb6e', // Amarillo
            '#ffecd2', // Naranja claro
            '#b8e6b8', // Verde claro
            '#d1c4e9', // Lila
            '#c4e9fb'  // Vuelve al azul
        ];
        
        let saltoActual = 0;
        let saltosTotales = 0;
        let intervalo;
        
        btnIniciar.addEventListener('click', function() {
            saltosTotales = parseInt(inputSaltos.value) || 5;
            saltoActual = 0;
            
            if (saltosTotales > 0 && saltosTotales <= 10) {
                // Resetear color inicial
                body.style.backgroundColor = colores[0];
                pelota.style.display = 'block';
                pelota.style.background = '#ff0000'; // Roja inicial
                
                contador.textContent = `Salto ${saltoActual + 1} de ${saltosTotales}`;
                
                // Iniciar saltos con cambio de color
                intervalo = setInterval(() => {
                    saltoActual++;
                    
                    // Cambiar color de fondo
                    body.style.backgroundColor = colores[saltoActual % colores.length];
                    
                    // Cambiar color de pelota
                    if (saltoActual % 2 === 0) {
                        pelota.style.background = '#ff0000'; // Rojo
                    } else {
                        pelota.style.background = '#00ff00'; // Verde
                    }
                    
                    contador.textContent = `Salto ${saltoActual} de ${saltosTotales}`;
                    
                    if (saltoActual >= saltosTotales) {
                        clearInterval(intervalo);
                        contador.textContent = `¡🎉 ${saltosTotales} saltos completados!`;
                        pelota.style.display = 'none';
                    }
                }, 1000); // Cada segundo cambia
            }
        });
