const Activites = () => {
  return (
    <div className="card bg-neutral shadow-sm">
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
  );
}

export default Activites;