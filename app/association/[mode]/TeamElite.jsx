import { trackSynchronousPlatformIOAccessInDev } from "next/dist/server/app-render/dynamic-rendering";

const TeamElite = () => {
  return (
    <div className="card bg-neutral shadow-sm">
      <div className="card-body">
        <h2 className="card-title">La Team Élite</h2>
        <p>
          Au sein de l'association et de l'école, un groupe particulièrement motivé (la team élite) se produit sur scène lors de différents spectacles.<br />
          Récemment, ils se sont produits sur la scène de Marseille devant 5000 personnes, où la participation de l'école a été très bien accueillie.
        </p>
      </div>
    </div>
  );
}

export default TeamElite;