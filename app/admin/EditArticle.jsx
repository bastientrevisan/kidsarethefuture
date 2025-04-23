import { useState, useEffect } from "react";

export default function EditArticle (props) {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [contenu, setContenu] = useState('');

  // Pour mettre a jour les states avec les nouvelles props lorsqu'on clique sur un bouton modifier
  useEffect(() => {
    setTitre(props.titre);
    setAuteur(props.auteur);
    setContenu(props.contenu);
  }, [props.titre,props.auteur,props.contenu]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;

    if (!id)
    {
      response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, auteur, contenu }),
      });
    }
    else
    {
      response = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, titre, auteur, contenu }),
      });
    }

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      setTitre('');
      setAuteur('');
      setContenu('');
    } else {
      alert('Failed to add article');
    }
  };

  return (
    <div className="modal-box w-1/2 max-w-5xl">
      <h3 className="font-bold text-lg">Nouvel article</h3>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input w-3/4 m-2"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          placeholder="Titre"
          required
        />
        <input
          type="text"
          className="input w-3/4 m-2"
          value={auteur}
          onChange={e => setAuteur(e.target.value)}
          placeholder="Auteur"
          required
        />
        <textarea
          className="textarea textarea-xl w-full h-100 m-2"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
          placeholder="Contenu"
          required
        />
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};