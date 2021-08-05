import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loadData } from '../../redux/jokeRedux/joke.actions'
import { JOKE_KEY } from '../../redux/jokeRedux/joke.reducer'
import SpinnerApp from '../spinner/SpinnerApp'





const JokeApp = () => {
// initialize useDispatch
let dispatch = useDispatch()


// useEffect(() =>{
//     dispatch(loadData())

// }, [])


// view data from store
let viewJoke = useSelector((state) =>{
    return state[JOKE_KEY]

})


// handle btn
let handleBtn = () =>{
    dispatch(loadData())

}


    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewJoke)}</pre> */}
          
                        <div className='card'>
              <div className='card-header'>
                  <h6>Programming Jokes App</h6>
              </div>



              <div className='card-body'>
           
                  <div className='jokeContainer'>
                  {
                (viewJoke.loading === true)? <SpinnerApp/>:
                      <React.Fragment>
                      <div className='articleContainer centered'>
                          <article>{viewJoke.data.joke} </article>
                      </div>
                      </React.Fragment>
                   }

                      <div className='btnContainer'>
                          <button className='btns' onClick={handleBtn}>Next Joke</button>
                      </div>
                  </div>
                 

              </div>
          </div>
              
            
      
        </React.Fragment>
            
    
    )
}

export default JokeApp
