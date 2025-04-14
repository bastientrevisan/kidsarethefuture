import QSN from './QSN';
import Missions from './Missions';
import Activites from './Activites';
import TeamElite from './TeamElite';

export default async function Association(props) {
  const params = await props.params

  let mode = params.mode || 'default';

  const renderContent = () => {
    switch (mode) {
      case 'QSN':
        return (<QSN />);
      case 'missions':
        return (<Missions />);
      case 'activites':
        return (<Activites />);
      case 'elite':
        return (<TeamElite />);
      default:
        return (
          <div>
            <h1>Wrong path</h1>
          </div>
        );
    }
  };

  return (
    <div className='place-content-center gap-4 p-6'>
      <h1 className='text-2xl text-bold'>L'association</h1>
      {renderContent()}
    </div>
  );
}