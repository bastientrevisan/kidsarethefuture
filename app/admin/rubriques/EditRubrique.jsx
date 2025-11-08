import { useState, useEffect } from "react";

export default function EditRubrique (props) {
  const [titre, setTitre] = useState('');
  const [ordre, setOrdre] = useState('');
  const [image, setImage] = useState('');
  const [contenu, setContenu] = useState('');
  const [uploading, setUploading] = useState(false);

  // Pour mettre a jour les states avec les nouvelles props lorsqu'on clique sur un bouton modifier
  useEffect(() => {
    setTitre(props.titre);
    setOrdre(props.ordre);
    setImage(props.img);
    setContenu(props.contenu);
  }, [props.titre,props.ordre,props.img,props.contenu]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;

    if (!id)
    {
      response = await fetch('/api/rubriques', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, ordre, img: image, contenu }),
      });
    }
    else
    {
      response = await fetch('/api/rubriques', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, titre, ordre, img: image, contenu }),
      });


    }

    if (response.ok) {
      const data = await response.json();
      alert(data.message);

      // Appeler la fonction callback pour re-fetch les rubriques
      if (props.onRubriqueSaved) {
        props.onRubriqueSaved();
      }

      // Fermer la modal après enregistrement réussi
      document.getElementById('EcrireRubrique').close();

    } else {
      alert('Failed to add rubrique');
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImage(data.url);
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="modal-box w-1/2 max-w-5xl">
      { titre ?
        (<h3 className="font-bold text-lg">Éditer rubrique</h3>) :
        (<h3 className="font-bold text-lg">Nouvelle rubrique</h3>)
      }
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit}>

        <legend className="fieldset-legend">Titre</legend>
        <input
          type="text"
          className="input w-3/4 m-2"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          placeholder="Titre"
          required
        />

        <legend className="fieldset-legend">Contenu</legend>
        <textarea
          className="textarea textarea-l w-full h-100 m-2"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
          placeholder="Contenu"
          required
        />

        <legend className="fieldset-legend">
          {image ? "Modifier image" : "Ajouter image"}
        </legend>
        <div>
          {image ? (
            <figure className="max-w-1/2"> Aperçu :
              <img src={image} />
            </figure>):null}

          <input
            type="file"
            className="ml-5 file-input"
            accept="image/*"
            disabled={uploading}
            onChange={(e) => {
              if (e.target.files[0]) {
                handleImageUpload(e.target.files[0]);
                e.target.value = ''; // Reset input pour permettre de réuploader le même fichier
              }
            }}
          />
          {uploading && <span className="ml-2">Upload en cours...</span>}
        </div>
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};
