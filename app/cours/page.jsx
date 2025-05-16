import Breaking from "./Breaking";
import CarteCours from "./CarteCours";

const Cours = () => {
  return (
    <div className='place-content-center gap-4 p-6'>
      <div className="justify-between flex">
        <h1 className='text-2xl text-bold text-center mb-5'>Nos cours</h1>
        <a className="btn btn-outline" href="/planning.pdf" download="planning_MTB_BBoying_School.pdf">Planning complet (PDF)</a>
      </div>
      <div className="join join-vertical bg-neutral w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" defaultChecked />
          <div className="collapse-title font-semibold">Breaking</div>
          <div className="collapse-content text-sm">
            <Breaking />
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Soul Dance</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="Soul Dance" topBadge="Tous âges" horaires={["Mardi 20h-21h15"]} tarif="250€" img="souldance.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Hip-Hop / Newstyle</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="Hip-Hop / Newstyle" topBadge="Adultes" horaires={["Jeudi 12h10-13h10"]} tarif="250€" img="logoMTBBS.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Tous styles</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="Loisir" topBadge="Ados/Adultes" horaires={["Mercredi 19h00-20h30"]} notes={["3 fois / mois"]}  tarif="240€" img="logoMTBBS.jpg" />
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Graffiti</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="Graffiti" notes={["1 fois/mois"]} horaires={["Jeudi 18h-20h"]} tarif="180€" img="grafitinetb.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">DJing</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="DJing" horaires={["Mercredi 19h-21h"]} notes={["1 fois/ mois"]} tarif="180€" img="djing.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Pilates / Yoga</div>
          <div className="collapse-content text-sm ml-9 lg:flex gap-6">
            <CarteCours titre="Yoga**" topBadge="Adultes" horaires={["Mardi 12h10-13h10"]} tarif="450€" img="logoMTBBS.jpg"/>
            <CarteCours titre="Pilates**" topBadge="Adultes" horaires={["Vendredi 12h10-13h10"]} tarif="450€" img="logoMTBBS.jpg"/>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ul>
          * ATTENTION:
          <li>+ 20€ d'adhésion obligatoire sur tous les tarifs</li>
          <li>- 10% famille sur la cotisation.</li>
          <li>Tarif préférentiel pour les personnes habitant dans les quartiers prioritaires de la ville (Chambord-Chaumes-Monplaisir-Coeur de ville)
              Contactez-nous pour plus d'informations</li>
        </ul>
        <p className="mt-2">
        ** Possibilité 2 cours par semaine yoga/pilates,
        Contactez-nous
        </p>
      </div>
    </div>
  );
};

export default Cours;
