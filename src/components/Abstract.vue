<template>
  <div class="hello">
    <v-stage :config="configKonva">
      <v-layer>
        <v-rect :config="configSecRect"></v-rect>   
        <v-rect :config="configMinRect"></v-rect>  
        <v-rect :config="configHourRect"></v-rect> 
        <v-rect :config="configEndMarker"></v-rect> 
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  name: 'Abstract',
  props: {
    
  },
  data () {
    return {
      configKonva: {
        width: 800,
        height: 800
      },
      configSecRect: {
        x: 430,
        y: 100,
        width: 10,
        height: 10,
        fill: '#66e9ae'
      },
      configMinRect: {
        x: 400,
        y: 100,
        width: 10,
        height: 10,
        fill: '#42b983'
      },
      configHourRect: {
        x: 350,
        y: 100,
        width: 30,
        height:30,
        fill: '#135537'
      },
      configEndMarker: {
        x: 350,
        y: 700,
        width: 90,
        height:10,
        fill: '#122b1f'
      },
      secondCount: '',
      minuteCount: '',
      hourCount: ''
    }
  },
  created () {
    setInterval(this.getNow, 60)
    },
  methods: {
    getNow: function() {
      // Call new date JS function
      const time = new Date()
      // Set hours/minutes/seconds
      var hours = time.getHours()
      var minutes = time.getMinutes()
      var seconds = time.getSeconds()
      // Convert 24 hours to 12 hours
      if(hours > 12) {
        hours = hours - 12
      }
      // Make seconds fill full circle instead of blank at 00
      if(seconds === 0) {
        seconds = 60
      }
      // Set Konva Arc angles
       this.configSecRect.height = seconds * 10
       this.configMinRect.height = minutes * 10
       this.configHourRect.height = hours * 50
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  max-width: 800px;
  margin: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #66e9ae;
}
</style>
