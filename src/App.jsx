import { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data'; //exporting the variable from data page which consist the datas
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton  from './components/TabButton.jsx';
import { EXAMPLES } from './data';

function App() {
  const [selectTopic,steSelectedTopic]=useState()//destructing the array 
  // let tabContent = "dynamimc updating the content"
  function handleSelect(selectedButton){
   steSelectedTopic(selectedButton)
  //  console.log(selectTopic);
}

//to give some information when the page is loaded instead of actually preloaded value
let tabContent = <p>Pleace click something</p>
if (selectTopic){
  tabContent = <div id='tab-content'>       
  <h3>{EXAMPLES[selectTopic].title}</h3>
  <p>{EXAMPLES[selectTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectTopic].code}
    </code>
  </pre>
 </div>
}

  return (
    <Fragment>
      {/* give the fucntion name inside the an function */}
     <Header></Header> 
      <main>
        <section id='core-concepts'>
        <h2>core concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((conecptItem) => (
              <CoreConcept key={conecptItem.title} {...conecptItem}/>
              ))}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
        
            <menu>
            <TabButton isSelected={selectTopic === 'components'} onSelect = {() =>handleSelect('components')}>Components</TabButton>  
            <TabButton  isSelected={selectTopic === 'jsx'} onSelect = {() =>handleSelect('jsx')}>KSX</TabButton>  
            <TabButton  isSelected={selectTopic === 'props'} onSelect = {() =>handleSelect('props')}>Props</TabButton>  
            <TabButton  isSelected={selectTopic === 'state'} onSelect = {() =>handleSelect('state')}>State</TabButton>    
          </menu>
         {tabContent}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
