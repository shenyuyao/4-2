<template>
	<div id="app">
		<!--头部-->
		<div class="top">
			<div class="top_auto">
				<p>REALSTATE地产，您居家置业最信赖的地产！</p>
			</div>
		</div>
		<!--nav-->
		<div id="nav" class="clearfix">
			<img src="../src/assets/img/logo.png" class="img1" alt="" />
			<router-link to="/">首页</router-link>
			<router-link to="/two">全新楼盘</router-link>
			<router-link to="/three">二手楼盘</router-link>
			<router-link to="/four">全新商铺</router-link>
			<router-link to="/five">楼市动态</router-link>
			<router-link to="/six">联系我们</router-link>
			<img src="../src/assets/img/logo2.png" class="img2" alt="" />
		</div>
		<router-view/>
		<!--footer-->
		<div class="footer">
			<p>地产REALSTATE © 2020 All Rights Reserved.</p>
		</div>
	</div>
</template>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	.clearfix:before,
	.clearfix:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		/*color: #2c3e50;*/
		width: 100%;
		background-color: red;
	}
	/*头部*/
	
	.top {
		width: 100%;
		height: 65px;
		background-color: #262626;
	}
	
	.top_auto {
		width: 90%;
		height: 65px;
		margin: auto;
		line-height: 65px;
	}
	
	.top_auto p {
		font-size: 12px;
		color: #8E8E8E;
		margin-left: 2%;
	}
	/*nav*/
	
	#nav {
		width: 90%;
		height: 100px;
		margin: auto;
		line-height: 100px;
		background-color: yellow;
	}
	
	#nav a {
		color: #000000;
		font-size: 14px;
		text-decoration: none;
		margin-left: 4%;
		padding-bottom: 20px;
	}
	
	#nav a.router-link-exact-active {
	  border-bottom: 1px solid #000000;
	}
	
	#nav .img1 {
		margin-top: 25px;
		margin-right: 8%;
		float: left;
		margin-left: 2%;
	}
	
	#nav .img2 {
		margin-top: 32px;
		float: right;
		margin-right: 2%;
	}
	/*footer*/
	
	.footer {
		width: 100%;
		height: 80px;
		background-color: #262626;
		line-height: 80px;
		text-align: center;
		font-size: 12px;
		color: #8E8E8E;
	}
</style>