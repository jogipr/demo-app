
const URL = "http://localhost:8080/routes/team/player";
const headers={
    'Accept':"application/json",
    'Content-Type': 'application/json'
}

const makeRequest=async({url,method,data,headers,...other})=>{
    const res= await window.fetch(url,{
        method,
        headers,
        mode: 'cors',
        data
        
    });
    return res.json();
}

export const getPlayerByTeam=async(team)=>{
   const res= await window.fetch(URL,{
       headers:headers,
       mode: 'cors',
       method: "GET"
   });
   return res.json();
}

export default  getPlayerByTeam;