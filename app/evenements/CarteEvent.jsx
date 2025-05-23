
export default function CarteEvent (props) {
  return (
    <div className="indicator mb-5">
      <div className="card bg-neutral shadow-sm">
        <figure>
          <img className="max-w-96 h-auto" src={ props.img } />
        </figure>
        <div className="card-body justify-between">
          <div className="card-title text-2xl">{ props.titre }</div>
          <div className="badge badge-info">{ props.date }</div>
          <div className="max-w-80">{ props.desc }</div>
        </div>
      </div>
    </div>
  )
}
