import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ApiData() {

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchData());
    },[]);

    const response = useSelector((state)=>{
        return state.ApiKey;
    })

    if(response.loading==true){
        return <h1>Loading....</h1>
    }
  return (
    <div>
      <h1>ApiData</h1>
      {
        response.record && 
        response.record.map((e,i)=>{
            return <ul key={i}>
                <li>{e.title}</li>
            </ul>
        })
      }
    </div>
  )
}
