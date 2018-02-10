<template>
	<div id="RightBottom">
		<el-tabs>
		<el-tab-pane label="汉堡">
			<ul>
				<li v-for="(val,index) in list" @click="change(index)">
					<div><img :src="val.img" width="50" height="50" alt=""></div>
					<div>{{val.name}}<span> ¥ {{val.mony}}</span></div>

				</li>
			</ul>
			<div style="clear:both"></div>
		</el-tab-pane>
		<el-tab-pane label="小食">配置管理</el-tab-pane>
		<el-tab-pane label="饮料">角色管理</el-tab-pane>
		<el-tab-pane label="套餐">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import Event from "../../Event.js"
	export default {
		data () {
			return {
				list: [
					{name:'田园鸡腿堡-1',count:'1',mony:'15',img:require('../../assets/logo.png')},
					{name:'和风汉堡',count:'1',mony:'16',img:require('../../assets/logo.png')},
					{name:'快乐全家堡',count:'1',mony:'17',img:require('../../assets/logo.png')},
					{name:'脆皮炸鸡腿',count:'1',mony:'18',img:require('../../assets/logo.png')},
					{name:'魔法鸡块',count:'1',mony:'19',img:require('../../assets/logo.png')},
					{name:'可乐大杯',count:'1',mony:'20',img:require('../../assets/logo.png')},
					{name:'大块鸡米花',count:'1',mony:'21',img:require('../../assets/logo.png')},
					{name:'香脆鸡柳',count:'1',mony:'22',img:require('../../assets/logo.png')},
				]
			}
		},
		methods: {
			change (index) {
			let data=this.list[index]
				Event.$emit("RightBottom",data)
			}
		}
	}
</script>
<style scoped>
	#RightBottom {
		border-top: 2px solid #E4E7ED;
		border-left: 2px solid #E4E7ED;
		height: 100%;
		background: #EDF2F5;
	}
	ul li {
		float: left;
		list-style: none;
		margin: 5px;
		background: white;
		padding: 0px;
		border: 1px solid transparent;

	}
	ul li:hover {
		cursor: pointer;
		border-color: red;
	}
	ul li div {
		float: left;
	}
	ul li div:nth-child(2) {
		padding: 5px;
		padding-top: 0px;
		color: red;
	}
	ul li div span {
		display: block;
		font-size: 14px;
		text-indent: 20px;
		color:#303133;
	}
	ul {
		padding: 10px;
		margin: 0px;
	}
</style>