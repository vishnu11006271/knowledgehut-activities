import { useState } from 'react';
import { Success } from './components/Authenticate';
import { Forms } from './components/Forms';
import { Conditional} from './components/Conditional'
import { InlineEvent } from './components/InlineEvent';

function App() {
 return (<div className = 'container-fluid'>
   <Conditional />
   <Forms />
   <InlineEvent />
 </div>)
}

export default App;
