import React, {useState} from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
    
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShowSearch = searchOption === 'shows';

    const onInputChange = (ev) => {
      setInput(ev.target.value);      
    };

    const onSearch = () => {
      apiGet(`/search/${searchOption}?q=${input}`).then(result =>{          
        setResults(result);     
      });
    };

    const onKeyDown = (ev) => {
       if(ev.keyCode === 13){
        onSearch();
      }
    };
    
    const renderResults = () => {
       if(results && results.length === 0) {
        return <div>No Results</div>
       }

       if(results && results.length > 0) {
        return results[0].show ? (
            <ShowGrid data={results} />
          ) : (
            <ActorGrid data={results} />
          );

        // return results[0].show ? results.map( 
        //   (item)=> (<div key={item.show.id}>{item.show.name}</div>)
        //   ) : (
        //   results.map( (item)=>(<div key={item.person.id}>{item.person.name}</div>))
        //   );
        // {results.map( (item)=><div key={item.show.id}>{item.show.name}</div>)}
       }

       return null;
    }

    const onRadioChange = (ev) => {
      setSearchOption(ev.target.value);
      
    };
    console.log(searchOption);

  return (
    <MainPageLayout>
        <input type="text" placeholder='Search for something' onChange={onInputChange} onKeyDown={onKeyDown} value={input} />
         <button type='button' onClick={onSearch}>Search</button>
         {/* This is hooome page... */}
         {renderResults()}

         <div>
            <label htmlFor="shows-search">
              Shows <input id="shows-search" type="radio" value="shows" checked={isShowSearch} onChange={onRadioChange} />
            </label>

            <label htmlFor="actors-search">
              Actors <input id="actors-search" type="radio" value="people" checked={!isShowSearch} onChange={onRadioChange} />
            </label>
         </div>
    </MainPageLayout>
  )
}

export default Home
