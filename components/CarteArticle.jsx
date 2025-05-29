
export default function CarteArticle (props) {
  return (
    <div className="card lg:flex bg-neutral shadow-sm pb-4">
      <div className="card-body justify-between">
        <div className="card-title text-2xl">{ props.titre }</div>
        <div className="">{ props.contenu }</div>
        { props.lien &&
        <a target="_blank" rel="noopener noreferrer" href={ props.lien } className="mt-3">{ props.lien }</a>
        }
      </div>
      { props.img &&
      <figure>
        <img className="max-w-96 h-auto" src={`articles/${props.img}`} />
      </figure>
      }
    </div>
  )
}
