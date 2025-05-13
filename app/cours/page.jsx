import Breaking from "./Breaking";
import CarteCours from "./CarteCours";

const Cours = () => {
  return (
    <div className='place-content-center gap-4 p-6'>

      <h1 className='text-2xl text-bold text-center mb-5'>Nos cours</h1>

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
          <div className="collapse-content text-sm ml-9">
            <CarteCours titre="Soul Dance" age="Tout âge" horaires={["Mardi 20h-21h25"]} tarif="250 euros" img="souldance.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Hip-Hop / Newstyle</div>
          <div className="collapse-content text-sm ml-9">
            <CarteCours titre="Hip-Hop / Newstyle" age="Adultes" horaires={["Jeudi 12h10-13h10"]} tarif="250 euros" />
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Grafiti</div>
          <div className="collapse-content text-sm ml-9">
            <CarteCours titre="Grafiti" age="1 fois/ mois" horaires={["Jeudi 18h-20h"]} tarif="180 euros" img="grafitinetb.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">DJing</div>
          <div className="collapse-content text-sm ml-9">
            <CarteCours titre="DJing" age="1 fois/ mois" horaires={["Mercredi 19h-21h"]} tarif="180 euros" img="djing.jpg"/>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="AccordionCours" />
          <div className="collapse-title font-semibold">Pilates</div>
          <div className="collapse-content text-sm ml-9">
            <CarteCours titre="Pilates" age="Adultes" horaires={["Vendredi 12h10-13h10"]} tarif="400 euros" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
