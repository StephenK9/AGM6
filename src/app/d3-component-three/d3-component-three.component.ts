import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
@Component({
  selector: 'app-d3-component-three',
  templateUrl: './d3-component-three.component.html',
  styleUrls: ['./d3-component-three.component.css']
})
export class D3ComponentThreeComponent implements OnInit {
  // We are defining these functions in order to reference a function within the ngOnInit lifecycle hook. Variables within methods are stored in memory, just as public and private members of a class are. So if we access functions within methods, we can work with those variables. We need to call the method in order to instantiate the function within it, so it can be stored within a private member of the class. In the case of the ngOnInit method, it is called automatically. Think of a method as a 'mini-class' within the class, with its own 'state'.
  private fn: Function
  private fn2: Function
  public fn3:Function
  constructor() { }

  ngOnInit() {

    var n = 20, // number of layers
      m = 200, // number of samples per layer
      k = 10; // number of bumps per layer

    var stack = d3.stack().keys(d3.range(n)).offset(d3.stackOffsetWiggle),
      layers0 = stack(d3.transpose(d3.range(n).map(function () { return bumps(m, k); }))),
      layers1 = stack(d3.transpose(d3.range(n).map(function () { return bumps(m, k); }))),
      layers = layers0.concat(layers1);

    var svg = d3.select("#stream"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var x = d3.scaleLinear()
      .domain([0, m - 1])
      .range([0, width]);

    var y = d3.scaleLinear()
      .domain([d3.min(layers, stackMin), d3.max(layers, stackMax)])
      .range([height, 0]);

    var z = d3.interpolateCool;

    var area = d3.area()
      .x(function (d, i) { return x(i); })
      .y0(function (d) { return y(d[0]); })
      .y1(function (d) { return y(d[1]); });

    svg.selectAll("path")
      .data(layers0)
      .enter().append("path")
      .attr("d", area)
      .attr("fill", function () { return z(Math.random()); });

    function stackMax(layer) {
      return d3.max(layer, function (d) { return d[1]; });
    }

    function stackMin(layer) {
      return d3.min(layer, function (d) { return d[0]; });
    }

    this.fn = () =>{
      var t;
      d3.selectAll("path")
        .data((t = layers1, layers1 = layers0, layers0 = t))
        .transition()
        .duration(2500)
        .attr("d", area);
    }
    var people=['Steve']

    this.fn2 = (name)=>{
      if (name==undefined){
        name='placehodler name'
      }
      people.push(name);
      console.log(people)
    }


    // Inspired by Lee Byron’s test data generator.
    function bumps(n, m) {
      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = 0;
      for (i = 0; i < m; ++i) bump(a, n);
      return a;
    }

    function bump(a, n) {
      var x = 1 / (0.1 + Math.random()),
        y = 2 * Math.random() - 0.5,
        z = 10 / (0.1 + Math.random());
      for (var i = 0; i < n; i++) {
        var w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    }
  }
  logFn(){
    let numbers = [1,2,3,4];
    this.fn3 = ()=>{
      numbers.pop();
      console.log(numbers)
    }
  }
  
}
