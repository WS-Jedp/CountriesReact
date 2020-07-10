const URL = 'https://restcountries.eu/rest/v2/all';
const URL_COUNTRY = (name) => `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;

const getCountries = async () => {
  try{
    const data = await fetch(URL).then(data => data.json());
    return data;
  }catch(err) {
    return err.message;
  }
}

const getCountry = async (name) => {
  try{
    const data = fetch(URL_COUNTRY(name));
    return data;
  } catch(err){
    return err.message;
  }
}

export {
  getCountries,
  getCountry
};
