/*
 * runstant
 */

  var app = new Vue({
    el: '#tag',
    data: {
        tags:[{ tagname : 'javascript'},
            { tagname : 'Java'},
            { tagname : 'AngularJS'},
            { tagname : 'VueJS'}],
        selecttag: ""
    },
    methods:{
        onClick: function(tag){
            this.selecttag = tag.tagname;
            console.log();
        }
    }
  });
