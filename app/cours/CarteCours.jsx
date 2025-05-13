
export default function CarteCours (props) {
  return (
    <div className="indicator mb-5">
      <span className="indicator-item indicator-center badge badge-secondary">{ props.age }</span>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="max-w-52 h-auto" src={ props.img } />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ props.titre }</h2>
          <ul className="font-semibold opacity-60 mt-6">
          { props.horaires.map((seance, index) => (
            <li key={index}> { seance } </li>
          ))}
          </ul>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">{ props.tarif }</div>
          </div>
        </div>
      </div>
    </div>
  )
}
