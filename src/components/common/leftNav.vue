<template>
	<div id="LeftNav">
		<ul>
			<li><i class="iconfont icon-shouyintai"></i><div>收银</div></li>
			<li><i class="iconfont icon-dianpu"></i><div>店铺</div></li>
			<li><i class="iconfont icon-shangpin"></i><div>商品</div></li>
			<li><i class="iconfont icon-shouye"></i><div>会员</div></li>
			<li><i class="iconfont icon-tongji"></i><div>统计</div></li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		}
	}
</script>
<style lang="less" scoped>
@top:10px;
	ul li {
		list-style: none;
		color:white;
		text-align:center;
		height:100%;
		font-size:13px;
		margin-bottom:@top*3
	}
	.iconfont {
		font-size:24px
	}
	ul {
		background:#1D8ce0;
		margin:0px;
		padding:0px;
		width:@top*7;
		padding:@top/2;
		border-radius:0px @top @top 0px;
		height:100%
	}	
</style>