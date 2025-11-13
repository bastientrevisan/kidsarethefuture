"use client";
import { useState } from "react";
import { renderContentWithLinks } from "@/libs/utils";

export default function CarteEvent (props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dateFmt = { day: '2-digit', month: 'short', year: 'numeric' };
  let dateFromString;

  if (props.date != null) {
    dateFromString = new Date(props.date);
  }

  // Check if description is long enough to need truncation
  const maxLength = 150;
  const needsTruncation = props.desc && props.desc.length > maxLength;
  const displayDesc = !isExpanded && needsTruncation 
    ? props.desc.substring(0, maxLength) + '...' 
    : props.desc;

  return (
    <div className="card bg-neutral shadow-sm flex flex-col">
      <figure className="h-64 overflow-hidden">
        <img className="w-full h-full object-cover" src={props.img} />
      </figure>
      <div className="card-body justify-between flex-grow">
        <div>
          <div className="card-title text-2xl">{props.titre}</div>
          {dateFromString ? (
            <div className="badge badge-info">{dateFromString.toLocaleDateString("fr-FR", dateFmt)}</div>
          ) : null}
          <div className={`mt-2 whitespace-pre-line text-justify ${!isExpanded && needsTruncation ? 'line-clamp-3' : ''}`}>
            {renderContentWithLinks(displayDesc)}
          </div>
        </div>
        {needsTruncation && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-sm btn-outline btn-secondary mt-2 self-start"
          >
            {isExpanded ? 'Voir moins' : 'Voir plus'}
          </button>
        )}
      </div>
    </div>
  );
};
