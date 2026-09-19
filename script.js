const monNumeroWhatsApp = "212662530124"; 


const btnShowCars = document.getElementById('btn-show-cars');
if (btnShowCars) {
    btnShowCars.addEventListener('click', function() {
        const catalogue = document.getElementById('catalogue');
        catalogue.classList.remove('hidden');
        catalogue.classList.add('visible');
        catalogue.scrollIntoView({ behavior: 'smooth' });
    });
}


function reserverWhatsApp(nomVoiture, prix, startInputId, endInputId) {
    const dateDebut = document.getElementById(startInputId).value;
    const dateFin = document.getElementById(endInputId).value;

    if (!dateDebut || !dateFin) {
        alert("Veuillez sélectionner la date de début et la date de fin avant de réserver.");
        return;
    }

    const message = `Bonjour Triple M Car, je souhaite réserver la voiture *${nomVoiture}) du *${dateDebut}* au *${dateFin}*. Est-elle disponible ?`;
    const messageEncode = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${monNumeroWhatsApp}?text=${messageEncode}`;
    
    window.open(whatsappUrl, '_blank');
}