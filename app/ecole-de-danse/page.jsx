import Break from "./Break";

const Ecole = () => {
	return (
		<div role='tablist' className='tabs tabs-box tabs-xl m-5'>
			<input type='radio' name='Cours' role='tab' className='tab' aria-label='Break' defaultChecked />
			<div role='tabpanel' className='tab-content p-10'>
				<Break />
			</div>

			<input type='radio' name='Cours' role='tab' className='tab' aria-label='JeCpas1' />
			<div role='tabpanel' className='tab-content p-10'>
			</div>

			<input type='radio' name='Cours' role='tab' className='tab' aria-label='JeCpas2' />
			<div role='tabpanel' className='tab-content p-10'>
			</div>

			<input type='radio' name='Cours' role='tab' className='tab' aria-label='JeCpas3' />
			<div role='tabpanel' className='tab-content p-10'>
			</div>
		</div>
	)
}

export default Ecole;