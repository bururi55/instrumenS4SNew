import React from 'react';
import Snowflakes from './components/Snowflakes';
import Garland from './components/Garland';
import NavigationButtons from './components/NavigationButtons';
import MarqueeContactVersion from './components/MarqueeContactVersion';
import CopyButtons from './components/CopyButtons';
import Scripts from './components/Scripts';

const App = () => {
	return (
		<div>
			<Snowflakes />
			<Garland />
			<NavigationButtons />
			<MarqueeContactVersion />
			<CopyButtons />
			<Scripts />
		</div>
	);
};

export default App;
