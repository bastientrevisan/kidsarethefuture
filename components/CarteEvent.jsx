
export default function CarteEvent (props) {
  return (
    <div className="indicator mb-5">
      <div className="card bg-neutral shadow-sm">
        <figure>
          <img className="max-w-96" src={`evenements/${props.img}`} />
        </figure>
        <div className="card-body justify-between">
          <div className="card-title text-2xl">{ props.titre }</div>
          { props.date ? (
            <div className="badge badge-info">{ props.date }</div>
          ) : null }
          <div className="max-w-80">{ props.desc }</div>
        </div>
      </div>
    </div>
  )
}
