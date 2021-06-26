<script language="javascript" src="/_layouts/15/SP.RequestExecutor.js" type="text/javascript"></script><script language="javascript" src="/pwa/SiteAssets/elm-jquery-3.3.1.min.js" type="text/javascript"></script><script language="javascript" src="/pwa/SiteAssets/Amcharts/core.js" type="text/javascript"></script><script language="javascript" src="/pwa/SiteAssets/Amcharts/charts.js" type="text/javascript"></script><script language="javascript" src="/pwa/SiteAssets/Amcharts/themes/animated.js" type="text/javascript"></script><script type="text/javascript">

_spBodyOnLoadFunctionNames.push("DrawProductCounter");


var hostUrl;
var projectId;
var projectDataUrl;
var stageName;
var oDataResult;



function getQueryStringParameter(myParam) {

    if (document.URL.indexOf("?") > 0) {
        var params = document.URL.split("?")[1].split("&");
        
      
        
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            console.log(params[i]);

            console.log(singleParam[0]);
            console.log(singleParam[1]);

            if (singleParam[0].toLowerCase() == myParam.toLowerCase())
                return singleParam[1];
        }
    }

}

function DrawProductCounter(){

    hostUrl = "http://nahj.elm.sa/pwa";
    
    hostUrl = _spPageContextInfo.siteAbsoluteUrl;
    console.log("hosturl is " + hostUrl);

    projectId = getQueryStringParameter("ProjUID");

    if (projectId != null) {

        console.log(projectId);

        projectDataUrl = hostUrl + "/_api/ProjectData/Projects(guid'" + projectId + "')";
        
        // Get Project Counter Data from list WF-Workflow Stage Tracking
       
        console.log(projectDataUrl);

        $(document).ready(function() {
        
            var executor = new SP.RequestExecutor(hostUrl);
        
            getProjectInfo(executor);
            
        });
       
    }
}

function getProjectInfo() {

    var dataStage = $.ajax({

        url: projectDataUrl,
        type: "GET",
        dataType: "json",
        headers: { Accept: "application/json;odata=verbose" }
    });

    dataStage.done(function(dataStage, txtStatusResponse, restResponse) {
        
        //stageName = dataStage.d.results[0].StageName; 
        var projectName = dataStage.d.ProjectName;

        var ProjectCalendarDuration = dataStage.d.ProjectCalendarDuration;

        console.log(ProjectCalendarDuration);

        console.log(projectName);
        
        // Create chart
var chart = am4core.createFromConfig({
    // Set inner radius
    "innerRadius": -15,
  
    // Add axis
    "xAxes": [{
      // Set axis type and settings
      "type": "ValueAxis",
      "min": 0,
      "max": 200,
      "strictMinMax": false,
  
      // Add axis ranges
      "axisRanges": [{
        "value": 0,
        "endValue": 90,
        "axisFill": {
          "fillOpacity": 1,
          "fill": "#67b7dc"
        }
      }, {
        "value": 90,
        "endValue": 140,
        "axisFill": {
          "fillOpacity": 1,
          "fill": "#6771dc"
        }
      }, {
        "value": 140,
        "endValue": 200,
        "axisFill": {
          "fillOpacity": 1,
          "fill": "#a367dc"
        }
      }]
    }],
  
    // Add hand
    "hands": [{
      "type": "ClockHand",
      "id": "h1"
    }]
  }, "divgauge", "GaugeChart");

        
        var hand = chart.hands.getIndex(0);
        hand.showValue(ProjectCalendarDuration);
        // Get project stage information where stage status = 1 from StagesInfo
        //projectDataUrl = hostUrl + "/_api/web/lists/getByTitle('WF-Workflow Stage Tracking')/items?$filter=ProjectUID eq '" + projectId + "' and StageName eq '" + stageName + "'";

    });

}
 

