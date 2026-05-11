"use client";
import { useEffect, useState } from "react";
import CarteCours from "../../components/CarteCours";

export default function Breaking() {
  const [allCours, setAllCours] = useState([]);

  useEffect(() => {
    const fetchCours = async () => {
      const response = await fetch(`/api/cours/breaking`);
      const data = await response.json();

      setAllCours(data);
    };

    fetchCours();
  }, []);

  function afficherCours(niveau) {
    return allCours.filter(cours => cours.niveau == niveau).map((fcours) => (
      <CarteCours key={fcours._id} titre={fcours.nom} age={fcours.age} seances={fcours.seances} tarif={fcours.tarif} img={fcours.img} notes={fcours.notes} />
    ))
  };

	return (
	<div role='tablist' className='tabs tabs-border tabs-xl bg-neutral'>
	  <input type='radio' name='Cours' role='tab' className='tab' aria-label='Débutant' defaultChecked />
		<div role='tabpanel' className='tab-content p-10'>
      <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Débutant")}
      </div>
		</div>

		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Intermédiaire' />
		<div role='tabpanel' className='tab-content p-10'>
      <h1 className="text-l font-bold mb-5"> 1 an de pratique minimum </h1>
      <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Intermédiaire")}
      </div>
		</div>

		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Avancé' />
		<div role='tabpanel' className='tab-content p-10'>
		  <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Avancé")}
      </div>
		</div>

		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Confirmé' />
		<div role='tabpanel' className='tab-content p-10'>
		  <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Confirmé")}
      </div>
		</div>

    <input type='radio' name='Cours' role='tab' className='tab' aria-label='Tous niveaux' />
		<div role='tabpanel' className='tab-content p-10'>
		  <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Tous niveaux")}
      </div>
    </div>

    <input type='radio' name='Cours' role='tab' className='tab' aria-label='Tous niveaux - INSTITUT FAMILIAL' />
		<div role='tabpanel' className='tab-content p-10'>
		  <div className='flex flex-col lg:flex-row lg:flex-wrap gap-6'>
        {afficherCours("Tous niveaux - INSTITUT FAMILIAL")}
      </div>
    </div>

 	</div>
	)
}
