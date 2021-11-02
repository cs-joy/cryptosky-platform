import logo from './logo.svg';
import './App.css';
import CitiesSlider from './components/Caro/caros';
import NeAnt from './components/Antd/divider/Divider';
import newCa from './components/Antd/Cards/newCa';

import DividerExampleHorizontalTable from './components/SemanticUI/Divid/example';
import ProgressExampleActive from './components/SemanticUI/Progress/proCom';
import DropdownExampleMultipleSelection from './components/SemanticUI/Multiple Selection/NewCo';
import MenuExampleInvertedSegment from './components/SemanticUI/Inverted/Inver';
import GridColumnWidth from './components/SemanticUI/BlogComponents/ColumnWidth/ColumnWidth';
import LabelExampleColored from './components/SemanticUI/Label/firstLBL';
import GridExampleGrid from './components/SemanticUI/Grids/basic/BasicGr';
import GridHeading from './components/SemanticUI/Grids/GridHeading';
import GridExampleStackable from './components/SemanticUI/Grids/Stackable/stackAble';
import AccordionExampleFluid from './components/SemanticUI/ModulesL/Accordion/variationFluid';
import ResponsiveLayout from './components/SemanticUI/Layouts/responsiveLayOut';

function App() {

  const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://cryptoskyplatform.org/images/image_1.jpg',
  },
];

  return (
    <div>
    <div className="App">
      <header className="App-header">
      <MenuExampleInvertedSegment />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to cryptosky platform
        </p>
        <a
          className="App-link"
          href="https://cryptoskyplatform.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about us
        </a>
      </header>
      <CitiesSlider slides={slides} />
      <NeAnt />
      <newCa />
      <DividerExampleHorizontalTable />
      <ProgressExampleActive />
      <DropdownExampleMultipleSelection />
      <GridColumnWidth />
      <LabelExampleColored />
      <GridHeading />
      <GridExampleGrid />
      <GridExampleStackable />
    </div>
      <AccordionExampleFluid />

      <ResponsiveLayout />

    </div>
  );
}

export default App;
