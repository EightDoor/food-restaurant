<template>
	<div id="LeftTab">
		<el-tabs v-model="activeName2" @tab-click="handleClick">
		<el-tab-pane label="点菜" name="first" class="table">
			<el-table stripe style="width:100%" :data="tableData">
			<el-table-column class="table-1" label="商品" width="100" prop="name" ></el-table-column>
			<el-table-column class="table-1" label="数量" width="58" prop="conent"></el-table-column>
			<el-table-column class="table-1" label="金额" width="100" prop="mony"></el-table-column>
			<el-table-column class="table-1" label="操作" width="150" >
				<template slot-scope="scope">
				<el-button
				size="mini"
				@click="handleEdit(scope.$index, scope.row)">添加</el-button>
				<el-button
				size="mini"
				type="danger"
				@click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
			</el-table>
			<div class="button-el">
				<el-button size="medium" type="warning" @click="GuaDan">挂单</el-button>
				<el-button size="medium" type="danger" @click="allDelete">全部删除</el-button>
				<el-button size="medium" type="success" @click="Settlement">结算</el-button>
			</div>
		</el-tab-pane>
		<el-tab-pane label="挂单" name="second">
			<el-table stripe style="width:100%" :data="tableData1">
			<el-table-column class="table-1" label="商品" width="100" prop="name" ></el-table-column>
			<el-table-column class="table-1" label="数量" width="58" prop="conent"></el-table-column>
			<el-table-column class="table-1" label="金额" width="100" prop="mony"></el-table-column>
			<el-table-column class="table-1" label="操作" width="150" >
			</el-table-column>
			</el-table>
		</el-tab-pane>
		<el-tab-pane label="外卖" name="third">角色管理</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
import Event from '../../Event.js'
	export default {
		data () {
			return {
				activeName2:'first',
				tableData: [
					{name:'大份署乐',conent:'5',mony:'8元'},
					{name:'可口可乐',conent:'6',mony:'3元'}
				],
				tableData1: [
					
				],
				msg:''
			}
		},
		methods: {
			handleClick (index,row) {
				console.log()
			},
			handleEdit (index,row) {
				row.conent++
			},
			handleDelete (index,row) {
				this.tableData.splice(index,1)
			},
			allDelete () {
				this.tableData.splice(0,this.tableData.length)
			},
			Settlement () {
				if (this.tableData.length!=0) {
					this.$message({
					message: '恭喜，结算成功',
					type: 'success'
					})
				} else {
					this.$message({
					message: '不能空结，请添加商品',
					type: 'error'
					})
				}
			},
			GuaDan () {
				this.tableData1=[];
				this.tableData1=this.tableData1.concat(this.tableData);
				this.tableData=[];
				if (this.tableData1=='') {
					this.$message({
					message: '不能为空，请添加商品',
					type: 'error'
				})
				}else {
					this.$message({
					message: '恭喜，挂单成功',
					type: 'success'
				})
				}
			}
		},
		mounted () {
			let self=this
			Event.$on ("Emit",function(data){
			    self.tableData.push(data)
			let hash={};
			    self.tableData=self.tableData.reduce(function(item,next){
				hash[next.name]?'':hash[next.name]=true && item.push(next)
				return item
			},[])			
			});
			Event.$on("RightBottom",function(data){
				self.tableData.push(data);
			let hash={};
				self.tableData=self.tableData.reduce(function(item,next){
					hash[next.name]?'':hash[next.name]=true && item.push(next)
					return item
				},[])
			})
		}
	}
</script>
<style scoped>
	.table-1 {
		width: 30px;
	}
	.button-el {
		margin-top: 20px;
		padding-left:15%;
	}
</style>