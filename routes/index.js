var express = require('express');
var router = express.Router();
var fs = require('fs');
var directory = require('directory-tree');
var _ = require('underscore');

var baseUrl = 'public/images/';
var relativeUrl = 'images/';

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.get('/sources',function (req,res) {
	fs.exists(baseUrl, function (exists) {
   		var tree = directory.directoryTree(baseUrl);
   	    res.send(_.map(_.where(tree.children,{ type : 'directory' }),function (item) {
   	    	return {
   	    		name : item.name
   	    	}
   	    }));
    }.bind(res));
});

router.get('/images/:name',function (req, res) {
    fs.exists(baseUrl + req.params.name, function (exists) {
   		if (exists) {
	   		var tree = directory.directoryTree('public/images/' + req.params.name,['.gif','.jpg']);
	   	    res.send(_.map(_.where(tree ? tree.children : [],{type : 'file' }),function (item) {
	   	    	return {
	   	    		name : item.name,
	   	    		url  : relativeUrl + req.params.name  + '/' + item.path
	   	    	}
	   	    }));
	   	} else res.send('dont exist souces: ' + req.params.name );    
    });
})

router.get('/images',function (req, res) {
	fs.exists(baseUrl, function (exists) {
   		if (exists) {
	   		var tree = directory.directoryTree('public/images/',['.gif','.jpg']);
	   	    var sources = _.where(tree.children,{type : 'directory' });
	   	    var images = [];
	   	    _.each(sources,function (source) {
 				images.push(_.map(_.where(source.children,{type : 'file' }),function (img) {
  					return {
  						name : img.name,
  						source : source.name,
  						url : 'images/' + source.name + '/' + img.name
  					}
 				}));
	   	    });
	   	    res.send(_.flatten(images,true)); 
	   	} else res.send('dont exist souces: ' + req.params.name );    
    });
});

module.exports = router; 