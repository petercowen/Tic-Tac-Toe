$(function() {
	var app = new Vue({
	  el: '#app',
	  data: {
	    statement: 'Panoply Rocks!'
	  }
	})

	var app2 = new Vue({
	  el: '#app-2',
	  data: {
	    message: 'Hello Vue.js!'
	  },
	  methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  }
	})
}) 
