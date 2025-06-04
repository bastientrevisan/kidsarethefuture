import CarteEvent from "../../components/CarteEvent";

const Evenements = () => {

  return (
    <div className="grid lg:grid-cols-3 gap-8 m-8">
      <CarteEvent titre="MTB BATTLE" desc="Championnat amateur de danse Hip-hop." img="afficheBattle30x20.png" date="7 juin 2025"/>
      <CarteEvent titre="Montauban en scène" desc="La team élite se produira lors du festival Montauban en scène le 19, 21 et 22 Juin, avant les concerts." img="MtbScene.jpg" date="19, 21, 22 juin 2025"/>
      <CarteEvent titre="Fête de l'école" desc="Soirée réservée aux adhérents et à leur famille. Spectacle et soirée Hip-hop." img="feteecole.jpg" date="20 juin 2025"/>
      <CarteEvent titre="BREAKING HISTORY" desc="Événement NATIONAL de BREAKING. Prochaine édition le samedi 29 novembre 2025. Conférence, Stage, Battle." img="BreakingHistory.jpg" date="29 novembre 2025"/>
      <CarteEvent titre="STAGES Vacances scolaires" desc="Stages de découverte et de perfectionnement des différentes disciplines de la culture hip-hop. 4 jours, chaque 1ère semaine de vacances scolaire." img="Stage.jpg"/>
      <CarteEvent titre="MTB JAM" desc="Événement de partage, gratuit dans les quartiers prioritaires de la ville." img="BattleJuin.jpg"/>
      <CarteEvent titre="Break'N Gliss Camp" desc="Séjour Surf et Break." img="BreakNGliss.jpg"/>
    </div>
  );
}

export default Evenements;
