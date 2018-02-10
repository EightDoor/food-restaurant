<template>
  <div id="app">
    <el-container>
      <el-aside style="width:6%"><leftNav></leftNav></el-aside>
      <el-main>
        <el-row>
          <el-col :span="8">
            <LeftTab></LeftTab>
          </el-col>
          <el-col :span="16">
            <el-row>
              <RightTop></RightTop>
            </el-row>
             <el-row>
              <RightBottom></RightBottom> 
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import LeftTab from './components/page/LeftTab.vue'
import leftNav from  './components/common/leftNav.vue'
import RightTop from './components/page/RightTop.vue'
import RightBottom from './components/page/RightBottom.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    leftNav,
    LeftTab,
    RightTop,
    RightBottom
  },
  
}
</script>

<style scoped>
  
</style>
