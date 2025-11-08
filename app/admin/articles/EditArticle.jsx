import { useState, useEffect } from "react";

export default function EditArticle (props) {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [contenu, setContenu] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Pour mettre a jour les states avec les nouvelles props lorsqu'on clique sur un bouton modifier
  useEffect(() => {
    setTitre(props.titre);
    setAuteur(props.auteur);
    setContenu(props.contenu);
    setImages(props.imgs);
  }, [props.titre,props.auteur,props.contenu,props.imgs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;

    if (!id)
    {
      response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, auteur, contenu, imgs: images }),
      });
    }
    else
    {
      response = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, titre, auteur, contenu, imgs: images }),
      });


    }

    if (response.ok) {
      const data = await response.json();
      alert(data.message);

      // Appeler la fonction callback pour re-fetch les articles
      if (props.onArticleSaved) {
        props.onArticleSaved();
      }

      // Fermer la modal après enregistrement réussi
      document.getElementById('EcrireArticle').close();

    } else {
      alert('Failed to add article');
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
        setImages([...images, data.url]);
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
      <h3 className="font-bold text-lg text-center">
        {titre ? "Éditer article" : "Nouvel article"}
      </h3>
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
        <legend className="fieldset-legend">Auteur</legend>
        <input
          type="text"
          className="input w-1/4 m-2"
          value={auteur}
          onChange={e => setAuteur(e.target.value)}
          placeholder="Auteur"
        />
        <legend className="fieldset-legend">Contenu</legend>
        <textarea
          className="textarea textarea-l w-full h-100 m-2"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
          placeholder="Contenu (les liens seront automatiquement détectés)"
          required
        />

        <legend className="fieldset-legend">Images</legend>
        <div>
          Ajouter une image
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

          { images && images.length > 0 ? (
          <table className="table table-md mt-5 p-5">
            <tbody>
              { images.map((img, index) => (
              <tr key={index}>
                <td className="w-2/3"><img src={img} alt={`Image ${index + 1}`} className="max-w-full h-auto"/></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-ghost align-middle"
                    onClick={ () => {
                      setImages(images.filter((_, i) => i !== index));
                    }}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table> ) : null
          }

        </div>
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};
