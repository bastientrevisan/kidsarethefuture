import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ListeArticles from "./articles/ListeArticles";
import ListeRubriques from "./rubriques/ListeRubriques";
import ListeEvenements from "./evenements/ListeEvenements";

export default async function Admin() {
  const session = await auth();

  if (!session) {
    // On est pas connectés
    redirect('/auth/signin')
  }

  return (
    <div className="m-8">
      <h1 className="text-5xl font-bold m-5 text-center">Administration</h1>

      <div role='tablist' className='tabs tabs-border tabs-xl bg-neutral'>
     	  <input type='radio' name='Panels' role='tab' className='tab' aria-label='Articles' defaultChecked />
    		<div role='tabpanel' className='tab-content p-10'>
          <div className='lg:flex gap-6'>
            <ListeArticles />
          </div>
    		</div>

        <input type='radio' name='Panels' role='tab' className='tab' aria-label='Association' />
    		<div role='tabpanel' className='tab-content p-10'>
          <div className='lg:flex gap-6'>
            <ListeRubriques />
          </div>
    		</div>

        {/* <input type='radio' name='Panels' role='tab' className='tab' aria-label='Cours' />
    		<div role='tabpanel' className='tab-content p-10'>
          <div className='lg:flex gap-6'>
            Cours
          </div>
    		</div> */}

        <input type='radio' name='Panels' role='tab' className='tab' aria-label='Événements' />
    		<div role='tabpanel' className='tab-content p-10'>
          <div className='lg:flex gap-6'>
            <ListeEvenements />
          </div>
    		</div>
      </div>
    </div>
  );
};
