import config from "../config";

export const GetUrlFile =(url : string )=> { 
    let resultat =config.API_BK + url;

    console.log(resultat);
  return  resultat ;
 }