let cities = ["Tokyo", "Paris", "Chicago", "LA"];

//Insert City
function insertCity(arr, city) {
  if (!arr || !city) {
    return false;
  }
  if (arr.includes(city)) {
    return false;
  } 
  
  arr.push(city);
  return true;
}

insertCity(cities, "Hong Kong");


//Update City
function updateCity(arr, oldCity, newCity) {
  if (!arr || !oldCity) {
    return false;
  }

  let cityPosToUpdate = arr.indexOf(oldCity);
  
  if (cityPosToUpdate === - 1) {
    return false; 
  }

  arr.splice(cityPosToUpdate, 1, newCity);
  return true;
}

updateCity(cities, "Paris", "Athens");

// Remove City
function removeCity(arr, city) {
  if (!arr || !city) {
    return false;
  }

  let cityToRemove = arr.indexOf(city);

  if (cityToRemove === - 1) {
    return false;
  }

  arr.splice(cityToRemove, 1);
  return true;
}

removeCity(cities, "LA");

// Get All Cities
function getAllCities(arr) {
  let display = "";

  for (let [key, value] of Object.entries(arr)) {
    console.log(display = `[${key} : ${value}]`);
  }
}

getAllCities(cities);

//Get City 
function getCity(arr, city) {
  let results = [];
  
  for (const element of arr) {
    if (element.startsWith(city)) {
      results.push(element);
    }
  }

  return results;
}

getCity(cities, "Tokyo");