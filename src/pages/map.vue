<template>
    <div class="mapBox">
        <div class="dropdown" >
            <el-dropdown  @command="command">
                <el-button size="mini">
                  切换地图
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="BMAP_NORMAL_MAP">标准地图</el-dropdown-item>
                  <el-dropdown-item command="BMAP_EARTH_MAP">地球模式</el-dropdown-item>
                  <el-dropdown-item command="BMAP_SATELLITE_MAP">普通卫星地图</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div id="container"></div> 
    </div>
</template>

<script>
export default {
    name:'map',
    data(){
        return {
            map:null
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        // 初始化地图
        init(){
            this.map = new BMapGL.Map("container",{
                // 禁止地图旋转和倾斜
                // enableRotate: false,
                // enableTilt: false
            });
            var point = new BMapGL.Point(116.404, 39.915);
            console.log(point)
            this.map.enableScrollWheelZoom(true);  // 开启缩放
            this.map.setHeading(64.5);   //设置默认旋转角度
            this.map.setTilt(73);       //设置默认倾斜角度
            this.map.centerAndZoom({
                lat: 39.915,
                lng: 116.404
            }, 15);  //定位 缩放大小值越小越高
            this.map.setMapType(BMAP_SATELLITE_MAP); 
            var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
            var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
            var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
            this.map.addControl(cityCtrl);
            this.map.addControl(scaleCtrl);
            this.map.addControl(zoomCtrl);


        },
        command(val,val1){
            if(val == 'BMAP_NORMAL_MAP'){
                this.map.setMapType(BMAP_NORMAL_MAP); 
            }else if(val == 'BMAP_EARTH_MAP'){
                this.map.setMapType(BMAP_EARTH_MAP); 
            }else{
                this.map.setMapType(BMAP_SATELLITE_MAP); 
            }
        }
    }

}

</script>

<style scoped lang="less">
.mapBox{
    width: 100%;
    height: 100%;
    position: relative;
    #container{
        width: 100%;
        height: 100%;
    }
    .dropdown{
        position: absolute;
        top: 10px;
        left: 100px;
        z-index: 100;
        &/deep/ .el-button{
            padding: 9px 10px;
        }
    }
}



</style>