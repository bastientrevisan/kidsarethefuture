
export default function CarteArticle (props) {
  return (
    <div className="card lg:flex bg-neutral shadow-sm p-4">
      <div className="card-body justify-between">
        <div className="card-title text-2xl">{ props.titre }</div>
        <div className="whitespace-pre-line text-justify">{ props.contenu }</div>
        { props.lien ? (
          <a target="_blank" rel="noopener noreferrer" href={ props.lien } className="mt-3">{ props.lien }</a>
        ) : null
        }
      </div>
      {/* Affichage du carousel d'images */}
      { props.imgs ?
        ( <div className="carousel w-full">
          {props.imgs.map((img, index) => (
            <div id={`slide${props.id}${index + 1}`} className="carousel-item relative w-full" key={index}>
              <img
                src={`articles/${img}`}
                className="w-full" />
              { props.imgs.length > 1 ? ( //Si on a plusieurs images on affiche les boutons de défilement
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${props.id}${index === 0 ? props.imgs.length : index}`} className="btn btn-circle">❮</a>
                <a href={`#slide${props.id}${index + 2 > props.imgs.length ? 1 : index + 2}`} className="btn btn-circle">❯</a>
              </div>
              ) : null }
            </div>
          ))}
          </div>
        ) : null
      }
    </div>
  )
}
