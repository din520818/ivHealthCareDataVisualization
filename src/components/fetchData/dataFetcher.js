
  const asyncFetch = (endpoint, setData) => {
    fetch('http://127.0.0.1:5000/' + endpoint)
      .then((response) => 
        response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  export default asyncFetch;