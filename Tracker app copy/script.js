document.addEventListener('DOMContentLoaded', function () {
    const kalender = document.getElementById('kalender');
    const dagDetails = document.getElementById('dag-details');
    const geselecteerdeDag = document.getElementById('geselecteerde-dag');
    const medicatieForm = document.getElementById('medicatie-form');
    const medicatieLijst = document.getElementById('medicatie-lijst');
    const terugBtn = document.getElementById('terug');
    let huidigeDag = null;
    let medicatieData = JSON.parse(localStorage.getItem('medicatieData')) || {};

    function toonKalender() {
        kalender.innerHTML = '';
        dagDetails.classList.add('hidden');
        for (let i = 1; i <= 30; i++) {
            let dag = document.createElement('div');
            dag.classList.add('dag');
            dag.textContent = i;
            dag.addEventListener('click', () => toonDagDetails(i));
            kalender.appendChild(dag);
        }
    }

    function toonDagDetails(dag) {
        huidigeDag = dag;
        geselecteerdeDag.textContent = `Dag ${dag}`;
        dagDetails.classList.remove('hidden');
        kalender.innerHTML = '';
        medicatieLijst.innerHTML = '';

        if (medicatieData[dag]) {
            medicatieData[dag].forEach(item => voegMedicatieToeAanLijst(item.naam, item.tijdstip));
        }
    }

    medicatieForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let naam = document.getElementById('medicatie-naam').value;
        let tijdstip = document.getElementById('tijdstip').value;

        if (naam && tijdstip) {
            if (!medicatieData[huidigeDag]) medicatieData[huidigeDag] = [];
            medicatieData[huidigeDag].push({ naam, tijdstip });
            localStorage.setItem('medicatieData', JSON.stringify(medicatieData));
            voegMedicatieToeAanLijst(naam, tijdstip);
            medicatieForm.reset();
        }
    });

    function voegMedicatieToeAanLijst(naam, tijdstip) {
        let li = document.createElement('li');
        li.innerHTML = `${naam} - ${tijdstip} <button class="delete-btn">X</button>`;
        medicatieLijst.appendChild(li);
        li.querySelector('.delete-btn').addEventListener('click', function () {
            medicatieData[huidigeDag] = medicatieData[huidigeDag].filter(item => !(item.naam === naam && item.tijdstip === tijdstip));
            localStorage.setItem('medicatieData', JSON.stringify(medicatieData));
            li.remove();
        });
    }

    terugBtn.addEventListener('click', toonKalender);
    toonKalender();
});
