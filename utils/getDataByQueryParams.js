export const getDataByQueryParams = (
  data,
  obj //here obj is the query object
) =>
  data.filter((destination) =>
   Object.entries(obj).every(([key, value]) => {  //here we are converting this obj into an array using Object.entries which is like this  / => [['country', 'Canada'], ['continent', 'Asia'], ['is_open_to_public', 'true']]
      if (typeof destination[key] === 'string') {
       return destination[key].toLowerCase() === value.toLowerCase();  //we must always use return inside the every function 
      } else {
        if (typeof destination[key]==='boolean'){
          return String(destination[key]) === value ;  //as the value in the query is always a string
        }
       
      }
    })
  );
