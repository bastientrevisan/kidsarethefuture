const Breaking = () => {
	return (
	<div>
	  <h1 className='text-2xl text-bold'>Breaking</h1>
		<div role='tablist' className='tabs tabs-box tabs-xl bg-neutral m-5'>
		  <input type='radio' name='Cours' role='tab' className='tab' aria-label='Débutants' defaultChecked />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='grid grid-cols-4 place-content-center gap-6'>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Baby-break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">4-5 ans</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Jeudi 17h-17h45</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Baby-break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">6-7 ans</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mardi 17h00-18h00</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">8-11 ans</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mercredi 14h00-15h15</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">Ados / Adultes</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mercredi 19h00-20h30</li>
              </ul>
            </div>
          </div>
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Intermédiaires' />
  		<div role='tabpanel' className='tab-content p-10'>
        1 an de pratique minimum
        <div className='grid grid-cols-4 place-content-center gap-6'>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Baby-break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">5-6 ans</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Jeudi 17h45-18h30</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Baby-break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">6-7 ans</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Lundi 17h15-18h15</li>
                <li>- Mercredi 15h15-16h15</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">8 ans et plus</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mercredi 16h15-18h30</li>
                <li>- Jeudi 18h30-19h45</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">Ados / Adultes</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- ???</li>
              </ul>
            </div>
          </div>
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Avancés' />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='grid grid-cols-4 place-content-center gap-6'>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Break</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">8 ans et plus</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mercredi 17h30-19h00</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Team Kids</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">Sur audition</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Lundi 18h15-19h45</li>
              </ul>
            </div>
          </div>
        </div>
  		</div>

  		<input type='radio' name='Cours' role='tab' className='tab' aria-label='Confirmés' />
  		<div role='tabpanel' className='tab-content p-10'>
        <div className='grid grid-cols-4 place-content-center gap-6'>
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Team Élite</h2>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary uppercase">Sur audition</div>
              </div>
              <ul className="font-semibold opacity-60 mt-6">
                <li>- Mardi 18h00-20h00</li>
                <li>- Vendredi 17h45-19h15</li>
              </ul>
            </div>
          </div>
        </div>
  		</div>
  	</div>
  </div>
	);
};

export default Breaking;
