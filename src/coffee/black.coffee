import static_content from '../pug/document.pug'


require("expose-loader?$!jquery")

{Gauge} = require './gauge.coffee'



$ ->
  $('html').append static_content()  # < pug/document.pug

  Gauge.create
    "T1":
      title: "Eins"
      scale:
        "S1":
          label: "Temperature"
          type:  "horizontal"
          quantity:
            "main":
              pointer: 
                "Bar":      type: "bar"
                "Digital":  type: "digital"
            "preset":
              pointer:
                "X": type: "marker"
    "T2": {title: "Zwei", scale: "S2": {quantity: "main": {} }}
    "T3": {title: "Drei", scale: "S3": {quantity: "main": {} }}
    "T4": {title: "Vier", scale: "S4": {quantity: "main": {} }}

  # Gauge.setValue "T1": {main: -22}
  # Gauge.setValue "T2": {main: 44}
  # Gauge.setValue "T3": {main: 66}, "T4": {main: 188}
