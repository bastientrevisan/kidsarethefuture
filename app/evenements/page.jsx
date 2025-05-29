import CarteEvent from "../../components/CarteEvent";

const Evenements = () => {

  return (
    <div className="grid lg:grid-cols-3 gap-8 m-8">
      <CarteEvent titre="MTB BATTLE" desc="Championnat amateur de danse Hip-hop." img="beatbox.jpg" date="7 juin 2025"/>
      <CarteEvent titre="Montauban en scène" desc="??" img="beatbox.jpg" date="19 juin 2025"/>
      <CarteEvent titre="Fête de l'école" desc="??" img="feteecole.jpg" date="20 juin 2025"/>
      <CarteEvent titre="BREAKING HISTORY" desc="Événement NATIONAL de BREAKING. Prochaine édition le samedi 29 novembre 2025. Conférence, Stage, Battle." img="beatbox.jpg" date="29 novembre 2025"/>
      <CarteEvent titre="STAGES Vacances scolaires" desc="Stages de découverte et de perfectionnement des différentes disciplines de la culture hip-hop. 4 jours, chaque 1ère semaine de vacances scolaire." img="beatbox.jpg"/>
      <CarteEvent titre="MTB JAM" desc="Événement de partage, gratuit dans les quartiers prioritaires de la ville." img="beatbox.jpg"/>
      <CarteEvent titre="Break'N Gliss Camp" desc="Séjour Surf et Break." img="beatbox.jpg"/>
    </div>
  );
}

export default Evenements;
