import Breaking from "./Breaking";
import { SoulDance, HipHop, Grafiti, DJing, Pilate } from "./AutresCours";

export default async function Cours(props) {
  const params = await props.params

  let type = params.type || 'default';

  const renderContent = () => {
    switch (type) {
      case 'breaking':
        return (<Breaking />);
      case 'souldance':
        return (<SoulDance />);
      case 'hiphop':
        return (<HipHop />);
      case 'grafiti':
        return (<Grafiti />);
      case 'djing':
        return (<DJing />);
      case 'pilate':
        return (<Pilate />);
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
      {renderContent()}
    </div>
	)
}
