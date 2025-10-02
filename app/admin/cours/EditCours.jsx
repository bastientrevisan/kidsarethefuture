import { useState, useEffect } from "react";

export default function EditCours (props) {
  //   "nom": "Baby-break",
  //   "discipline": "breaking",
  //   "niveau": "Débutant",
  //   "lieu" : " olnvron"
  //   "age": "4-5 ans",
  //   "tarif": 200,
  const [allDisciplines, setAllDisciplines] = useState([]);
  const [nom, setNom] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [niveau, setNiveau] = useState('');
  const [lieu, setLieu] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [tarif, setTarif] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchDisciplines = async () => {
    const response = await fetch("/api/disciplines");
    const data = await response.json();
    setAllDisciplines(data);
  };

  // Pour mettre a jour les states avec les nouvelles props lorsqu'on clique sur un bouton modifier
  useEffect(() => {
    // fetchCours(props.id)
    fetchDisciplines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = props.id;
    var response;
    let img = image; // Par défaut, garder l'image existante

    const formData = new FormData(e.target);
    const maValeur = formData.get('nom');
    console.log(maValeur);

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
    // if (!id)
    // {
    //   response = await fetch('/api/cours', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ titre, auteur, contenu, lien, img }),
    //   });
    // }
    // else
    // {
    //   response = await fetch('/api/cours', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ id, titre, auteur, contenu, lien, img }),
    //   });
    // }

    // if (response.ok) {
    //   const data = await response.json();
    //   alert(data.message);

    //   // Réinitialiser le fichier sélectionné
    //   setSelectedFile(null);

    //   // Appeler la fonction callback pour re-fetch les cours
    //   if (props.onCoursSaved) {
    //     props.onCoursSaved();
    //   }

    //   // Fermer la modal après enregistrement réussi
    //   document.getElementById('EcrireCours').close();

    // } else {
    //   alert('Failed to add cours');
    // }
  };

  return (
    <div className="modal-box w-1/2 max-w-5xl">
      <h3 className="font-bold text-lg text-center">
        {nom ? "Éditer cours" : "Nouveau cours"}
      </h3>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit}>

        <legend className="fieldset-legend">Nom</legend>
        <input
          name="nom"
          type="text"
          className="input w-3/4 m-2"
          defaultValue={nom}
          placeholder="Nom"
          required
        />

        {/* <legend className="fieldset-legend">Discipline</legend>
        <select
          defaultValue={discipline}
          className="select"
          onChange={e => setDiscipline(e.target.value)}
          placeholder="Discipline"
          required
        >
        { allDisciplines.map((disc) => (
          <option> { disc.nom } </option>
        ))
        }
        </select>

        <legend className="fieldset-legend">Niveau</legend>
        <select
          defaultValue={niveau}
          className="select"
          onChange={e => setNiveau(e.target.value)}
          placeholder="Niveau"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <legend className="fieldset-legend">Lieu</legend>
        <input
          type="text"
          className="input w-3/4 m-2"
          value={lieu}
          onChange={e => setLieu(e.target.value)}
          placeholder="Lieu"
        />

        <legend className="fieldset-legend">
          {props.img ? "Modifier image" : "Ajouter image"}
        </legend>
        <div>
          {props.img ? (
            <figure className="max-w-1/2"> Aperçu :
              <img src={`articles/${props.img}`} />
            </figure>):null}

          <input
            type="file"
            className="ml-5 file-input"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          /> */}
        {/* </div> */}
        <div className="flex justify-end m-2">
          <button className="btn btn-outline btn-secondary btn-lg m-2" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};
