<template>
  <h1>This is a serial Port Demo</h1>
  <h1>SerialPort Angle is {{angle}}</h1>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  name : "SerialPort",
  data(){
    return {
      angle
    }
  }
}
</script>

<style>

</style>