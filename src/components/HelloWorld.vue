<template>
  <div class="hello">
    <v-stage :config="configKonva">
      <v-layer>
        <v-arc :config="configArc[0]"></v-arc>
        <v-arc :config="configArc[1]"></v-arc>
        <v-arc :config="configArc[2]"></v-arc>
        
        <v-rect :config="configEndMarker"></v-rect> 
      </v-layer>
    </v-stage>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data () {
    return {
      configKonva: {
        width: 800,
        height: 800
      },
      configArc: [{
        id: 'seconds',
        x: 400,
        y: 400,
        innerRadius: 290,
        outerRadius: 300,
        angle: '',
        fill: '#66e9ae',
        rotation: -90
      },
      {
        id: 'minutes',
        x: 400,
        y: 400,
        innerRadius: 235,
        outerRadius: 255,
        angle: '',
        fill: '#42b983',
        rotation: -90
      },
      {
        id: 'hours',
        x: 400,
        y: 400,
        innerRadius: 170,
        outerRadius: 200,
        angle: '',
        fill: '#135537',
        rotation: -90
      }],
      configEndMarker: {
        x: 395,
        y: 100,
        width: 10,
        height: 130,
        fill: '#122b1f'
      },
      show: true
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
      this.configArc[0].angle = (seconds * 6)
      this.configArc[1].angle = (minutes * 6)
      this.configArc[2].angle = (hours * 30)
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
