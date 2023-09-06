<template>
    <div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="本年" name="year"></el-tab-pane>
                <el-tab-pane label="本月" name="month"></el-tab-pane>
                <el-tab-pane label="本日" name="day"></el-tab-pane>
              </el-tabs>
        </div>
        <div v-show="activeName == 'year'">
            本年
        </div>
        <div v-show="activeName == 'month'">
            本月
        </div>
        <div v-show="activeName == 'day'">
            本日
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name:'noteRiskWarning',
        data(){
            return {
                activeName:'day'
            }
        },
        methods:{
            handleClick(a,b,c){

            }
        }
    
    }
    
    </script>
    
    <style scoped lang="less">
    
    
    </style>