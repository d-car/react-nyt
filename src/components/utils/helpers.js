var axios = require("axios");

//NYT API key
var nytAPI= "9fed44f87e004357a80f3b5345b05660";

var helper = {

  get: function(){
    return axios.get('/api/saved');
  },

  save: function(article){
    return axios.post('/api/saved', {article: article});
  },

  delete: function(id){
     return axios.delete('/api/saved/' + id); 
  }
};

module.exports = helper;