// 1. BASE DE DATOS DE SECCIONES Y BANDERAS
const SECCIONES_ALBUM = {
    "Alemania": { prefijo: "GER", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000000 33%, #FFCC00 33% 66%, #DD0000 66%)" },
    "Arabia Saudita": { prefijo: "KSA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006C35, #228B22)" },
    "Argelia": { prefijo: "ALG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006233 50%, #FFFFFF 50%)\", textoOscuro: true" },
    "Argentina": { prefijo: "ARG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #74ACDF 33%, #FFFFFF 33% 66%, #74ACDF 66%)", textoOscuro: true },
    "Australia": { prefijo: "AUS", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000033, #FF0000, #FFFFFF)" },
    "Austria": { prefijo: "AUT", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #ED2939 33%, #FFFFFF 33% 66%, #ED2939 66%)", textoOscuro: true },
    "Bélgica": { prefijo: "BEL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000000 33%, #FFD300 33% 66%, #E30A17 66%)" },
    "Bosnia y Herzegovina": { prefijo: "BIH", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002395, #FECB00)" },
    "Brasil": { prefijo: "BRA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #009C3B, #FFDF00)", textoOscuro: true },
    "Cabo Verde": { prefijo: "CPV", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #003893, #D21034)" },
    "Canadá": { prefijo: "CAN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FF0000 33%, #FFFFFF 33% 66%, #FF0000 66%)", textoOscuro: true },
    "Coca Cola": { prefijo: "CC", inicio: 1, fin: 14, bg: "linear-gradient(135deg, #e60000, #990000)" },
    "Colombia": { prefijo: "COL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FCD116 50%, #003893 50 75%, #CE1126 75%)", textoOscuro: true },
    "Congo": { prefijo: "CGO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006633, #FFCC00, #CE1126)", textoOscuro: true },
    "Corea del Sur": { prefijo: "KOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF, #CD2E3A, #057E3F)", textoOscuro: true },
    "Costa de Marfil": { prefijo: "CIV", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #F77F00 33%, #FFFFFF 33% 66%, #009E60 66%)", textoOscuro: true },
    "Croacia": { prefijo: "CRO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FF0000, #FFFFFF, #002395)" },
    "Curazao": { prefijo: "CUW", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002B7F, #F9E311)" },
    "Ecuador": { prefijo: "ECU", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFDD00 50%, #0033A0 50% 75%, #D52B1E 75%)", textoOscuro: true },
    "Egipto": { prefijo: "EGY", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #C8102E 33%, #FFFFFF 33% 66%, #000000 66%)" },
    "Escocia": { prefijo: "SCO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #0065BF, #002B5C)" },
    "España": { prefijo: "ESP", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #AA151B 25%, #F1BF00 25% 75%, #AA151B 75%)", textoOscuro: true },
    "Estados Unidos": { prefijo: "USA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #B22234, #3C3B6E)" },
    "FWC": { prefijo: "FWC", inicio: 9, fin: 19, bg: "linear-gradient(135deg, #8a1538, #560a25)" },
    "Francia": { prefijo: "FRA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #0055A4 33%, #FFFFFF 33% 66%, #EF4135 66%)" },
    "Ghana": { prefijo: "GHA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FCD116, #E2183C, #006B3F)", textoOscuro: true },
    "Haití": { prefijo: "HAI", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00209F 50%, #D21034 50%)" },
    "Inglaterra": { prefijo: "ENG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF, #CE1126)", textoOscuro: true },
    "Irán": { prefijo: "IRN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #239B56, #FFFFFF, #D98880)", textoOscuro: true },
    "Iraq": { prefijo: "IRQ", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #CE1126 33%, #FFFFFF 33% 66%, #000000 66%)" },
    "Japón": { prefijo: "JPN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF, #BC002D)", textoOscuro: true },
    "Jordania": { prefijo: "JOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #1A5235, #000000, #FFFFFF)" },
    "Marruecos": { prefijo: "MAR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #C1272D, #006233)" },
    "México": { prefijo: "MEX", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006847 33%, #FFFFFF 33% 66%, #CE1126 66%)", textoOscuro: true },
    "Noruega": { prefijo: "NOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #EF4135, #002868)" },
    "Nueva Zelanda": { prefijo: "NZL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00247D, #000000)" },
    "Países Bajos": { prefijo: "NED", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #214189, #FFFFFF, #E36B2B)" },
    "Panamá": { prefijo: "PAN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #005293, #D21034, #FFFFFF)" },
    "Panini": { prefijo: "PANINI", inicio: 1, fin: 8, bg: "linear-gradient(135deg, #1e3a8a, #3b82f6)" },
    "Paraguay": { prefijo: "PAR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #D1121C 33%, #FFFFFF 33% 66%, #0038A8 66%)", textoOscuro: true },
    "Portugal": { prefijo: "POR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #046A38 40%, #DA291C 40%)" },
    "Qatar": { prefijo: "QAT", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #8A1538, #7A102F)" },
    "República Checa": { prefijo: "CZE", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF 50%, #D7141A 50%)", textoOscuro: true },
    "Senegal": { prefijo: "SEN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FCD116, #00853F, #E31B23)", textoOscuro: true },
    "Suecia": { prefijo: "SWE", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006AA7, #FECC00)", textoOscuro: true },
    "Suiza": { prefijo: "SUI", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #D52B1E, #A31D14)" },
    "Túnez": { prefijo: "TUN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #E71D23, #C3191E)" },
    "Turquía": { prefijo: "TUR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #E30A17, #B30812)" },
    "Uruguay": { prefijo: "URU", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #43A1D5, #FFFFFF)", textoOscuro: true },
    "Uzbekistán": { prefijo: "UZB", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #0099B5, #FFFFFF, #1EB53A)", textoOscuro: true }
};

const TOTAL_LAMINAS = 980;

// Variables de estado
let seccionActiva = null;

// Elementos DOM del Header
const btnVolver = document.getElementById('btn-volver');
const appTitulo = document.getElementById('app-titulo');

// Elementos DOM de las Vistas
const vistaMenu = document.getElementById('vista-menu');
const vistaSeccion = document.getElementById('vista-seccion');
const vistaRepetidas = document.getElementById('vista-repetidas');

// Elementos Internos de Vista Sección
const tituloSeccion = document.getElementById('titulo-seccion-activa');
const seccionContador = document.getElementById('seccion-contador');
const cuadrillaLaminas = document.getElementById('cuadrilla-laminas');

// LocalStorage Fresh Getters
function obtenerInventarioFresco() {
    return JSON.parse(localStorage.getItem('panini_2026')) || {};
}

function obtenerRepetidasFrescas() {
    return JSON.parse(localStorage.getItem('panini_2026_rep')) || {};
}

function guardarDatos(inv, rep) {
    localStorage.setItem('panini_2026', JSON.stringify(inv));
    localStorage.setItem('panini_2026_rep', JSON.stringify(rep));
}

// 1. VISTA: MENÚ DE MATRICES PRINCIPALES
function renderizarMatrizMenu() {
    ocultarTodo();
    appTitulo.classList.remove('hidden');
    vistaMenu.classList.remove('hidden');

    // SOLUCIÓN: Limpiar por completo las tarjetas antiguas para evitar que los contadores se queden acumulados o congelados
    vistaMenu.innerHTML = ''; 

    const inv = obtenerInventarioFresco();
    const rep = obtenerRepetidasFrescas();

    const llavesOrdenadas = Object.keys(SECCIONES_ALBUM).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    llavesOrdenadas.forEach(nombre => {
        const info = SECCIONES_ALBUM[nombre];
        let obtenidasSeccion = 0;
        const totalSeccion = (info.fin - info.inicio) + 1;
        let repetidasSeccion = 0;
        
        for (let i = info.inicio; i <= info.fin; i++) {
            const cod = `${info.prefijo}${i}`;
            if (inv[cod]) obtenidasSeccion++;
            repetidasSeccion += (rep[cod] || 0);
        }

        const completado = obtenidasSeccion === totalSeccion;
        const tarjeta = document.createElement('div');
        
        const colorTexto = info.textoOscuro ? '#0f172a' : '#ffffff';
        const colorSub = info.textoOscuro ? 'rgba(15, 23, 42, 0.6)' : 'rgba(243, 244, 246, 0.7)';

        tarjeta.className = "p-4 rounded-2xl border flex flex-col justify-between h-28 cursor-pointer transition-all active:scale-95 shadow-md overflow-hidden select-none";
        tarjeta.style.backgroundImage = info.bg;
        tarjeta.style.color = colorTexto;
        tarjeta.style.borderColor = completado ? '#10b981' : 'rgba(75, 85, 99, 0.4)';
        if (completado) tarjeta.style.borderWidth = '4px';

        tarjeta.innerHTML = `
            <div>
                <h3 class="font-extrabold text-sm uppercase tracking-wide truncate">${nombre}</h3>
                <span class="text-[10px] font-mono uppercase tracking-widest font-bold" style="color: ${colorSub}">${info.prefijo}</span>
            </div>
            <div class="flex justify-between items-end mt-2">
                <span class="text-xs font-mono font-black bg-black/10 px-2 py-0.5 rounded-md">${obtenidasSeccion}/${totalSeccion}</span>
                ${repetidasSeccion > 0 ? `<span class="text-[10px] font-bold bg-yellow-500/90 text-gray-950 px-1.5 py-0.5 rounded-full shadow-sm">+${repetidasSeccion} rep</span>` : `<span>${completado ? '✅' : '⏳'}</span>`}
            </div>
        `;

        tarjeta.addEventListener('click', () => {
            seccionActiva = nombre;
            mostrarVistaSeccion();
        });

        vistaMenu.appendChild(tarjeta);
    });
}

// 2. VISTA: DETALLE INTERNO DE LÁMINAS NUMÉRICAS
function mostrarVistaSeccion() {
    ocultarTodo();
    btnVolver.classList.remove('hidden');
    vistaSeccion.classList.remove('hidden');
    cuadrillaLaminas.innerHTML = '';

    const inv = obtenerInventarioFresco();
    const rep = obtenerRepetidasFrescas();
    const infoSec = SECCIONES_ALBUM[seccionActiva];
    const totalSeccion = (infoSec.fin - infoSec.inicio) + 1;
    
    let obtenidasSeccion = 0;
    let repetidasSeccion = 0;

    for (let i = infoSec.inicio; i <= infoSec.fin; i++) {
        const codigo = `${infoSec.prefijo}${i}`;
        if (inv[codigo]) obtenidasSeccion++;
        repetidasSeccion += (rep[codigo] || 0);
    }

    tituloSeccion.innerText = `${seccionActiva} (${infoSec.prefijo})`;
    seccionContador.innerHTML = `
        <span class="font-bold text-white">${obtenidasSeccion}/${totalSeccion}</span>
        <span class="text-yellow-300 font-black">🔄 ${repetidasSeccion} rep</span>
    `;

    for (let i = infoSec.inicio; i <= infoSec.fin; i++) {
        const codigo = `${infoSec.prefijo}${i}`;
        const yaLaTengo = inv[codigo];
        const cantRepetidas = rep[codigo] || 0;

        const casillaContenedor = document.createElement('div');
        casillaContenedor.className = "relative aspect-square w-full select-none";

        const botonBase = document.createElement('div');
        botonBase.className = `w-full h-full flex flex-col items-center justify-center rounded-xl font-mono cursor-pointer transition-all border ${
            yaLaTengo 
                ? 'bg-emerald-600 border-emerald-400 text-white shadow-md font-black' 
                : 'bg-gray-900 border-gray-800 text-gray-500'
        }`;

        botonBase.innerHTML = `
            <span class="text-[9px] uppercase tracking-wider ${yaLaTengo ? 'text-emerald-200/60' : 'text-gray-600'} font-medium">${infoSec.prefijo}</span>
            <span class="text-lg">${i}</span>
        `;

        botonBase.addEventListener('click', () => {
            let actualInv = obtenerInventarioFresco();
            let actualRep = obtenerRepetidasFrescas();
            
            actualInv[codigo] = !actualInv[codigo];
            if (!actualInv[codigo]) actualRep[codigo] = 0;
            
            guardarDatos(actualInv, actualRep);
            mostrarVistaSeccion();
        });

        const botonMasRepetida = document.createElement('button');
        botonMasRepetida.className = `absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shadow-md z-10 transition-transform active:scale-125 ${
            cantRepetidas > 0 
                ? 'bg-yellow-500 text-gray-950 border border-yellow-300' 
                : 'bg-gray-800 text-gray-400 border border-gray-700'
        }`;
        botonMasRepetida.innerText = cantRepetidas > 0 ? `${cantRepetidas}` : '+';

        botonMasRepetida.addEventListener('click', (e) => {
            e.stopPropagation();
            let actualInv = obtenerInventarioFresco();
            let actualRep = obtenerRepetidasFrescas();
            
            if (!actualInv[codigo]) actualInv[codigo] = true;
            actualRep[codigo] = (actualRep[codigo] || 0) + 1;
            
            guardarDatos(actualInv, actualRep);
            mostrarVistaSeccion();
        });

        casillaContenedor.appendChild(botonBase);
        casillaContenedor.appendChild(botonMasRepetida);
        cuadrillaLaminas.appendChild(casillaContenedor);
    }

    actualizarProgresoGlobal();
}

// 3. VISTA: LISTADO GLOBAL DE REPETIDAS (OPCIONAL/EXTERNA)
const btnVerRepetidas = document.getElementById('btn-ver-repetidas');
if (btnVerRepetidas) {
    btnVerRepetidas.addEventListener('click', () => {
        ocultarTodo();
        btnVolver.classList.remove('hidden');
        vistaRepetidas.classList.remove('hidden');
        
        const contenedorRep = document.getElementById('lista-repetidas-contenedor');
        if (!contenedorRep) return;
        contenedorRep.innerHTML = '';
        
        const rep = obtenerRepetidasFrescas();
        const paisesOrdenados = Object.keys(SECCIONES_ALBUM).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
        let flagContadorVacio = true;

        paisesOrdenados.forEach(pais => {
            const info = SECCIONES_ALBUM[pais];
            let laminasRepetidasDeEstePais = [];

            for (let i = info.inicio; i <= info.fin; i++) {
                const codigo = `${info.prefijo}${i}`;
                if (rep[codigo] > 0) {
                    laminasRepetidasDeEstePais.push({ num: i, cod: codigo, cant: rep[codigo] });
                }
            }

            if (laminasRepetidasDeEstePais.length > 0) {
                flagContadorVacio = false;
                const bloquePais = document.createElement('div');
                bloquePais.className = "p-4 bg-gray-900 border border-gray-800 rounded-2xl space-y-2 shadow-sm";
                
                bloquePais.innerHTML = `
                    <div class="flex items-center gap-2 border-b border-gray-800 pb-2">
                        <div class="w-6 h-4 rounded shadow-sm" style="background: ${info.bg}"></div>
                        <h3 class="font-bold text-sm text-yellow-400 uppercase tracking-wider">${pais}</h3>
                    </div>
                    <div class="flex flex-wrap gap-2 pt-1" id="frenos-${info.prefijo}"></div>
                `;
                
                contenedorRep.appendChild(bloquePais);
                const contenedorFichas = document.getElementById(`frenos-${info.prefijo}`);

                laminasRepetidasDeEstePais.forEach(item => {
                    const ficha = document.createElement('div');
                    ficha.className = "flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-xl font-mono text-xs font-bold";
                    ficha.innerHTML = `
                        <span class="text-gray-400">${item.cod}</span>
                        <span class="bg-yellow-500 text-gray-950 px-1.5 py-0.2 rounded font-black">x${item.cant}</span>
                        <button class="text-red-400 font-bold hover:text-red-300 ml-1 px-1 bg-red-500/10 rounded">✕</button>
                    `;

                    ficha.querySelector('button').addEventListener('click', () => {
                        let actualRep = obtenerRepetidasFrescas();
                        
                        if (actualRep[item.cod] > 0) {
                            actualRep[item.cod]--;
                            guardarDatos(obtenerInventarioFresco(), actualRep);
                            actualizarProgresoGlobal();
                            // Recargar la vista
                            btnVerRepetidas.click();
                        }
                    });

                    contenedorFichas.appendChild(ficha);
                });
            }
        });

        if (flagContadorVacio) {
            contenedorRep.innerHTML = `
                <div class="text-center py-12 text-gray-500 font-medium">
                    <p class="text-lg">No tienes láminas repetidas aún. 🤞</p>
                    <p class="text-xs text-gray-600 mt-1">Usa el botón "+" en las secciones para añadirlas.</p>
                </div>
            `;
        }
    });
}

// Utilidades de Control de interfaz
function ocultarTodo() {
    vistaMenu.classList.add('hidden');
    vistaSeccion.classList.add('hidden');
    vistaRepetidas.classList.add('hidden');
    btnVolver.classList.add('hidden');
    appTitulo.classList.add('hidden');
}

function actualizarProgresoGlobal() {
    const inv = obtenerInventarioFresco();
    const rep = obtenerRepetidasFrescas();
    
    const totalObtenidas = Object.values(inv).filter(Boolean).length;
    const porcentaje = ((totalObtenidas / TOTAL_LAMINAS) * 100).toFixed(1);
    const totalRepetidas = Object.values(rep).reduce((a, b) => a + b, 0);
    
    document.getElementById('progreso-txt').innerHTML = `
        <span class="text-green-400 font-bold">${totalObtenidas}/${TOTAL_LAMINAS}</span> 
        <span class="text-gray-500 mx-1">|</span> 
        <span class="text-yellow-400 font-black">🔄 ${totalRepetidas} rep</span>
    `;
}

// Controladores de eventos de los botones superiores
btnVolver.addEventListener('click', () => {
    seccionActiva = null;
    renderizarMatrizMenu(); // Vuelve a la matriz de forma limpia recalculando los datos y borrando elementos previos
});

// Inicialización de la App al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Agregar algunas repetidas de ejemplo si no hay ninguna
    let rep = obtenerRepetidasFrescas();
    if (Object.keys(rep).length === 0) {
        rep['GER1'] = 2;
        rep['ARG5'] = 1;
        rep['BRA10'] = 3;
        guardarDatos(obtenerInventarioFresco(), rep);
    }
    renderizarMatrizMenu();
    actualizarProgresoGlobal();
});