"use client";

import { useRouter } from "next/navigation";

const MenuBar = () => {
  const router = useRouter();

  return (
		<div className="navbar bg-neutral shadow-lg">
			<div className="navbar-start"> { /* Menu Mobile */ }
				<div className="dropdown">
  				<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
  					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
    		  </div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-neutral rounded-box z-[100] mt-3 w-52 p-2 shadow-xl">
						<li><a onClick={() => router.push('/actualites')} >Actualités</a></li>
            <li><a onClick={() => router.push('/association')}>Association</a></li>
						<li><a onClick={() => router.push('/cours')}>Nos cours</a></li>
						<li><a onClick={() => router.push('/evenements')} >Événements</a></li>
						<li><a onClick={() => router.push('/location')} >Location</a></li>
						<li><a onClick={() => router.push('/contact')} >Contact</a></li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl" onClick={() => router.push('/')}>Accueil</a>
			</div>
			<div className="navbar-end hidden lg:flex"> {/* Menu Desktop */}
				<ul className="menu menu-horizontal px-1">
					<li><a onClick={() => router.push('/actualites')} >Actualités</a></li>
					<li><a onClick={() => router.push('/association')}>Association</a></li>
					<li><a onClick={() => router.push('/cours')}>Nos cours</a></li>
					<li><a onClick={() => router.push('/evenements')} >Événements</a></li>
					<li><a onClick={() => router.push('/location')} >Location</a></li>
					<li><a onClick={() => router.push('/contact')} >Contact</a></li>
				</ul>
			</div>
		</div>
  );
};

export default MenuBar;
