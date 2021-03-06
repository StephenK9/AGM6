import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-d3-component-one',
  templateUrl: './d3-component-one.component.html',
  styleUrls: ['./d3-component-one.component.css']
})
export class D3ComponentOneComponent implements OnInit {

  items: Observable<any[]>;
  /**We set up the items Observable. We also subscribe to the Observable and fire a click event upon each change detected in the items collection. This click event will trigger D3 to append a datapoint to the graph.*/
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    this.items.subscribe(()=>{
      document.getElementById('button2').click();
    })
  }
  /**Set up the D3 Graph */
  ngOnInit() {
    
        var svg = d3.select("#svg1"),
          margin = { top: 30, right: 30, bottom: 30, left: 30 },
          width = +svg.attr("width") - margin.left - margin.right,
          height = +svg.attr("height") - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
        var x = d3.scaleTime()
          .range([0, width]);
    
        var xAxis = d3.axisBottom(x);
    
        var xAxisG = g.append("g")
          .attr("transform", "translate(0, " + height + ")");
    
        d3.timer(function () {
          var now = Date.now();
          x.domain([now - 5000, now]);
          xAxisG.call(xAxis);
        });
    
        d3.select("button").on("click", function () {
          var time = Date.now();
    
          var circle = g.append("circle")
            .attr("r", 10)
            .attr("stroke-opacity", 0)
            .attr("cy", Math.random() * height);
    
          circle.transition("time")
            .duration(5000)
            .ease(d3.easeLinear)
            .attrTween("cx", function (d) { return function (t) { return x(time); }; })
    
          circle.transition()
            .duration(750)
            .ease(d3.easeCubicOut)
            .attr("r", 3.5)
            .attr("stroke-opacity", 1)
            .transition()
            .delay(5000 - 750 * 2)
            .ease(d3.easeCubicIn)
            .attr("r", 10)
            .attr("stroke-opacity", 0)
            .remove();
        });
      }
    

}
