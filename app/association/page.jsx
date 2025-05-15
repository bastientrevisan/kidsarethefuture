const Association = () => {

  return (
    <div className='place-content-center p-6'>
      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <figure>
          <img
            src="quisommesnousnetb.jpg"
            alt="QuiSommesNous?" />
        </figure>
        <div className="card-body lg:max-w-1/2">
          <h2 className="card-title">Qui sommes-nous ?</h2>
          <p>L’association KIDS ARE THE FUTURE / Ecole MTB BBOYING SCHOOL, a vu le jour en septembre 2018. Crée par Audrey TREVISAN championne de France et championne du monde de Breaking, et Eric Espinosa.</p>
          <p>L’école est 100% Hip-hop et enseigne les différentes disciplines ainsi que les valeurs de cette culture.</p>
        </div>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <div className="card-body lg:max-w-1/2">
          <h2 className="card-title">Notre Mission</h2>
          <p>L’ASSOCIATION Située sur Montauban, KIDS ARE THE FUTURE est activement impliqué depuis 2018 dans la promotion et le développement de la culture hip-hop auprès des publics et des institutions. </p>
          <p>Notre association a pour cœur d’activité la valorisation de notre culture et ses différentes formes d’expression. L'association KIDS ARE THE FUTURE s'adapte aux besoins socio-culturels du département. Elle crée également des événements Nationaux, Européens et Internationaux (Mtb battle, Breaking History, Hip-hop for hapiness en Asie du Sud Est).</p>
          <p>Au quotidien, elle met en place des actions de médiation culturelle, développe les pratiques artistiques amateurs en danses Hip-Hop et s’engage dans des actions de renforcement du lien social par la danse, avec le désir permanent de rendre la culture hip hop accessible au plus grand nombre. (Contrat de Ville, QPV) </p>
          <p>Tout au long de l’année, Kids are the future organise aussi de nombreux événements destinés à un public de plus en plus large. Cours de danse, stages, festivals, expositions, spectacles... autant d’événements qui valorisent notre culture auprès de publics divers avec pour seul mot d’ordre : « le partage »</p>
        </div>
        <figure>
          <img
            src="mission.jpg"
            alt="Mission" />
        </figure>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <figure>
          <img
            src="activites.jpg"
            alt="Activités" />
        </figure>
        <div className="card-body lg:max-w-1/2">
          <h2 className="card-title">Nos Activités</h2>
          <p>
            L'école enseigne les différentes disciplines de la culture hip-hop (Breaking et les autres styles, Djing, Beatbox, Rap, Graffiti).  
            En plus des cours donnés toute l'année, l'école organise régulièrement des événements :
          </p>
          <ul className="list">
            <li className="list-row"><p className="font-bold text-sm">MTB Battle</p>Championnat de Breaking</li>
            <li className="list-row"><p className="font-bold text-sm">Soirée Hip Hop</p></li>
            <li className="list-row"><p className="font-bold text-sm">MTB Jam</p> Événement de partage des différentes disciplines du Hip Hop</li>
            <li className="list-row"><p className="font-bold text-sm">Stages hip-hop</p> Pendant chaque vacance scolaire (découverte et perfectionnement)</li>
            <li className="list-row"><p className="font-bold text-sm">Breaking History</p> (conférence, stage, battle)</li>
          </ul>
        </div>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <div className="card-body lg:max-w-1/2">
          <h2 className="card-title">La Team Élite</h2>
          <p>
            Au sein de l'association et de l'école, un groupe particulièrement motivé (la team élite) se produit sur scène lors de différents spectacles.<br />
            Récemment, ils se sont produits sur la scène de Marseille devant 5000 personnes, où la participation de l'école a été très bien accueillie.
          </p>
        </div>
        <figure>
          <img
            src="teamelite.jpg"
            alt="TeamElite" />
        </figure>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <figure>
          <img
            src="teamkids-1.jpg"
            alt="TeamKids" />
        </figure>
        <div className="card-body lg:max-w-1/2">
          <h2 className="card-title">La Team Kids</h2>
          <p>
            Au sein de l'association et de l'école, un groupe particulièrement motivé (la team élite) se produit sur scène lors de différents spectacles.<br />
            Récemment, ils se sont produits sur la scène de Marseille devant 5000 personnes, où la participation de l'école a été très bien accueillie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Association;
