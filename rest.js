let hidebBtn = document.getElementById('btn-hide');
let postLists = document.getElementById('post-lists');

$.get('https://jsonplaceholder.typicode.com/posts', function (getPosts){
	console.log(getPosts)
	
})	

//$.get('https://jsonplaceholder.typicode.com/post/10', function(data){
	//console.log(data);
//});

$.get('https://jsonplaceholder.typicode.com/post/12/comments', function(data){
	console.log(data);
});


$.get('https://jsonplaceholder.typicode.com/user/2/posts', function(data){
	console.log(data);
});

$.post('https://jsonplaceholder.typicode.com/posts',{
	userId: 1,
	title: "My New Post",
	body: "This is the body"
}, function(data){
	console.log(data.id)
})

$.ajax({
	method: 'PUT',
	url: 'https://jsonplaceholder.typicode.com/posts/12',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		console.log(response.responseJSON);
	}
})

$.ajax({
	method: 'PATCH',
	url: 'https://jsonplaceholder.typicode.com/posts/12',
	data: {
title: "patched it"
},
	complete: function(response){
		console.log(response.responseJSON);
	}
})

$.ajax({
	method: 'DELETE',
	url: 'https://jsonplaceholder.typicode.com/posts/12',
	complete: function(response){
		console.log(response.statusText);
	}
})
