{merge}           = require './helpers.coffee'
{Circle}          = require './shape.coffee'

# ============================================================

exports.Pointer = class Pointer

  defaults: {}

  @create: (config, data) ->
    pointers = []
    for ptr_id, cfg of config
      switch cfg.type
        when "bar"
          pointers.push (new Bar(     ptr_id, cfg, data))
        when "digital"
          pointers.push (new Digital( ptr_id, cfg, data))
        when "marker"
          pointers.push (new Marker(  ptr_id, cfg, data))
        else
          console.log "pointer type '#{cfg.type}' isn't implemented, yet."
    return pointers

  constructor: (@id, config) ->
    @config = merge @defaults, config

# ============================================================

class Bar extends Pointer

  defaults:
    barColor:       "#0000ff"

  constructor: (id, config, data) ->
    super id, config

    @elements = @draw_elements(data)
    @setup_bar()
    @update(data)


  draw_elements: (data) ->
    bar:  @draw_bar(data)

  draw_bar: (data) ->
    data = merge @defaults, data.path.transform(data)
    data.svg.add_path "bar"+@id, data.path,
      class:                "bar"
      "stroke-width":       data.barWidth
      stroke:               @config.barColor

  setup_bar: ->
    @path_length = @elements.bar.path_length()
    @elements.bar.node.setAttribute "stroke-dasharray", @path_length

  update:  (data) ->
    data  = data.path.transform(data)
    @elements.bar.node.setAttribute(
      "stroke-dashoffset"
      @path_length * (1.0 - data.rl)
    )

  draw_underflow: (data) ->

    # data.draw.polygon
    #   visibility:   "hidden"
    #   class:        'underflow'
    #   points:       triangle_left(data)
    #   fill:         "#0000ff"

  draw_overflow: (data) ->

    # data.draw.polygon
    #   visibility:   "hidden"
    #   class:        'overflow'
    #   points:       triangle_right(data)
    #   fill:         "#0000ff"

  triangle_left = (data) ->
    y  = data.h/2
    dx = dy = data.barWidth/2
    "0 #{y} " +
    "#{dx} #{y - dy} " +
    "#{dx} #{y + dy}"

  triangle_right = (data) ->
    y  = data.h/2
    dx = dy = data.barWidth/2
    w  = data.w
    "#{w     } #{y} " +
    "#{w - dx} #{y - dy} " +
    "#{w - dx} #{y + dy}"








  update_overflow = (data) ->
    if data.r < 0.0
      vu = "visible"
      vo  = "hidden"
    else if data.r > 1.0
      vu  = "hidden"
      vo = "visible"
    else
      vo = "hidden"
      vu  = "hidden"

    data.svg.find(".underflow")[0].setAttribute "visibility", vu
    data.svg.find(".overflow" )[0].setAttribute "visibility", vo

## ============================================================

class Marker extends Pointer

  view: (data) ->

  defaults:
    size:   50
    type:  "circle"
    color:  "green"

  constructor: (config, data0) ->
    super config
    switch config.type
      when "circle"
        @shape = new Circle @config


## ============================================================

class Digital extends Pointer

  constructor: (id, config, data) ->
    super id, config
    @draw_display data

  draw_display: (data) ->
    @display = data.svg.add_text @id, "",
      class:                "digital"
      "alignment-baseline": "middle"
      "text-anchor":        "end"
      "font-size":          100
      "font-weight":        "bold"
      x:                    data.w
      y:                    data.h * .8
    @update data

  update:  (data) ->
    @display.node.textContent = number_unit(data)

  number_unit = (data) ->
    "#{data.a} #{data.unit}"


## ============================================================
