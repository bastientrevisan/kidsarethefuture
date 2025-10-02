
export default function CarteEvent (props) {
  const dateFmt = { day: '2-digit', month: 'short', year: 'numeric' };
  let dateFromString;

  if (props.date != null) {
    dateFromString = new Date(props.date);
  }

  return (
    <div className="indicator mb-5">
      <div className="card bg-neutral shadow-sm">
        <figure>
          <img className="max-w-96" src={`evenements/${props.img}`} />
        </figure>
        <div className="card-body justify-between">
          <div className="card-title text-2xl">{props.titre}</div>
          {dateFromString ? (
            <div className="badge badge-info">{dateFromString.toLocaleDateString("fr-FR", dateFmt)}</div>
          ) : null}
          <div className="max-w-80">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};
