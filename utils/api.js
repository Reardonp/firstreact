var api ={
    getItems(){
        var url = 'https://jsonplaceholder.typicode.com/posts/';
        console.log(url);
        return fetch(url).then((res) => res.json());
    }   
};

module.exports=api;