// 1. BASE DE DATOS DE SECCIONES Y BANDERAS
const SECCIONES_ALBUM = {
    "Alemania": { prefijo: "GER", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000000 33%, #FFCC00 33% 66%, #DD0000 66%)" },
    "Arabia Saudita": { prefijo: "KSA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006C35, #228B22)" },
    "Argelia": { prefijo: "ALG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006233 50%, #FFFFFF 50%)", textoOscuro: true },
    "Argentina": { prefijo: "ARG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #74ACDF 33%, #FFFFFF 33% 66%, #74ACDF 66%)", textoOscuro: true },
    "Australia": { prefijo: "AUS", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000033, #FF0000, #FFFFFF)" },
    "Austria": { prefijo: "AUT", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #ED2939 33%, #FFFFFF 33% 66%, #ED2939 66%)", textoOscuro: true },
    "Bélgica": { prefijo: "BEL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000000 33%, #FAE042 33% 66%, #ED2939 66%)", textoOscuro: true },
    "Bosnia y Herzegovina": { prefijo: "BIH", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002395 60%, #FECB00 60%)" },
    "Brasil": { prefijo: "BRA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #009739 70%, #FFDF00 70%)" },
    "Cabo Verde": { prefijo: "CPV", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002A66 60%, #FFD100 60% 70%, #CE1126 70%)" },
    "Canadá": { prefijo: "CAN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FF0000 25%, #FFFFFF 25% 75%, #FF0000 75%)", textoOscuro: true },
    "Catar": { prefijo: "QAT", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #8A1538 70%, #FFFFFF 70%)" },
    "Chequia": { prefijo: "CZE", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #11457E 40%, #FFFFFF 40%, #D7141A)" },
    "Colombia": { prefijo: "COL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FCD116 50%, #003893 50% 75%, #CE1126 75%)", textoOscuro: true },
    "Costa de Marfil": { prefijo: "CIV", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #F77F00 33%, #FFFFFF 33% 66%, #009E60 66%)", textoOscuro: true },
    "Croacia": { prefijo: "CRO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FF0000, #FFFFFF, #000099)" },
    "Curazao": { prefijo: "CUW", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002B7F 80%, #F9E316 80%)" },
    "Ecuador": { prefijo: "ECU", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFDD00 50%, #034EA2 50% 75%, #DA291C 75%)" },
    "Egipto": { prefijo: "EGY", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #CE1126 33%, #FFFFFF 33% 66%, #000000 66%)", textoOscuro: true },
    "Escocia": { prefijo: "SCO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #0065BF, #FFFFFF)", textoOscuro: true },
    "España": { prefijo: "ESP", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #AA151B 25%, #F1BF00 25% 75%, #AA151B 75%)", textoOscuro: true },
    "Estados Unidos": { prefijo: "USA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #002868 30%, #BF0A30 30%)" },
    "Francia": { prefijo: "FRA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #0055A4 33%, #FFFFFF 33% 66%, #EF4135 66%)", textoOscuro: true },
    "Ghana": { prefijo: "GHA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #E21C1C 33%, #FCD116 33% 66%, #006B3F 66%)", textoOscuro: true },
    "Haití": { prefijo: "HAI", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00209F 50%, #D21034 50%)" },
    "Inglaterra": { prefijo: "ENG", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF 80%, #CE1126)", textoOscuro: true },
    "Irak": { prefijo: "IRQ", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #CE1126 33%, #FFFFFF 33% 66%, #000000 66%)", textoOscuro: true },
    "Irán": { prefijo: "IRN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #228B22 33%, #FFFFFF 33% 66%, #DA291C 66%)", textoOscuro: true },
    "Japón": { prefijo: "JPN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF 65%, #BC002D)", textoOscuro: true },
    "Jordania": { prefijo: "JOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #000000 33%, #007A3D 33% 66%, #FFFFFF 66%)", textoOscuro: true },
    "Marruecos": { prefijo: "MAR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #C1272D, #006233)" },
    "México": { prefijo: "MEX", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006847 33%, #FFFFFF 33% 66%, #CE1126 66%)", textoOscuro: true },
    "Noruega": { prefijo: "NOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #BA0C2F, #00205B)" },
    "Nueva Zelanda": { prefijo: "NZL", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00247D, #111111)" },
    "Países Bajos": { prefijo: "NED", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #AE1C28 33%, #FFFFFF 33% 66%, #21468B 66%)", textoOscuro: true },
    "Panamá": { prefijo: "PAN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00167F 50%, #D21034 50%)" },
    "Paraguay": { prefijo: "PAR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #D11919 33%, #FFFFFF 33% 66%, #1A398B 66%)", textoOscuro: true },
    "Portugal": { prefijo: "POR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006600 40%, #FF0000 40%)" },
    "República de Corea": { prefijo: "KOR", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF 70%, #CD2E3A, #0047A0)", textoOscuro: true },
    "República del Congo": { prefijo: "CGO", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006600 33%, #FFCC00 33% 66%, #FF0000 66%)", textoOscuro: true },
    "Senegal": { prefijo: "SEN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #008543 33%, #FDEF42 33% 66%, #E31B23 66%)", textoOscuro: true },
    "Sudáfrica": { prefijo: "RSA", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #007A4D, #E23D28, #002395)" },
    "Suecia": { prefijo: "SWE", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #006AA7 65%, #FECC00 65%)" },
    "Suiza": { prefijo: "SUI", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #D52B1E, #E30613)" },
    "Túnez": { prefijo: "TUN", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #E71011, #FFFFFF)" },
    "Uruguay": { prefijo: "URU", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #FFFFFF 50%, #0038A8 50%)", textoOscuro: true },
    "Uzbekistán": { prefijo: "UZB", inicio: 1, fin: 20, bg: "linear-gradient(135deg, #00A6EF 33%, #FFFFFF 33% 66%, #1C9F46 66%)", textoOscuro: true },
    "FIFA": { prefijo: "FWC", inicio: 9, fin: 19, bg: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)", textoOscuro: true },
    "Coca-Cola": { prefijo: "CC", inicio: 1, fin: 14, bg: "linear-gradient(135deg, #FE001A, #000000)" }
};

const TOTAL_LAMINAS = 980;

// selectores del DOM
const vistaMenu = document.getElementById('vista-menu');
const vistaSeccion = document.getElementById('vista-seccion');
const vistaRepetidas = document.getElementById('vista-repetidas');
const btnVolver = document.getElementById('btn-volver');
const btnVerRepetidas = document.getElementById('btn-ver-repetidas');
const appTitulo = document.getElementById('app-titulo');
const cuadrillaLaminas = document.getElementById('cuadrilla-laminas');
const tituloSeccion = document.getElementById('titulo-seccion-activa');
const seccionContador = document.getElementById('seccion-contador');
const listaRepetidasContenedor = document.getElementById('lista-repetidas-contenedor');

let seccionActiva = null;

// Funciones Helper para obtener datos frescos directamente de LocalStorage en cada llamada
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

function inicializarAlbum() {
    let inv = obtenerInventarioFresco();
    let rep = obtenerRepetidasFrescas();
    let cambios = false;

    Object.values(SECCIONES_ALBUM).forEach(sec => {
        for (let i = sec.inicio; i <= sec.fin; i++) {
            const codigo = `${sec.prefijo}${i}`;
            if (inv[codigo] === undefined) { inv[codigo] = false; cambios = true; }
            if (rep[codigo] === undefined) { rep[codigo] = 0; cambios = true; }
        }
    });
    if (cambios) guardarDatos(inv, rep);
}

// 1. VISTA: MENÚ DE MATRICES PRINCIPALES
function renderizarMatrizMenu() {
    ocultarTodo();
    appTitulo.classList.remove('hidden');
    vistaMenu.classList.remove('hidden');

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

        // Modificar Estado Principal (Tengo / No tengo)
        botonBase.addEventListener('click', () => {
            let actualInv = obtenerInventarioFresco();
            let actualRep = obtenerRepetidasFrescas();
            
            actualInv[codigo] = !actualInv[codigo];
            if (!actualInv[codigo]) actualRep[codigo] = 0; // Si se desmarca, quita repetidas
            
            guardarDatos(actualInv, actualRep);
            actualizarProgresoGlobal();
            mostrarVistaSeccion(); // Redibuja con datos frescos
        });

        const botonMasRepetida = document.createElement('button');
        botonMasRepetida.className = `absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shadow-md z-10 transition-transform active:scale-125 ${
            cantRepetidas > 0 
                ? 'bg-yellow-500 text-gray-950 border border-yellow-300' 
                : 'bg-gray-800 text-gray-400 border border-gray-700'
        }`;
        botonMasRepetida.innerText = cantRepetidas > 0 ? `${cantRepetidas}` : '+';

        // Modificar Estado de Repetidas (+)
        botonMasRepetida.addEventListener('click', (e) => {
            e.stopPropagation();
            let actualInv = obtenerInventarioFresco();
            let actualRep = obtenerRepetidasFrescas();
            
            if (!actualInv[codigo]) actualInv[codigo] = true;
            actualRep[codigo] = (actualRep[codigo] || 0) + 1;
            
            guardarDatos(actualInv, actualRep);
            actualizarProgresoGlobal();
            mostrarVistaSeccion(); // Redibuja con datos frescos
        });

        casillaContenedor.appendChild(botonBase);
        casillaContenedor.appendChild(botonMasRepetida);
        cuadrillaLaminas.appendChild(casillaContenedor);
    }

    actualizarProgresoGlobal();
}

// 3. VISTA: LISTA DE REPETIDAS ALFABÉTICA
function mostrarVistaRepetidas() {
    ocultarTodo();
    btnVolver.classList.remove('hidden');
    vistaRepetidas.classList.remove('hidden');
    listaRepetidasContenedor.innerHTML = '';

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
            
            listaRepetidasContenedor.appendChild(bloquePais);
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
                    let actualInv = obtenerInventarioFresco();
                    let actualRep = obtenerRepetidasFrescas();
                    
                    if (actualRep[item.cod] > 0) {
                        actualRep[item.cod]--;
                        guardarDatos(actualInv, actualRep);
                        actualizarProgresoGlobal();
                        mostrarVistaRepetidas(); // Redibuja la lista al instante
                    }
                });

                contenedorFichas.appendChild(ficha);
            });
        }
    });

    if (flagContadorVacio) {
        listaRepetidasContenedor.innerHTML = `
            <div class="text-center py-12 text-gray-500 font-medium">
                <p class="text-lg">No tienes láminas repetidas aún. 🤞</p>
                <p class="text-xs text-gray-600 mt-1">Usa el botón "+" en las secciones para añadirlas.</p>
            </div>
        `;
    }
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
    renderizarMatrizMenu(); // Vuelve a la matriz principal y lee los contadores actualizados
});

btnVerRepetidas.addEventListener('click', () => {
    mostrarVistaRepetidas();
});

// Inicialización de la SPA
document.addEventListener("DOMContentLoaded", () => {
    inicializarAlbum();
    renderizarMatrizMenu();
    actualizarProgresoGlobal();
});