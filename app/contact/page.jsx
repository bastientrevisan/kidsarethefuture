const Contact = () => {

  return (
    <div className="place-content-center p-6">
      <div className="card bg-neutral lg:card-side shadow-sm place-content-center">

        <div className="card-body">
          <div className="text-2xl text-center mb-4">CONTACT & INFORMATIONS</div>

          <div className="card-title text-xl">TÉLÉPHONE</div>
          <a href="tel:+33666054740">06 66 05 47 40</a>

          <div className="card-title text-xl">EMAIL</div>
          <a href="mailto:contact@kidsarethefuture.fr">contact@kidsarethefuture.fr</a>

          <div className="card-title text-xl">ADRESSE DE L'ÉCOLE</div>
          <p>Parc Aussonne
            609 Route du nord, 82000 Montauban
            (Le Carré Rouge, 1er étage)</p>

          <div className="card-title text-xl">ACTIVITÉS</div>
          <ul>
            <li>Stages vacances scolaires</li>
            <li>Organisations d'anniversaires pour vos enfants</li>
            <li>Événements</li>
            <li>Démonstrations, Shows, Initiations</li>
          </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.0746511403963!2d1.3798495766286394!3d44.040513327293866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac1267b194eb71%3A0xc333a5b4f09458f6!2sParc%20Aussonne!5e0!3m2!1sfr!2sfr!4v1747769793027!5m2!1sfr!2sfr"
                style={{bordel: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-96 lg:min-w-1/2"/>
      </div>
    </div>
  );
};

export default Contact;
