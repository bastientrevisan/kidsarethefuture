"use client";

import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  return (
		<div className="flex justify-between p-0.5 h-16 mb-20">
			<label className="text-2xl font-bold" onClick={() => router.push('/')}>KIDS ARE THE FUTURE</label>
			<div className="flex justify-between">
				{/* MENU */}
				<button className="m-2 btn btn-xl btn-soft btn-secondary" onClick={() => router.push('/association')}>Association</button>
				<button className="m-2 btn btn-xl btn-soft btn-secondary" onClick={() => router.push('/ecole-de-danse')}>Ecole de danse</button>
				<button className="m-2 btn btn-xl btn-soft btn-secondary" onClick={() => router.push('/evenements')}>Evenements</button>
				<button className="m-2 btn btn-xl btn-soft btn-secondary" onClick={() => router.push('/location')}>Location</button>
				<button className="m-2 btn btn-xl btn-soft btn-secondary" onClick={() => router.push('/contact')}>Contact</button>
			</div>
    </div>
  );
};

export default TopBar;
