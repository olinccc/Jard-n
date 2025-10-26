function createSquares() {
    // reset básico para evitar márgenes por defecto que rompen el layout
    document.documentElement.style.boxSizing = 'border-box';
    document.body.style.boxSizing = 'border-box';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    // si ya existe, no duplicar
    const existing = document.getElementById('squares-container');
    if (existing) {
        existing.remove();
    }

    const container = document.createElement('div');
    container.id = 'squares-container';

    // ocupa toda la ventana exactamente
    container.style.position = 'fixed';
    container.style.inset = '0'; // top:0; right:0; bottom:0; left:0
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gridTemplateRows = 'repeat(2, 1fr)';
    container.style.gap = '1rem';
    container.style.padding = '1rem';
    container.style.boxSizing = 'border-box';
    container.style.background = 'transparent';
    container.style.zIndex = '10';
    container.style.pointerEvents = 'none'; // si quieres que no interfiera con UI actual

    for (let i = 0; i < 6; i++) {
        const square = document.createElement('div');
        square.className = 'square-cell';
        // visual
        square.style.backgroundColor = '#4CAF50';
        square.style.borderRadius = '12px';
        square.style.display = 'flex';
        square.style.alignItems = 'center';
        square.style.justifyContent = 'center';
        square.style.color = '#fff';
        square.style.fontFamily = 'sans-serif';
        square.style.fontSize = '1rem';
        square.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
        // importante para que el grid distribuya correctamente la altura
        square.style.minHeight = '0';
        square.style.overflow = 'hidden';
        // ocupa todo el espacio de la celda
        square.style.width = '100%';
        square.style.height = '100%';
        square.style.pointerEvents = 'auto'; // permite interacción a cada celda si luego añades texto/links

        // texto de placeholder (puedes quitarlo)
        const label = document.createElement('div');
        label.textContent = `Cuadro ${i + 1}`;
        label.style.padding = '1rem';
        square.appendChild(label);

        container.appendChild(square);
    }

    document.body.appendChild(container);

    // asegurar que no haya duplicados y no tocar estilos globales aquí
    (function ensureSquares() {
        if (document.querySelectorAll('.square').length >= 6) {
            console.log('Ya existen .square:', document.querySelectorAll('.square').length);
            return;
        }

        const frag = document.createDocumentFragment();
        for (let i = 0; i < 6; i++) {
            const d = document.createElement('div');
            d.className = 'square';
            frag.appendChild(d);
        }
        document.body.insertBefore(frag, document.body.firstChild);
        console.log('Se crearon 6 .square dinámicamente');
    })();
}