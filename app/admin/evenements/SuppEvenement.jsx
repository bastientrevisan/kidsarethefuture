export default function SuppEvenement (props) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;

    if (id)
    {
      response = await fetch('/api/evenements', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
    }

    if (response.ok) {
      const data = await response.json();
      alert(data.message);

      // Appeler la fonction callback pour re-fetch les evenements
      if (props.onEvenementDeleted) {
        props.onEvenementDeleted();
      }

      // Fermer la modal après suppression réussie
      document.getElementById('SupprimerEvenement').close();
    } else {
      alert('Failed to delete evenement');
    }
  };

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Supprimer événement ? </h3>

      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      <p className="py-4"> {props.titre} </p>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Supprimer</button>
        </div>
      </form>
    </div>
  );
};
