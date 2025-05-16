
export default function CarteCours (props) {
  return (
    <div className="indicator mb-5">
      { props.topBadge &&
      <span className="indicator-item indicator-center badge badge-secondary">{ props.topBadge }</span>
      }
      <div className="card bg-base-100 shadow-sm max-w-min">
        <figure>
          <img className="max-w-52 h-auto" src={ props.img } />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title">{ props.titre }</h2>

          <ul className="font-semibold opacity-60">
          { props.horaires.map((seance, index) => (
            <li key={index}> { seance } </li>
          ))}
          </ul>

          { props.notes &&
          <ul>
          {props.notes.map((note, index) => (
            <li className="mt-2" key={index}> { note } </li>
          ))}
          </ul>
          }

          { props.lieu &&
          <div>{ props.lieu }</div>
          }
          <div className="card-actions justify-end">
            <div className="badge badge-info">{ props.tarif }*</div>
          </div>
        </div>
      </div>
    </div>
  )
}
