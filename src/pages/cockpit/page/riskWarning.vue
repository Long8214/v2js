<template>
    <div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="预报预警" name="forecast"></el-tab-pane>
                <el-tab-pane label="监测预警" name="monitor"></el-tab-pane>
                <el-tab-pane label="现地预警" name="terrain"></el-tab-pane>
              </el-tabs>
        </div>
        <div v-show="activeName == 'forecast'">
            预报预警
        </div>
        <div v-show="activeName == 'monitor'">
            监测预警
        </div>
        <div v-show="activeName == 'terrain'">
            现地预警
        </div>
    </div>
    
    </template>
    
    <script>
    export default {
        name:'riskWarning',
        data(){
            return {
                activeName:'terrain'
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