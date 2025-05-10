"use client";

import { useRouter } from "next/navigation";

const MenuBar = () => {
  const router = useRouter();

  return (
		<div className="navbar bg-neutral shadow-lg">
			<div className="navbar-start"> { /* Menu Mobile */ }
				<div className="dropdown">
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-neutral rounded-box z-[100] mt-3 w-52 p-2 shadow-xl">
						<li><a onClick={() => router.push('/actualites')} >Actualités</a></li>
						<li>
							<a>Association</a>
							<ul className="p-2">
								<li><a onClick={() => router.push('/association/QSN')}>Qui sommes nous ?</a></li>
								<li><a onClick={() => router.push('/association/missions')}>Nos Missions</a></li>
								<li><a onClick={() => router.push('/association/activites')}>Nos Activités</a></li>
								<li><a onClick={() => router.push('/association/elite')}>Team Elite</a></li>
							</ul>
						</li>
						<li><a onClick={() => router.push('/cours')} >Nos cours</a></li>
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
					<li>
					  <details id="cours">
						  <summary>Nos cours</summary>
							<ul className="w-50 p-2 bg-neutral shadow-xl">
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open"); // Referme le menu deroulant
                  router.push('/cours/breaking');
                }} >Breaking</a></li>
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open");
                  router.push('/cours/souldance')
                }} >Soul Dance</a></li>
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open");
                  router.push('/cours/hiphop')
                }} >Hip-hop / Newstyle</a></li>
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open");
                  router.push('/cours/grafiti')
                }} >Grafiti</a></li>
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open");
                  router.push('/cours/djing')
                }} >DJing</a></li>
                <li><a onClick={() => {
                  document.getElementById("cours").removeAttribute("open");
                  router.push('/cours/pilate')
                }} >Pilate</a></li>
							</ul>
						</details>
					</li>
					<li><a onClick={() => router.push('/evenements')} >Événements</a></li>
					<li><a onClick={() => router.push('/location')} >Location</a></li>
					<li><a onClick={() => router.push('/contact')} >Contact</a></li>
				</ul>
			</div>
		</div>
  );
};

export default MenuBar;
