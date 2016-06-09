/*
 * runstant
 */

  // var app = new Vue({
  //   el: '#tag',
  //   data: {
  //       selecttag: ""
  //   },
  //   methods:{
  //       onClick: function(tag){
  //           this.selecttag = tag.tagname;
  //           console.log();
  //       }
  //   }
  // });

  // var jsonPath = 'data/taglist.json';
  // var jqXHR = $.getJSON(jsonPath);
  //
  // jqXHR.done(function(json) {
  //     var vue = new Vue({
  //         el: '#itme',
  //         data: {
  //             jsonData: json
  //         }
  //     });
  // });

  var app = new Vue({
    //select html element
    el: '#tag',
    //init data
    data: {
        tags: [],
        someData: [],
        input: ""
    },
    //called when loaded
    created: function(){
        // GET request
        var self = this;
            this.$http.get('data/taglist.json', function (data, status, request) {
                    this.tags.push(data);

            }).error(function (data, status, request) {
                // handle error
            });
    },
});
