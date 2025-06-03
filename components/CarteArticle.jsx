
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
      { props.img ? (
        <figure>
          <img src={`articles/${props.img}`} />
        </figure>
      ) : null
      }
    </div>
  )
}
