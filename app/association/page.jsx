const Association = () => {

  return (
    <div className='place-content-center p-6'>
      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <figure>
          <img
            src="quisommesnousnetb.jpg"
            alt="QuiSommesNous?" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Qui sommes-nous ?</h2>
          <p>Nous sommes l'association "Kids are the future", créée en 2021, et forte de 111 adhérents sur l'année scolaire 2022-2023.</p>
          <p>Notre association porte l'école de danse MTB BBoying School, créée en 2018 par Audrey Trévisan (Championne de France de Breaking en 2018) et Eric Espinosa (Boxeur et danseur).</p>
          <p>Cette création fait suite à l'organisation et à la réussite de deux événements nationaux, afin d'ouvrir ce lieu artistique, culturel et social.</p>
        </div>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <div className="card-body">
          <h2 className="card-title">Notre Mission</h2>
          <p>L'idée principale est de développer la culture Hip Hop sur notre territoire et de s'en servir comme vecteur d'inclusion sociale.</p>
          <p>La culture Hip Hop se caractérise par cinq éléments distincts : le human beatbox, le rap (oral), le turntablism ou « DJing » (musical), le breaking (physique) et le graffiti artistique (visuel).</p>
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
        <div className="card-body">
          <h2 className="card-title">Nos Activités</h2>
          <p>
              L'école enseigne le breaking (breakdance / b-boying / b-girling), une danse qui attire beaucoup de jeunes, ainsi que le beatbox et le graffiti.<br />
              En plus des cours donnés toute l'année, l'école organise régulièrement des événements :
          </p>
          <ul className="list bg-neutral rounded-box shadow-md">
            <li className="list-row"><p className="font-bold text-sm">MTB Battle</p>Championnat de Breaking</li>
            <li className="list-row"><p className="font-bold text-sm">Soirée Hip Hop</p></li>
            <li className="list-row"><p className="font-bold text-sm">MTB Jam</p> Événement de partage des différentes disciplines du Hip Hop</li>
            <li className="list-row"><p className="font-bold text-sm">Stages</p> Pendant chaque vacance scolaire (découverte et perfectionnement)</li>
            <li className="list-row"><p className="font-bold text-sm">Soirées à thème</p> Halloween, cinéma, jam</li>
          </ul>
        </div>
      </div>

      <div className="card lg:card-side bg-neutral shadow-sm mb-8">
        <div className="card-body">
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
        <div className="card-body">
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
