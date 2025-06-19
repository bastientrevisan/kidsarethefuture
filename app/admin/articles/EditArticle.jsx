import { useState, useEffect } from "react";

export default function EditArticle (props) {
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [contenu, setContenu] = useState('');
  const [lien, setLien] = useState('');
  const [image, setImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Pour mettre a jour les states avec les nouvelles props lorsqu'on clique sur un bouton modifier
  useEffect(() => {
    setTitre(props.titre);
    setAuteur(props.auteur);
    setContenu(props.contenu);
    setLien(props.lien);
    setImage(props.img);
  }, [props.titre,props.auteur,props.contenu,props.lien,props.img]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;
    let img = image; // Par défaut, garder l'image existante

    // Upload du fichier si un nouveau fichier est sélectionné
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json();
          img = uploadData.fileName; // Utiliser le nom du fichier uploadé
        } else {
          const errorData = await uploadResponse.json();
          alert(`Erreur lors de l'upload: ${errorData.error}`);
          return;
        }
      } catch (error) {
        alert('Erreur lors de l\'upload du fichier');
        return;
      }
    }

    if (!id)
    {
      response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titre, auteur, contenu, lien, img }),
      });
    }
    else
    {
      response = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, titre, auteur, contenu, lien, img }),
      });
      
      
    }

    if (response.ok) {
      const data = await response.json();
      alert(data.message);

      // Réinitialiser le fichier sélectionné
      setSelectedFile(null);
      
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

  return (
    <div className="modal-box w-1/2 max-w-5xl">
      { titre ?
        (<h3 className="font-bold text-lg">Éditer article</h3>) :
        (<h3 className="font-bold text-lg">Nouvel article</h3>)
      }
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
        />
        <textarea
          className="textarea textarea-xl w-full h-100 m-2"
          value={contenu}
          onChange={e => setContenu(e.target.value)}
          placeholder="Contenu"
          required
        />
        <input
          type="text"
          className="input w-3/4 m-2"
          value={lien}
          onChange={e => setLien(e.target.value)}
          placeholder="Lien"
        />
        <div>
          {props.img ? (
            <figure className="max-w-1/2"> Aperçu :
              <img src={`articles/${props.img}`} />
            </figure>):null}

          {props.img ?
            (<p> Modifier image :</p>) :
            (<p> Ajouter image :</p>)
          }
          <input 
            type="file" 
            className="ml-5 file-input" 
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};
