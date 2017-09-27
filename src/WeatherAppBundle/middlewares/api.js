import { SUCCESS, ERROR } from '../constants'

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  console.log(callAPI);
  if(!callAPI) return next(action);

  
  fetch(callAPI)
    .then(res => res.json())
    .then(res => next({...rest, type: type + SUCCESS, res}))
    .catch(err => next({...rest, type: type + ERROR, err}));
}