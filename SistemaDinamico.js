(function() {
  const sectionsData = {
    cp: [
      { title: "Traslados Interplantas", desc: "Registre los tiempos de atención de las unidades.", img: "Traslados.jpeg", link: "https://docs.google.com/spreadsheets/d/1KnZfYkNolj9k9X3qIyj89ebLdXGW1w7CNQ5GV7lBHJg/edit?usp=sharing" },
      { title: "Control de Film", desc: "Registre el consumo de film en los despachos.", img: "ControlFilmx.jpg", link: "https://docs.google.com/spreadsheets/d/1SfJHz2OElh5yetJ_NDWTOysi1ctVMya69_VwJ_vGvXk/edit?usp=sharing" },
      { title: "Control de Despachos", desc: "Registre el detalle de los despachos programados.", img: "Despachox.jpg", link: "#" },
      { title: "Traslados Granel", desc: "Atención de unidades cargadas con film.", img: "TrasladoGranelx.jpg", link: "#" },
      { title: "Reportes de Calidad", desc: "Bultos observados por calidad o daño.", img: "ReporteCalidadx.jpg", link: "https://docs.google.com/spreadsheets/d/1Ht-r55btoKb7YiI7kHBrX-3N_t0cKQTSpngsZUtFTV4/edit?usp=sharing" },
      { title: "Inventarios", desc: "Realiza la conciliacion de SAP vs Fisico.", img: "Exportacionx.jpg", link: "https://docs.google.com/spreadsheets/d/1SsoE1P-IZNOsW9pRPqJ0Aq-C8q58xp5o82scRU1ZlC0/edit?usp=drive_link" }
    ],
    ad: [
      { title: "Avance de Despachos", desc: "Registre el avance de despachos.", img: "Despachox.jpg", link: "#" },
      { title: "Reporte de Traslados Atendidos", desc: "Registre el número de unidades atendidas diariamente.", img: "Trasladox.jpg", link: "#" },
      { title: "Liquidaciones", desc: "Registra las liquidaciones de los despachos.", img: "Ventas.jpeg", link: "#" }
    ],
    am: [
      { title: "FEFO", desc: "Registra el movimiento de producto.", img: "Fefox.jpg", link: "https://docs.google.com/spreadsheets/d/1eagBtRYuWBIVVvvdCe8MnCB2xHDxGErIB9XImfPXO4g/edit?usp=drive_link" },
      { title: "Ingreso de Productos", desc: "Agrega nuevos productos al inventario.", img: "Produccion.jpg", link: "#" }
    ],
    so: [
      { title: "Informe Diario", desc: "Registre los movimientos de productos.", img: "Informex.jpg", link: "#" },
      { title: "Ocupabilidad", desc: "Agrega nuevos productos al inventario.", img: "Ocupabilidadx.jpg", link: "#" },
      { title: "Horario", desc: "Programa el rol de turnos de tu equipo.", img: "Horariox.jpg", link: "#" }
    ],
    "reportes-generales": [
      { title: "Evolución de Ventas", desc: "Visualiza el progreso de las ventas.", img: "Ventas.jpeg", link: "#" },
      { title: "Costos de Estibaje", desc: "Visualiza los costos asociados al estibaje.", img: "Estibajex.jpg", link: "#" },
      { title: "Tiempos de Atención", desc: "Consulta los tiempos de atención de unidades.", img: "Traslados.jpeg", link: "https://lookerstudio.google.com/reporting/c65e2dde-10fe-441b-ba64-61a973faad94/page/d55wE/edit" },
      { title: "Descuentos Acumulados", desc: "Consulta los descuentos aplicados.", img: "KPI.jpg", link: "#" },
      { title: "Avance de Ocupabilidad", desc: "Evalúa la ocupación del almacén.", img: "Produccion.jpg", link: "#" },
      { title: "Reporte de Lento Movimiento", desc: "Identifica productos de lento movimiento.", img: "Movimientos.jpeg", link: "#" },
      { title: "Sloting", desc: "Optimiza la ubicación de productos.", img: "Reporte.jpeg", link: "#" },
      { title: "Muestreo de Tarimas", desc: "Visualiza los resultados del muestreo de tarimas.", img: "Traslados.jpeg", link: "#" }
    ],
    birthdays: [
      { month: "Enero", name: "Luis Damián", date: "02-01", img: "cumpleanos.jpg" },
      { month: "Febrero", name: "José Loza", date: "12-02", img: "cumpleanos.jpg" },
      { month: "Febrero", name: "Juan Cossio", date: "21-02", img: "cumpleanos.jpg" },
      { month: "Marzo", name: "Fabian Laura", date: "15-03", img: "cumpleanos.jpg" },
      { month: "Marzo", name: "Alejandro Evangelista", date: "19-03", img: "cumpleanos.jpg" },
      { month: "Abril", name: "Iomar Bendezú", date: "14-04", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Jhon Gutierrez", date: "01-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Johana Yactayo", date: "19-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Carlos Barillas", date: "25-05", img: "cumpleanos.jpg" },
      { month: "Mayo", name: "Manuel Magallanes", date: "31-05", img: "cumpleanos.jpg" },
      { month: "Junio", name: "Julio Pachas", date: "01-06", img: "cumpleanos.jpg" },
      { month: "Junio", name: "Hugo Chavez", date: "25-06", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Florencio Vilca", date: "07-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Josemaria Chumpitaz", date: "12-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Giancarlo Nolasco", date: "15-07", img: "cumpleanos.jpg" },
      { month: "Julio", name: "Luis Medina", date: "22-07", img: "cumpleanos.jpg" },
      { month: "Septiembre", name: "Miguel Pachas", date: "09-09", img: "cumpleanos.jpg" },
      { month: "Septiembre", name: "James Villanueva", date: "17-09", img: "cumpleanos.jpg" },
      { month: "Octubre", name: "Mario Magallanes", date: "18-10", img: "cumpleanos.jpg" },
      { month: "Noviembre", name: "Jesus Llanos", date: "09-11", img: "cumpleanos.jpg" },
      { month: "Diciembre", name: "Ener Cipriano", date: "12-12", img: "cumpleanos.jpg" }
    ],
    tpm: {
      "tarjetas-tpm": [
        { title: "Tarjetas Azules-Rojas", desc: "Registra incidencias críticas.", img: "tarjetas_azules_rojas.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSdSHEobkCu9n4aH4Q-aOYkzIjhBRoM4MecYRCNKAqNFPr2CPw/viewform" },
        { title: "Tarjetas Verdes", desc: "Registra mejoras propuestas.", img: "tarjetas_verdes.jpg", link: "https://docs.google.com/forms/d/e/1FAIpQLSf5ZFf_AvHH80JRAS12x6IZPOI_HoIYQG5TC9eVCGiiHNn24w/viewform" }
      ],
      "matriz-habilidades": [
        { title: "Matriz de Habilidades", desc: "Evalúa las competencias del equipo.", img: "Matrizx.jpg", link: "https://docs.google.com/spreadsheets/d/1oD5oajklPJOj99iKKMG_vqVF6WNCxwgEr0dPqKrniz8/edit?usp=sharing" }
      ],
      "instructivos": [
        { title: "Instructivos TPM", desc: "Consulta los manuales de TPM.", img: "instructivos.jpg", link: "https://drive.google.com/drive/folders/1NgVabT7hPyVlT8XpnmQFcLTpDKCOGTBP?usp=sharing" }
      ]
    }
  };

  const monthMap = {
    '01': 'ene', '02': 'feb', '03': 'mar', '04': 'abr', '05': 'may', '06': 'jun',
    '07': 'jul', '08': 'ago', '09': 'sep', '10': 'oct', '11': 'nov', '12': 'dic'
  };

  function getMonthAbbreviation(month) {
    const numMonth = month.toString().padStart(2, '0');
    return monthMap[numMonth] || month.toLowerCase().slice(0, 3);
  }

  function renderCards(sectionId, filter = '', subsectionId = '') {
    const container = document.querySelector(`#${sectionId} .card-container`);
    let cards = sectionsData[sectionId] || [];
    
    if (subsectionId && typeof cards === 'object' && !Array.isArray(cards)) {
      cards = cards[subsectionId] || [];
    }

    const filteredCards = filter 
      ? cards.filter(card => 
          card.title?.toLowerCase().includes(filter.toLowerCase()) || 
          card.desc?.toLowerCase().includes(filter.toLowerCase()) ||
          card.name?.toLowerCase().includes(filter.toLowerCase()) || 
          card.month?.toLowerCase().includes(filter.toLowerCase()))
      : cards;

    if (sectionId === 'birthdays') {
      const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];

      let html = '';
      months.forEach((month, monthIndex) => {
        const monthCards = filteredCards.filter(card => card.month === month);
        html += `
          <div class="month-card" style="animation: cardFadeIn 0.5s ease forwards; animation-delay: ${monthIndex * 0.1}s;">
            <h3>${month}</h3>
            <div class="person-cards">
              ${monthCards.map((card, index) => {
                const day = card.date.split('-')[0];
                return `
                  <div class="person-card">
                    <div class="day-circle">
                      <span>${day}</span>
                    </div>
                    <p>${card.name.toUpperCase()}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    } else {
      container.innerHTML = filteredCards.map(card => `
        <div class="card" style="animation: cardFadeIn 0.5s ease forwards;">
          <div class="card-image-container">
            <img src="Imagenes/${card.img}" alt="${card.title}" width="250" height="150">
          </div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
          ${card.title === 'FEFO' && sectionId === 'am' 
            ? `<a href="#" onclick="showFefoContent(); return false;">Registrar</a>` 
            : `<a href="${card.link}" ${card.link.startsWith('http') ? 'target="_blank"' : ''}>${card.link.startsWith('http') ? 'Ver Más' : 'Registrar'}</a>`}
        </div>
      `).join('');

      const cardElements = container.querySelectorAll('.card');
      cardElements.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }

  function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    dropdown.classList.toggle('active');
    const btn = dropdown.previousElementSibling;
    btn.setAttribute('aria-expanded', dropdown.classList.contains('active'));
  }

  function showSection(sectionId, subsectionId = '') {
    document.querySelectorAll('.form-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    const searchValue = document.getElementById('search-bar').value;
    renderCards(sectionId, searchValue, subsectionId);

    const fefoContent = document.getElementById('fefoContent');
    fefoContent.style.display = 'none';

    document.querySelectorAll('.dropdown-content li button').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-section') === sectionId && (!subsectionId || btn.getAttribute('data-subsection') === subsectionId)) {
        btn.classList.add('active');
      }
    });
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  
    sidebar.classList.toggle('active');
  
    if (!sidebar.classList.contains('active')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      dropdownButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  
    document.querySelector('.container').classList.toggle('sidebar-active');
  }

  function openMovimientoModal() {
    alert('Abrir modal para registrar movimiento');
  }

  function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.animationDuration = Math.random() * 5 + 5 + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function toggleTheme() {
    const body = document.body;
    const themeButton = document.querySelector('.theme-toggle i');
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeButton.classList.remove('fa-sun');
      themeButton.classList.add('fa-moon');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeButton.classList.remove('fa-moon');
      themeButton.classList.add('fa-sun');
    }
  }

  function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
      const activeSection = document.querySelector('.form-section.active');
      if (activeSection) {
        const subsectionId = document.querySelector('.dropdown-content li button.active')?.getAttribute('data-subsection') || '';
        renderCards(activeSection.id, searchBar.value, subsectionId);
      }
    });
  }

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzq_I_PHfdW9HjmoTTOYHzKkj0LUe_paXz2V0U-0QwvnXPb50g87P7E8OW4szEOK4CX/exec";

  let locationsData = [];
  let materialsData = {};
  let originalData = [];

  async function loadFefoData() {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      if (!response.ok) {
        throw new Error("No se pudo cargar los datos del Google Sheet");
      }
      const data = await response.json();
      locationsData = data.locations.map(row => {
        if (row.fechaProduccion) {
          let date;
          if (row.fechaProduccion.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
            const [day, month, year] = row.fechaProduccion.split('/');
            row.fechaProduccion = `${getMonthAbbreviation(month)}-${year}`;
          }
          else if (row.fechaProduccion.match(/^\d{4}-\d{2}-\d{2}$/)) {
            const [year, month, day] = row.fechaProduccion.split('-');
            row.fechaProduccion = `${getMonthAbbreviation(month)}-${year}`;
          }
          else if (row.fechaProduccion.match(/^[a-z]{3}-\d{4}$/i)) {
            row.fechaProduccion = row.fechaProduccion.toLowerCase();
          }
        }
        return row;
      });
      materialsData = data.materials;
      originalData = JSON.parse(JSON.stringify(locationsData));
      renderFefoRegisterTable();
      applyFilters();
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      alert("Error al cargar los datos del almacén");
    }
  }

  function showFefoContent() {
    const activeSection = document.querySelector('.form-section.active');
    const fefoContent = document.getElementById('fefoContent');
    if (activeSection.id === 'am') {
      fefoContent.style.display = fefoContent.style.display === 'none' ? 'block' : 'none';
      showTab('fefo-register');
    }
  }

  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.remove("active");
      tab.style.display = "none";
    });
    document.querySelectorAll(".tab-button").forEach(button => {
      button.classList.remove("active");
    });
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";
    selectedTab.classList.add("active");
    const selectedButton = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    selectedButton.classList.add("active");

    if (tabId === "fefo-register") {
      renderFefoRegisterTable();
    }
  }

  function renderFefoRegisterTable() {
    const tableBody = document.querySelector("#fefoRegisterTable tbody");
    const filterBlock = document.getElementById("filter-block").value;
    const filterSku = document.getElementById("filter-sku").value.toUpperCase();

    let filteredData = locationsData;
    if (filterBlock) {
      filteredData = filteredData.filter(row => row.ubicacion.startsWith(filterBlock));
    }
    if (filterSku) {
      filteredData = filteredData.filter(row => row.codigo && row.codigo.toUpperCase().includes(filterSku));
    }

    let html = "";
    filteredData.forEach((row, index) => {
      const globalIndex = locationsData.indexOf(row);
      html += `
        <tr>
          <td>${row.ubicacion}</td>
          <td><input type="text" value="${row.codigo || ''}" onchange="updateField(${globalIndex}, 'codigo', this.value)"></td>
          <td><input type="text" value="${row.material || ''}" id="material-${globalIndex}" onchange="updateField(${globalIndex}, 'material', this.value)"></td>
          <td><input type="number" value="${row.cantidad}" onchange="updateField(${globalIndex}, 'cantidad', this.value)"></td>
          <td><input type="text" value="${row.fechaProduccion || ''}" placeholder="mes-año (ej. feb-2025)" pattern="^[a-z]{3}-\\d{4}$" onchange="updateField(${globalIndex}, 'fechaProduccion', this.value.toLowerCase())"></td>
          <td><textarea onchange="updateField(${globalIndex}, 'observaciones', this.value)">${row.observaciones}</textarea></td>
        </tr>
      `;
    });
    tableBody.innerHTML = html;
  }

  function updateField(index, field, value) {
    locationsData[index][field] = value;
    if (field === "codigo") {
      const materialInput = document.getElementById(`material-${index}`);
      materialInput.value = materialsData[value] || "";
      locationsData[index].material = materialsData[value] || "";
    }
  }

  function applyFilters() {
    renderFefoRegisterTable();
  }

  async function saveChanges() {
    try {
      for (let i = 0; i < locationsData.length; i++) {
        const row = locationsData[i];
        const originalRow = originalData[i];
        if (JSON.stringify(row) !== JSON.stringify(originalRow)) {
          const data = {
            rowIndex: i,
            ubicacion: row.ubicacion || '',
            codigo: row.codigo || '',
            material: row.material || '',
            cantidad: parseInt(row.cantidad) || 0,
            fechaProduccion: row.fechaProduccion || '',
            observaciones: row.observaciones || ''
          };
          console.log('Enviando datos:', data);
          const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
          });
          const responseText = await response.text();
          console.log('Respuesta del servidor:', responseText);
          if (!response.ok) {
            throw new Error(`Error al guardar los cambios: ${response.status} - ${responseText}`);
          }
        }
      }
      originalData = JSON.parse(JSON.stringify(locationsData));
      alert("Cambios guardados con éxito");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert(`Error al guardar los cambios: ${error.message}`);
    }
  }

  function discardChanges() {
    locationsData = JSON.parse(JSON.stringify(originalData));
    renderFefoRegisterTable();
    alert("Cambios descartados");
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCards('cp');
    createParticles();
    document.querySelector('button[data-section="cp"]').classList.add('active');
    setupSearch();
    loadFefoData();
  });

  window.toggleDropdown = toggleDropdown;
  window.showSection = showSection;
  window.toggleSidebar = toggleSidebar;
  window.openMovimientoModal = openMovimientoModal;
  window.toggleTheme = toggleTheme;
  window.showFefoContent = showFefoContent;
  window.showTab = showTab;
  window.updateField = updateField;
  window.applyFilters = applyFilters;
  window.saveChanges = saveChanges;
  window.discardChanges = discardChanges;
})();