</script><button onclick="DrawProductCounter()" type="button">Click me</button> 
<div id="divgauge" style="position: relative;">
fill="#000000" transform="translate(100.642 -71.7358)"><g style="-ms-user-select: none;" transform="translate(-11 -8.645)"><text x="0" y="17.29" dy="-4.668"><tspan>160</tspan></text></g></g><g fill="#000000" transform="translate(118.312 -37.7135)"><g style="-ms-user-select: none;" transform="translate(-11 -8.645)"><text x="0" y="17.29" dy="-4.668"><tspan>180</tspan></text></g></g><g fill="#000000" transform="translate(124.4)"><g style="-ms-user-select: none;" transform="translate(-11 -8.645)"><text x="0" y="17.29" dy="-4.668"><tspan>200</tspan></text></g></g><g display="none" fill="#000000" transform="translate(118.312 37.7135)"><g style="-ms-user-select: none;" transform="translate(-11 -8.645)"><text x="0" y="17.29" dy="-4.668"><tspan>220</tspan></text></g></g><g fill="#000000" transform="translate(-113.4)"><g display="none" /></g><g fill="#000000" transform="translate(-17.7397 -112.004)"><g display="none" /></g><g fill="#000000" transform="translate(66.6548 -91.7425)"><g display="none" /></g><g fill="#000000" stroke="#000000" transform="translate(0) rotate(296.1)"><g><g><circle r="5" /></g><g transform="translate(0 -2.5)"><path d="M 0 0 L 98.4 2 L 98.4 3 L 0 5" /></g></g></g><g><g /></g></g></g><g fill="#000000"><g display="none" /></g><g fill="none" stroke="#000000" stroke-opacity="0.15"><path transform="translate(-0.5 -0.5)" /></g><g style="pointer-events: none;" fill="none" stroke="#000000" stroke-opacity="0"><path transform="translate(-0.5 -0.5)" d="M -98.4 0 a 98.4 98.4 0 0 1 196.8 0" /></g></g></g><g><g /></g><g clip-path="url(&quot;#id-242&quot;)"><g /></g></g></g><g><g /></g><g role="button" aria-hidden="true" aria-labelledby="id-130-title" visibility="hidden" opacity="0" transform="translate(1574 -3)" focusable="true"><g fill="#6794dc" fill-opacity="1" stroke="#ffffff" stroke-opacity="0" transform="translate(0 8)"><path d="M 17 0 L 18 0 a 17 17 0 0 1 17 17 L 35 17 a 17 17 0 0 1 -17 17 L 17 34 a 17 17 0 0 1 -17 -17 L 0 17 a 17 17 0 0 1 17 -17 Z" /></g><g transform="translate(9 9)"><g style="pointer-events: none;" stroke="#ffffff" transform="translate(0 8)"><path transform="translate(2.5 7.5)" d="M 0 0 L 11 0" /></g><g style="pointer-events: none;" fill="#000000" transform="translate(17 8)"><g display="none" /></g></g><title id="id-130-title">Zoom Out</title></g></g></g><g><g /></g><g transform="translate(1614)"><g /></g></g></g><g><g /></g><g transform="translate(0 123)"><g /></g></g></g></g></g></g><desc id="id-116-description">Chart</desc></g><g><g><g role="tooltip" visibility="hidden" opacity="0"><g filter="url(&quot;#filter-id-149&quot;)" style="pointer-events: none;" fill="#ffffff" fill-opacity="0.9" stroke="#ffffff" stroke-opacity="1" stroke-width="1" transform="translate(0 6)"><path d="M 3 0 L 3 0 L 0 -6 L 13 0 L 21 0 a 3 3 0 0 1 3 3 L 24 8 a 3 3 0 0 1 -3 3 L 3 11 a 3 3 0 0 1 -3 -3 L 0 3 a 3 3 0 0 1 3 -3" /></g><g><g style="pointer-events: none;" fill="#ffffff" transform="translate(12 6)"><g display="none" transform="translate(0 7)" /></g></g></g><g display="none" visibility="hidden"><g opacity="1" fill="#ffffff"><rect width="1644" height="153" /></g><g><g><g><g fill="#f3f3f3" fill-opacity="0.8" stroke-opacity="1"><g><g><path d="M 53 0 a 53 53 0 0 1 -106 0 a 53 53 0 0 1 106 0 M 42 0 a 42 42 0 0 0 -84 0 a 42 42 0 0 0 84 0 L 42 0" /></g></g></g><g fill="#000000" fill-opacity="0.2" stroke-opacity="1"><g><g><path d="" /></g></g></g><g fill="#000000" fill-opacity="0.4"><g display="none" /></g></g></g></g></g><g aria-labelledby="id-160-title" filter="url(&quot;#filter-id-160&quot;)" style="cursor: pointer;" opacity="0.3" transform="translate(0 132)"><g opacity="0" fill="#ffffff"><rect width="66" height="21" /></g><g><g fill="none" stroke="#3cabff" stroke-opacity="1" stroke-width="1.8" shape-rendering="auto"><path d="M 15 15 C 17.4001 15 22.7998 15.0001 27 15 C 31.2002 14.9999 33.2999 6 36 6 C 38.7001 6 38.6999 10.5 40.5 10.5 C 42.3001 10.5 42.2999 6 45 6 C 47.7001 6 50.9999 14.9999 54 15 C 57.0002 15.0001 58.7999 15 60 15" /></g><g fill="none" stroke="url(#gradient-id-163)" stroke-opacity="1" stroke-width="1.8" shape-rendering="auto"><path d="M 6 15 C 8.2501 15 9.7498 15.0001 15 15 C 20.2502 14.9999 20.7748 3.6 27 3.6 C 33.2252 3.6 33.8998 14.9999 39.9 15 C 45.9002 15.0001 45.9748 15 51 15 C 56.0252 15 57.7499 15 60 15" /></g></g><title id="id-160-title">Chart created using amCharts library</title></g><g role="tooltip" visibility="hidden" opacity="0" transform="translate(724.731 110.826)"><g style="pointer-events: none;" fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" transform="translate(-10 -15)"><path d="M 0 0 L 20 0 a 0 0 0 0 1 0 0 L 20 10 a 0 0 0 0 1 0 0 L 20 10 L 15 10 L 10 15 L 5 10 L 0 10 a 0 0 0 0 1 0 0 L 0 0 a 0 0 0 0 1 0 0" /></g><g><g style="pointer-events: none;" fill="#ffffff" transform="translate(0 -15)"><g display="none" transform="translate(0 5)" /></g></g></g></g></g></g></g></svg></div>
</div>