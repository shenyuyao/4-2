var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'item',
	port:3307
}) 

//查询
app.get('/',(req,res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = 'select * from news'
		connection.query(sql,function(err,data){
			if(err){
				console.log(err)
				return
		    }
			res.send(data)
			connection.end()
		})
	})
})

//删除
app.post('/del',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*')
	var id = req.body.id
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = `delete from news where id= ${id}`
		connection.query(sql,[id],function(err,data){
			if(err){
			console.log(err)
			return
		     }
			res.send()
			connection.end()
		})
	})
})
 
//添加
app.post('/add',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*')
	var json = req.body
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
		var sql = 'insert into news(tit,con) values(?,?)'
		connection.query(sql,[json.tit,json.con],function(err,data){
			if(err){
			console.log(err)
			return
		     }
			res.send()
			connection.end()
		})
	})
})
//修改
app.post('/update',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*')
	var json = req.body
	pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
			return
		}
//		update 表名  set 列表名=值   where （uid=1）
		var sql = 'update news set () where()'
		connection.query(sql,[json.tit,json.con],function(err,data){
			if(err){
			console.log(err)
			return
		     }
			res.send()
			connection.end()
		})
	})
})
app.listen(3000,function(){
	console.log('ok')
})
