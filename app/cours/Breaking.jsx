import CarteCours from "./CarteCours";

const Breaking = () => {
	return (
	<div>
		<div role='tablist' className='tabs tabs-border tabs-xl bg-neutral'>
		  <input type='radio' name='Cours' role='tab' className='tab' aria-label='Débutants' defaultChecked />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='lg:flex gap-6'>
          <CarteCours titre="Baby-break" topBadge="4-5 ans" horaires={["Jeudi 17h-17h45"]} tarif="200€" img="logoMTBBS.jpg" />
          <CarteCours titre="Baby-break" topBadge="6-7 ans" horaires={["Mardi 17h00-18h00"]} tarif="220€" img="logoMTBBS.jpg" />
          <CarteCours titre="Break" topBadge="8 ans et +" horaires={["Mercredi 14h00-15h15"]} tarif="250€" img="logoMTBBS.jpg" />
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Intermédiaires' />
  		<div role='tabpanel' className='tab-content p-10'>
        <h1 className="text-l font-bold mb-5"> 1 an de pratique minimum </h1>
        <div className='lg:flex gap-6'>
          <CarteCours titre="Baby-break" topBadge="5-6 ans" horaires={["Jeudi 17h45-18h30"]} tarif="200€" img="logoMTBBS.jpg" />
          <CarteCours titre="Baby-break" topBadge="6-7 ans" horaires={["Lundi 17h15-18h15", "Mercredi 15h15-16h15"]} tarif="220€" img="logoMTBBS.jpg" />
          <CarteCours titre="Break" topBadge="8 ans et +" horaires={["Mercredi 16h15-17h30", "Jeudi 18h30-19h45"]} tarif="250€" img="logoMTBBS.jpg" />
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Avancés' />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='lg:flex gap-6'>
          <CarteCours titre="Break" topBadge="8 ans et +" horaires={["Mercredi 17h30-19h00"]} tarif="280€" img="logoMTBBS.jpg" />
          <CarteCours titre="Team Kids" topBadge="Sur audition" horaires={["Lundi 18h15-19h45"]} tarif="280€" img="logoMTBBS.jpg" />
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Confirmés' />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='lg:flex gap-6'>
          <CarteCours titre="Team Élite" topBadge="Sur audition" horaires={["Mardi 18h00-20h00", "Vendredi 17h45-19h15"]} tarif="310€" img="logoMTBBS.jpg" />
        </div>
  		</div>

      <input type='radio' name='Cours' role='tab' className='tab' aria-label='Tous niveaux' />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='lg:flex gap-6'>
          <CarteCours titre="Salvetat Belmontet"
                      horaires={["Lundi 18h00-19h30"]}
                      lieu="Salle des Associations de la Salvetat Belmontet"
                      tarif="270€"
                      img="logoMTBBS.jpg" />

          <CarteCours titre="Institut primaire"
                      topBadge="À partir de 7 ans"
                      horaires={["Mardi 12h00-13h15"]}
                      notes={["Réservé aux élèves de l'Institut Familial", "Limité à 14 places"]}
                      lieu="1 All. Mortarieu, 82000 Montauban"
                      tarif="220€"
                      img="logoMTBBS.jpg" />

          <CarteCours titre="Institut collège"
                      horaires={["Jeudi 12h00-13h15"]}
                      notes={["Réservé aux élèves de l'Institut Familial", "Limité à 14 places"]}
                      lieu="1 All. Mortarieu, 82000 Montauban"
                      tarif="220€"
                      img="logoMTBBS.jpg" />

          <CarteCours titre="Breaking"
                      topBadge="Ados / Adultes"
                      horaires={["Vendredi 19h15-20h30"]}
                      tarif="250€"
                      img="logoMTBBS.jpg" />
        </div>
  		</div>
  	</div>
  </div>
	);
};

export default Breaking;
