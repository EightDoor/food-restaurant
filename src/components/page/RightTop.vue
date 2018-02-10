<template>
	<div id="RightTop">
		<div class="Common">常用商品</div>
		<div class="Common-1">
		<ul>
			<li v-for="(val,index) in list" @key="index" @click="change(index)">
				{{val.name}} <span>¥ {{val.mony}}</span>
			</li>
			<div style="clear:both"></div>		
		</ul>
		</div>
		</div>
</template>
<script>
import Event from '../../Event.js'
	export default {
		data () {
			return {
				list:[
				{
					name:'香辣鸡腿堡-1',
					conent:'1',
					mony:'10元'
				},
				{
					name:'香辣鸡腿堡-2',
					conent:'1',
					mony:'11元'
				},
				{
					name:'香辣鸡腿堡-3',
					conent:'1',
					mony:'12元'
				},
				{
					name:'香辣鸡腿堡-1',
					conent:'1',
					mony:'13元'
				},
				{
					name:'香辣鸡腿堡-1',
					conent:'1',
					mony:'14元'
				},
				{
					name:'香辣鸡腿堡-1',
					conent:'1',
					mony:'15元'
				}
				 ]
			}

		},
		methods: {
				change (index) {
					let arr=this.list[index];
					Event.$emit("Emit",arr)
				}
			}
	}
</script>
<style scoped>
	.Common {
		padding: 5px;
		background: #cde2ef;
		border-bottom: 2px solid #E4E7ED;
		border-left: 2px solid #E4E7ED;
	}
	.Common-1 {
		background: #edf2f5;
		border-left: 2px solid #E4E7ED;
	}
	ul  {
		padding: 0px;
		margin: 0px;
	}
	ul li {
		list-style: none;
		float: left;
		margin: 10px;
		background: white;
		padding: 5px;
		border: 1px solid transparent;
	}
	ul li:hover {
		cursor: pointer;
		border: 1px solid red;
	}
	ul li span {
		color: #1D8CE0;
	}
	#RightTop {
		height: 100%;
	}
</style>