/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 199793.0, "series": [{"data": [[0.0, 7.0], [0.1, 7.0], [0.2, 7.0], [0.3, 7.0], [0.4, 7.0], [0.5, 7.0], [0.6, 7.0], [0.7, 7.0], [0.8, 7.0], [0.9, 8.0], [1.0, 8.0], [1.1, 8.0], [1.2, 8.0], [1.3, 8.0], [1.4, 8.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 8.0], [2.3, 8.0], [2.4, 8.0], [2.5, 8.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 9.0], [3.1, 9.0], [3.2, 9.0], [3.3, 9.0], [3.4, 9.0], [3.5, 9.0], [3.6, 9.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 9.0], [4.7, 9.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 9.0], [5.8, 9.0], [5.9, 9.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 10.0], [6.5, 10.0], [6.6, 10.0], [6.7, 10.0], [6.8, 10.0], [6.9, 10.0], [7.0, 10.0], [7.1, 10.0], [7.2, 10.0], [7.3, 10.0], [7.4, 10.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 10.0], [10.4, 10.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 11.0], [12.2, 11.0], [12.3, 11.0], [12.4, 11.0], [12.5, 11.0], [12.6, 11.0], [12.7, 11.0], [12.8, 11.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 13.0], [19.3, 13.0], [19.4, 13.0], [19.5, 13.0], [19.6, 13.0], [19.7, 13.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 14.0], [20.3, 14.0], [20.4, 14.0], [20.5, 14.0], [20.6, 14.0], [20.7, 14.0], [20.8, 14.0], [20.9, 14.0], [21.0, 14.0], [21.1, 14.0], [21.2, 14.0], [21.3, 14.0], [21.4, 14.0], [21.5, 14.0], [21.6, 14.0], [21.7, 14.0], [21.8, 14.0], [21.9, 14.0], [22.0, 14.0], [22.1, 14.0], [22.2, 14.0], [22.3, 14.0], [22.4, 14.0], [22.5, 14.0], [22.6, 14.0], [22.7, 14.0], [22.8, 14.0], [22.9, 14.0], [23.0, 14.0], [23.1, 14.0], [23.2, 14.0], [23.3, 14.0], [23.4, 14.0], [23.5, 14.0], [23.6, 14.0], [23.7, 14.0], [23.8, 14.0], [23.9, 14.0], [24.0, 14.0], [24.1, 14.0], [24.2, 14.0], [24.3, 14.0], [24.4, 14.0], [24.5, 14.0], [24.6, 14.0], [24.7, 14.0], [24.8, 14.0], [24.9, 14.0], [25.0, 14.0], [25.1, 14.0], [25.2, 15.0], [25.3, 15.0], [25.4, 15.0], [25.5, 15.0], [25.6, 15.0], [25.7, 15.0], [25.8, 15.0], [25.9, 15.0], [26.0, 15.0], [26.1, 15.0], [26.2, 15.0], [26.3, 15.0], [26.4, 15.0], [26.5, 15.0], [26.6, 15.0], [26.7, 15.0], [26.8, 15.0], [26.9, 15.0], [27.0, 15.0], [27.1, 15.0], [27.2, 15.0], [27.3, 15.0], [27.4, 15.0], [27.5, 15.0], [27.6, 15.0], [27.7, 15.0], [27.8, 15.0], [27.9, 15.0], [28.0, 15.0], [28.1, 15.0], [28.2, 15.0], [28.3, 15.0], [28.4, 15.0], [28.5, 15.0], [28.6, 15.0], [28.7, 15.0], [28.8, 15.0], [28.9, 15.0], [29.0, 15.0], [29.1, 15.0], [29.2, 15.0], [29.3, 15.0], [29.4, 15.0], [29.5, 15.0], [29.6, 15.0], [29.7, 15.0], [29.8, 15.0], [29.9, 15.0], [30.0, 15.0], [30.1, 15.0], [30.2, 15.0], [30.3, 15.0], [30.4, 15.0], [30.5, 15.0], [30.6, 15.0], [30.7, 15.0], [30.8, 15.0], [30.9, 15.0], [31.0, 16.0], [31.1, 16.0], [31.2, 16.0], [31.3, 16.0], [31.4, 16.0], [31.5, 16.0], [31.6, 16.0], [31.7, 16.0], [31.8, 16.0], [31.9, 16.0], [32.0, 16.0], [32.1, 16.0], [32.2, 16.0], [32.3, 16.0], [32.4, 16.0], [32.5, 16.0], [32.6, 16.0], [32.7, 16.0], [32.8, 16.0], [32.9, 16.0], [33.0, 16.0], [33.1, 16.0], [33.2, 16.0], [33.3, 16.0], [33.4, 16.0], [33.5, 16.0], [33.6, 16.0], [33.7, 16.0], [33.8, 16.0], [33.9, 16.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 16.0], [34.8, 16.0], [34.9, 16.0], [35.0, 16.0], [35.1, 16.0], [35.2, 16.0], [35.3, 16.0], [35.4, 16.0], [35.5, 16.0], [35.6, 16.0], [35.7, 16.0], [35.8, 16.0], [35.9, 16.0], [36.0, 16.0], [36.1, 17.0], [36.2, 17.0], [36.3, 17.0], [36.4, 17.0], [36.5, 17.0], [36.6, 17.0], [36.7, 17.0], [36.8, 17.0], [36.9, 17.0], [37.0, 17.0], [37.1, 17.0], [37.2, 17.0], [37.3, 17.0], [37.4, 17.0], [37.5, 17.0], [37.6, 17.0], [37.7, 17.0], [37.8, 17.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 17.0], [38.5, 17.0], [38.6, 17.0], [38.7, 17.0], [38.8, 17.0], [38.9, 17.0], [39.0, 17.0], [39.1, 17.0], [39.2, 17.0], [39.3, 17.0], [39.4, 17.0], [39.5, 17.0], [39.6, 17.0], [39.7, 17.0], [39.8, 17.0], [39.9, 18.0], [40.0, 18.0], [40.1, 18.0], [40.2, 18.0], [40.3, 18.0], [40.4, 18.0], [40.5, 18.0], [40.6, 18.0], [40.7, 18.0], [40.8, 18.0], [40.9, 18.0], [41.0, 18.0], [41.1, 18.0], [41.2, 18.0], [41.3, 18.0], [41.4, 18.0], [41.5, 19.0], [41.6, 19.0], [41.7, 19.0], [41.8, 19.0], [41.9, 19.0], [42.0, 19.0], [42.1, 19.0], [42.2, 19.0], [42.3, 19.0], [42.4, 19.0], [42.5, 19.0], [42.6, 19.0], [42.7, 19.0], [42.8, 19.0], [42.9, 19.0], [43.0, 19.0], [43.1, 19.0], [43.2, 19.0], [43.3, 20.0], [43.4, 20.0], [43.5, 20.0], [43.6, 20.0], [43.7, 20.0], [43.8, 20.0], [43.9, 20.0], [44.0, 20.0], [44.1, 20.0], [44.2, 20.0], [44.3, 20.0], [44.4, 20.0], [44.5, 20.0], [44.6, 20.0], [44.7, 20.0], [44.8, 20.0], [44.9, 20.0], [45.0, 20.0], [45.1, 21.0], [45.2, 21.0], [45.3, 21.0], [45.4, 21.0], [45.5, 21.0], [45.6, 21.0], [45.7, 21.0], [45.8, 21.0], [45.9, 21.0], [46.0, 21.0], [46.1, 21.0], [46.2, 21.0], [46.3, 21.0], [46.4, 21.0], [46.5, 21.0], [46.6, 21.0], [46.7, 21.0], [46.8, 21.0], [46.9, 21.0], [47.0, 21.0], [47.1, 21.0], [47.2, 22.0], [47.3, 22.0], [47.4, 22.0], [47.5, 22.0], [47.6, 22.0], [47.7, 22.0], [47.8, 22.0], [47.9, 22.0], [48.0, 22.0], [48.1, 22.0], [48.2, 22.0], [48.3, 22.0], [48.4, 22.0], [48.5, 22.0], [48.6, 22.0], [48.7, 22.0], [48.8, 22.0], [48.9, 23.0], [49.0, 23.0], [49.1, 23.0], [49.2, 23.0], [49.3, 23.0], [49.4, 23.0], [49.5, 23.0], [49.6, 23.0], [49.7, 23.0], [49.8, 23.0], [49.9, 23.0], [50.0, 23.0], [50.1, 24.0], [50.2, 24.0], [50.3, 24.0], [50.4, 24.0], [50.5, 24.0], [50.6, 24.0], [50.7, 24.0], [50.8, 24.0], [50.9, 24.0], [51.0, 24.0], [51.1, 24.0], [51.2, 25.0], [51.3, 25.0], [51.4, 25.0], [51.5, 25.0], [51.6, 25.0], [51.7, 25.0], [51.8, 25.0], [51.9, 26.0], [52.0, 26.0], [52.1, 26.0], [52.2, 26.0], [52.3, 26.0], [52.4, 26.0], [52.5, 27.0], [52.6, 27.0], [52.7, 27.0], [52.8, 27.0], [52.9, 27.0], [53.0, 27.0], [53.1, 27.0], [53.2, 28.0], [53.3, 28.0], [53.4, 28.0], [53.5, 28.0], [53.6, 29.0], [53.7, 29.0], [53.8, 29.0], [53.9, 30.0], [54.0, 30.0], [54.1, 30.0], [54.2, 30.0], [54.3, 30.0], [54.4, 31.0], [54.5, 31.0], [54.6, 31.0], [54.7, 31.0], [54.8, 32.0], [54.9, 32.0], [55.0, 32.0], [55.1, 33.0], [55.2, 33.0], [55.3, 33.0], [55.4, 33.0], [55.5, 33.0], [55.6, 33.0], [55.7, 34.0], [55.8, 35.0], [55.9, 37.0], [56.0, 37.0], [56.1, 37.0], [56.2, 37.0], [56.3, 39.0], [56.4, 40.0], [56.5, 40.0], [56.6, 40.0], [56.7, 40.0], [56.8, 41.0], [56.9, 41.0], [57.0, 41.0], [57.1, 41.0], [57.2, 42.0], [57.3, 42.0], [57.4, 43.0], [57.5, 43.0], [57.6, 43.0], [57.7, 43.0], [57.8, 44.0], [57.9, 44.0], [58.0, 44.0], [58.1, 45.0], [58.2, 45.0], [58.3, 45.0], [58.4, 47.0], [58.5, 47.0], [58.6, 48.0], [58.7, 49.0], [58.8, 49.0], [58.9, 49.0], [59.0, 50.0], [59.1, 53.0], [59.2, 54.0], [59.3, 56.0], [59.4, 56.0], [59.5, 151.0], [59.6, 152.0], [59.7, 223.0], [59.8, 223.0], [59.9, 403.0], [60.0, 405.0], [60.1, 411.0], [60.2, 798.0], [60.3, 800.0], [60.4, 1011.0], [60.5, 1011.0], [60.6, 1011.0], [60.7, 1012.0], [60.8, 1013.0], [60.9, 1014.0], [61.0, 1015.0], [61.1, 1015.0], [61.2, 1016.0], [61.3, 1017.0], [61.4, 1017.0], [61.5, 1017.0], [61.6, 1018.0], [61.7, 1019.0], [61.8, 1020.0], [61.9, 1020.0], [62.0, 1020.0], [62.1, 1020.0], [62.2, 1020.0], [62.3, 1021.0], [62.4, 1021.0], [62.5, 1021.0], [62.6, 1021.0], [62.7, 1021.0], [62.8, 1022.0], [62.9, 1022.0], [63.0, 1022.0], [63.1, 1022.0], [63.2, 1022.0], [63.3, 1023.0], [63.4, 1023.0], [63.5, 1023.0], [63.6, 1023.0], [63.7, 1023.0], [63.8, 1023.0], [63.9, 1024.0], [64.0, 1025.0], [64.1, 1025.0], [64.2, 1026.0], [64.3, 1026.0], [64.4, 1026.0], [64.5, 1026.0], [64.6, 1027.0], [64.7, 1028.0], [64.8, 1028.0], [64.9, 1028.0], [65.0, 1028.0], [65.1, 1028.0], [65.2, 1028.0], [65.3, 1028.0], [65.4, 1029.0], [65.5, 1029.0], [65.6, 1029.0], [65.7, 1029.0], [65.8, 1030.0], [65.9, 1030.0], [66.0, 1032.0], [66.1, 1032.0], [66.2, 1032.0], [66.3, 1032.0], [66.4, 1032.0], [66.5, 1032.0], [66.6, 1033.0], [66.7, 1033.0], [66.8, 1033.0], [66.9, 1033.0], [67.0, 1033.0], [67.1, 1034.0], [67.2, 1034.0], [67.3, 1034.0], [67.4, 1034.0], [67.5, 1035.0], [67.6, 1036.0], [67.7, 1036.0], [67.8, 1036.0], [67.9, 1037.0], [68.0, 1037.0], [68.1, 1037.0], [68.2, 1038.0], [68.3, 1038.0], [68.4, 1038.0], [68.5, 1038.0], [68.6, 1039.0], [68.7, 1039.0], [68.8, 1039.0], [68.9, 1039.0], [69.0, 1041.0], [69.1, 1041.0], [69.2, 1042.0], [69.3, 1042.0], [69.4, 1042.0], [69.5, 1043.0], [69.6, 1043.0], [69.7, 1044.0], [69.8, 1044.0], [69.9, 1045.0], [70.0, 1046.0], [70.1, 1047.0], [70.2, 1048.0], [70.3, 1049.0], [70.4, 1049.0], [70.5, 1049.0], [70.6, 1050.0], [70.7, 1050.0], [70.8, 1051.0], [70.9, 1053.0], [71.0, 1053.0], [71.1, 1053.0], [71.2, 1054.0], [71.3, 1054.0], [71.4, 1054.0], [71.5, 1055.0], [71.6, 1056.0], [71.7, 1056.0], [71.8, 1056.0], [71.9, 1058.0], [72.0, 1058.0], [72.1, 1059.0], [72.2, 1059.0], [72.3, 1060.0], [72.4, 1068.0], [72.5, 1072.0], [72.6, 1074.0], [72.7, 1094.0], [72.8, 1178.0], [72.9, 1221.0], [73.0, 1226.0], [73.1, 1227.0], [73.2, 1227.0], [73.3, 1230.0], [73.4, 1230.0], [73.5, 1232.0], [73.6, 1232.0], [73.7, 1233.0], [73.8, 1234.0], [73.9, 1234.0], [74.0, 1235.0], [74.1, 1235.0], [74.2, 1235.0], [74.3, 1236.0], [74.4, 1236.0], [74.5, 1236.0], [74.6, 1238.0], [74.7, 1240.0], [74.8, 1242.0], [74.9, 1243.0], [75.0, 1245.0], [75.1, 1245.0], [75.2, 1246.0], [75.3, 1247.0], [75.4, 1248.0], [75.5, 1250.0], [75.6, 1252.0], [75.7, 1253.0], [75.8, 1253.0], [75.9, 1254.0], [76.0, 1254.0], [76.1, 1256.0], [76.2, 1257.0], [76.3, 1259.0], [76.4, 1260.0], [76.5, 1260.0], [76.6, 1260.0], [76.7, 1265.0], [76.8, 1269.0], [76.9, 1271.0], [77.0, 1321.0], [77.1, 1721.0], [77.2, 1731.0], [77.3, 1748.0], [77.4, 1750.0], [77.5, 1752.0], [77.6, 1829.0], [77.7, 2025.0], [77.8, 2034.0], [77.9, 2034.0], [78.0, 2036.0], [78.1, 2036.0], [78.2, 2036.0], [78.3, 2037.0], [78.4, 2037.0], [78.5, 2037.0], [78.6, 2037.0], [78.7, 2038.0], [78.8, 2039.0], [78.9, 2039.0], [79.0, 2040.0], [79.1, 2040.0], [79.2, 2040.0], [79.3, 2040.0], [79.4, 2041.0], [79.5, 2041.0], [79.6, 2042.0], [79.7, 2042.0], [79.8, 2042.0], [79.9, 2043.0], [80.0, 2044.0], [80.1, 2044.0], [80.2, 2045.0], [80.3, 2045.0], [80.4, 2046.0], [80.5, 2046.0], [80.6, 2046.0], [80.7, 2047.0], [80.8, 2047.0], [80.9, 2050.0], [81.0, 2050.0], [81.1, 2050.0], [81.2, 2051.0], [81.3, 2061.0], [81.4, 2062.0], [81.5, 2062.0], [81.6, 2064.0], [81.7, 2065.0], [81.8, 2084.0], [81.9, 2085.0], [82.0, 2102.0], [82.1, 2110.0], [82.2, 2126.0], [82.3, 2129.0], [82.4, 2137.0], [82.5, 2147.0], [82.6, 2231.0], [82.7, 2241.0], [82.8, 2242.0], [82.9, 2243.0], [83.0, 2253.0], [83.1, 2254.0], [83.2, 2256.0], [83.3, 2264.0], [83.4, 2265.0], [83.5, 2269.0], [83.6, 2270.0], [83.7, 2272.0], [83.8, 2425.0], [83.9, 2503.0], [84.0, 3039.0], [84.1, 3045.0], [84.2, 3046.0], [84.3, 3047.0], [84.4, 3048.0], [84.5, 3048.0], [84.6, 3049.0], [84.7, 3049.0], [84.8, 3051.0], [84.9, 3053.0], [85.0, 3056.0], [85.1, 3057.0], [85.2, 3061.0], [85.3, 3063.0], [85.4, 3064.0], [85.5, 3066.0], [85.6, 3067.0], [85.7, 3068.0], [85.8, 3069.0], [85.9, 3070.0], [86.0, 3072.0], [86.1, 3073.0], [86.2, 3078.0], [86.3, 3080.0], [86.4, 3088.0], [86.5, 3088.0], [86.6, 3250.0], [86.7, 3264.0], [86.8, 3265.0], [86.9, 3267.0], [87.0, 3268.0], [87.1, 3269.0], [87.2, 3269.0], [87.3, 3270.0], [87.4, 3270.0], [87.5, 3270.0], [87.6, 3271.0], [87.7, 3272.0], [87.8, 3272.0], [87.9, 3274.0], [88.0, 3277.0], [88.1, 3277.0], [88.2, 3277.0], [88.3, 3280.0], [88.4, 3282.0], [88.5, 3282.0], [88.6, 3285.0], [88.7, 3293.0], [88.8, 3295.0], [88.9, 3447.0], [89.0, 3482.0], [89.1, 3490.0], [89.2, 3501.0], [89.3, 3514.0], [89.4, 3524.0], [89.5, 3578.0], [89.6, 3596.0], [89.7, 3743.0], [89.8, 3764.0], [89.9, 4057.0], [90.0, 4060.0], [90.1, 4062.0], [90.2, 4062.0], [90.3, 4068.0], [90.4, 4071.0], [90.5, 4072.0], [90.6, 4073.0], [90.7, 4073.0], [90.8, 4073.0], [90.9, 4074.0], [91.0, 4075.0], [91.1, 4075.0], [91.2, 4081.0], [91.3, 4084.0], [91.4, 4084.0], [91.5, 4085.0], [91.6, 4087.0], [91.7, 4088.0], [91.8, 4088.0], [91.9, 4089.0], [92.0, 4238.0], [92.1, 4257.0], [92.2, 4272.0], [92.3, 4284.0], [92.4, 4286.0], [92.5, 4289.0], [92.6, 4293.0], [92.7, 4370.0], [92.8, 4459.0], [92.9, 4594.0], [93.0, 4601.0], [93.1, 4692.0], [93.2, 4801.0], [93.3, 5013.0], [93.4, 5055.0], [93.5, 5071.0], [93.6, 5076.0], [93.7, 5081.0], [93.8, 5085.0], [93.9, 5095.0], [94.0, 5169.0], [94.1, 5181.0], [94.2, 5285.0], [94.3, 5294.0], [94.4, 5296.0], [94.5, 5297.0], [94.6, 5464.0], [94.7, 5733.0], [94.8, 5781.0], [94.9, 5968.0], [95.0, 6002.0], [95.1, 6008.0], [95.2, 6028.0], [95.3, 6047.0], [95.4, 6097.0], [95.5, 6443.0], [95.6, 6834.0], [95.7, 6844.0], [95.8, 7006.0], [95.9, 7051.0], [96.0, 7147.0], [96.1, 7574.0], [96.2, 7592.0], [96.3, 7718.0], [96.4, 7787.0], [96.5, 7811.0], [96.6, 7815.0], [96.7, 8024.0], [96.8, 8200.0], [96.9, 8218.0], [97.0, 8226.0], [97.1, 8241.0], [97.2, 8516.0], [97.3, 8698.0], [97.4, 8883.0], [97.5, 8888.0], [97.6, 10201.0], [97.7, 10465.0], [97.8, 10662.0], [97.9, 11593.0], [98.0, 12210.0], [98.1, 14381.0], [98.2, 14415.0], [98.3, 14428.0], [98.4, 14631.0], [98.5, 16992.0], [98.6, 26750.0], [98.7, 26779.0], [98.8, 26786.0], [98.9, 26800.0], [99.0, 51325.0], [99.1, 51325.0], [99.2, 51333.0], [99.3, 100815.0], [99.4, 100820.0], [99.5, 100833.0], [99.6, 199733.0], [99.7, 199777.0], [99.8, 199790.0], [99.9, 199793.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 595.0, "series": [{"data": [[0.0, 595.0], [700.0, 1.0], [800.0, 1.0], [1000.0, 125.0], [1100.0, 1.0], [1200.0, 41.0], [1300.0, 1.0], [1700.0, 5.0], [1800.0, 1.0], [2000.0, 43.0], [2100.0, 6.0], [2200.0, 12.0], [2400.0, 1.0], [2500.0, 1.0], [3000.0, 26.0], [199700.0, 4.0], [3200.0, 23.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 2.0], [4000.0, 21.0], [4200.0, 7.0], [4300.0, 1.0], [4600.0, 2.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [5000.0, 7.0], [5100.0, 2.0], [5200.0, 4.0], [5400.0, 1.0], [5700.0, 2.0], [6000.0, 5.0], [5900.0, 1.0], [6400.0, 1.0], [6800.0, 2.0], [7000.0, 2.0], [7100.0, 1.0], [7500.0, 2.0], [7800.0, 2.0], [7700.0, 2.0], [8000.0, 1.0], [8200.0, 4.0], [8500.0, 1.0], [8600.0, 1.0], [8800.0, 2.0], [10200.0, 1.0], [10400.0, 1.0], [10600.0, 1.0], [11500.0, 1.0], [12200.0, 1.0], [14300.0, 1.0], [14400.0, 2.0], [14600.0, 1.0], [16900.0, 1.0], [100.0, 2.0], [26700.0, 3.0], [26800.0, 1.0], [200.0, 1.0], [51300.0, 3.0], [100800.0, 3.0], [400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 199700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 601.0, "series": [{"data": [[0.0, 601.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 170.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 225.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.25, "minX": 1.71577836E12, "maxY": 129.31263157894753, "series": [{"data": [[1.71577836E12, 129.31263157894753], [1.71577854E12, 3.25], [1.71577848E12, 6.8], [1.71577842E12, 9.8]], "isOverall": false, "label": "Progjar", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71577854E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 8.5, "minX": 1.0, "maxY": 57088.14285714285, "series": [{"data": [[2.0, 15.0], [3.0, 14.0], [4.0, 57088.14285714285], [5.0, 12.0], [6.0, 22.0], [7.0, 23288.76923076923], [8.0, 12.0], [9.0, 14.0], [10.0, 11854.846153846152], [11.0, 260.25], [12.0, 12.0], [13.0, 14.0], [14.0, 7660.785714285715], [15.0, 3404.4], [16.0, 2932.7999999999997], [17.0, 16.0], [18.0, 16.0], [19.0, 3335.153846153846], [20.0, 2906.0], [21.0, 2448.4], [22.0, 1903.7499999999998], [23.0, 9.0], [24.0, 10.6], [25.0, 4009.5714285714284], [26.0, 2099.2], [27.0, 2905.666666666667], [28.0, 11.0], [29.0, 2545.714285714286], [30.0, 259.0], [31.0, 514.0], [33.0, 2391.0], [32.0, 9.333333333333334], [35.0, 8.5], [34.0, 5464.0], [37.0, 1271.75], [36.0, 353.33333333333337], [39.0, 3012.9999999999995], [38.0, 10.666666666666666], [41.0, 14.0], [40.0, 15.0], [43.0, 8.5], [42.0, 2358.4285714285716], [45.0, 1730.5], [44.0, 2192.285714285714], [47.0, 14.0], [46.0, 10.0], [49.0, 347.0], [48.0, 3135.499999999999], [51.0, 10.0], [50.0, 1020.0], [53.0, 513.0], [52.0, 3117.4999999999995], [55.0, 9.0], [54.0, 1020.0], [57.0, 10.0], [56.0, 1528.1111111111106], [59.0, 9.0], [58.0, 1640.4999999999998], [61.0, 1226.0], [60.0, 1020.0], [63.0, 519.0], [62.0, 416.33333333333337], [67.0, 14.0], [66.0, 516.5], [65.0, 10.0], [64.0, 2034.0], [71.0, 1277.5], [70.0, 2037.0], [69.0, 1036.0], [68.0, 1024.0], [75.0, 1527.0], [74.0, 1365.0], [73.0, 2414.8], [72.0, 688.0], [79.0, 1033.0], [78.0, 1030.0], [77.0, 1275.75], [76.0, 15.0], [83.0, 1332.75], [82.0, 14.0], [81.0, 13.0], [80.0, 516.5], [87.0, 11.0], [86.0, 1014.0], [85.0, 511.0], [84.0, 516.5], [91.0, 11.8], [90.0, 1026.0], [89.0, 1637.2], [88.0, 350.33333333333337], [95.0, 1034.0], [94.0, 519.0], [93.0, 870.5], [92.0, 2227.0], [99.0, 1053.0], [98.0, 278.75], [97.0, 19.0], [96.0, 1021.0], [103.0, 1022.0], [102.0, 526.5], [101.0, 1034.0], [100.0, 2673.5], [107.0, 16.0], [106.0, 15.0], [105.0, 1377.5], [104.0, 9.5], [111.0, 15.0], [110.0, 661.2], [109.0, 1617.6], [108.0, 739.7777777777778], [115.0, 15.0], [114.0, 2887.428571428571], [113.0, 1645.1666666666665], [112.0, 16.0], [117.0, 276.3333333333333], [118.0, 2236.5], [119.0, 2040.4999999999998], [116.0, 1277.75], [120.0, 672.1999999999999], [123.0, 482.85714285714283], [122.0, 354.0], [121.0, 15.0], [126.0, 779.25], [127.0, 318.0], [125.0, 16.0], [124.0, 1439.7999999999997], [130.0, 1371.8333333333333], [134.0, 635.4], [135.0, 17.5], [133.0, 857.8333333333333], [132.0, 15.0], [131.0, 1712.5714285714284], [129.0, 1792.25], [128.0, 307.7142857142857], [136.0, 308.5714285714286], [139.0, 373.8333333333333], [142.0, 900.9999999999999], [143.0, 2606.8888888888887], [141.0, 13.0], [140.0, 1027.6], [138.0, 2517.5], [137.0, 1280.5], [145.0, 388.63636363636357], [148.0, 1556.0], [150.0, 17.75], [151.0, 17.333333333333332], [149.0, 1017.0], [147.0, 1034.0], [146.0, 1242.0], [144.0, 22.0], [152.0, 31.5], [155.0, 631.0], [158.0, 279.75], [159.0, 429.0], [157.0, 1236.0], [156.0, 16.0], [154.0, 1129.3888888888885], [153.0, 1831.4666666666667], [162.0, 1551.3888888888885], [163.0, 26.5], [166.0, 534.5], [167.0, 16.5], [165.0, 16.0], [164.0, 2064.235294117647], [161.0, 418.8], [160.0, 16.0], [168.0, 1572.1333333333334], [171.0, 526.75], [174.0, 909.5454545454547], [175.0, 1317.2727272727273], [173.0, 15.0], [172.0, 15.0], [170.0, 842.2222222222222], [169.0, 11.0], [177.0, 1016.7], [180.0, 1031.75], [181.0, 1556.0526315789473], [183.0, 909.6666666666666], [182.0, 1056.7], [179.0, 2064.0], [178.0, 1781.2812499999998], [176.0, 1102.6666666666667], [184.0, 1040.5], [185.0, 23.666666666666668], [188.0, 528.75], [191.0, 192.42857142857142], [190.0, 25.0], [189.0, 1036.6129032258066], [187.0, 1078.3], [186.0, 702.6666666666666], [193.0, 21.5], [196.0, 631.3617021276596], [197.0, 50.666666666666664], [199.0, 29.5], [198.0, 23.0], [195.0, 615.0], [194.0, 22.0], [192.0, 491.5384615384615], [200.0, 33.76923076923077], [1.0, 262.25]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[123.16100000000016, 2449.7160000000013]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 31.25, "minX": 1.71577836E12, "maxY": 2517.5, "series": [{"data": [[1.71577836E12, 2517.5], [1.71577854E12, 256.8], [1.71577848E12, 39.75], [1.71577842E12, 39.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71577836E12, 1979.1666666666667], [1.71577854E12, 33.333333333333336], [1.71577848E12, 31.25], [1.71577842E12, 31.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71577854E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1255.2389473684225, "minX": 1.71577836E12, "maxY": 40015.6, "series": [{"data": [[1.71577836E12, 1255.2389473684225], [1.71577854E12, 40015.6], [1.71577848E12, 20185.866666666665], [1.71577842E12, 10275.933333333332]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71577854E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 60.49999999999999, "minX": 1.71577836E12, "maxY": 20185.333333333332, "series": [{"data": [[1.71577836E12, 1254.5663157894735], [1.71577854E12, 60.49999999999999], [1.71577848E12, 20185.333333333332], [1.71577842E12, 10275.533333333331]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71577854E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1248.5536842105266, "minX": 1.71577836E12, "maxY": 40010.75, "series": [{"data": [[1.71577836E12, 1248.5536842105266], [1.71577854E12, 40010.75], [1.71577848E12, 20176.199999999993], [1.71577842E12, 10270.333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71577854E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 7.0, "minX": 1.71577836E12, "maxY": 100833.0, "series": [{"data": [[1.71577836E12, 26800.0], [1.71577854E12, 1022.0], [1.71577848E12, 100833.0], [1.71577842E12, 51333.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71577836E12, 7.0], [1.71577854E12, 8.0], [1.71577848E12, 12.0], [1.71577842E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71577836E12, 3572.5999999999985], [1.71577854E12, 320.6000000000007], [1.71577848E12, 100825.2], [1.71577842E12, 51328.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71577836E12, 13273.790000000019], [1.71577854E12, 1022.0], [1.71577848E12, 100833.0], [1.71577842E12, 51333.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71577836E12, 24.0], [1.71577854E12, 14.0], [1.71577848E12, 30.0], [1.71577842E12, 14.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71577836E12, 5289.049999999999], [1.71577854E12, 1022.0], [1.71577848E12, 100833.0], [1.71577842E12, 51333.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71577854E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 3.0, "maxY": 199783.5, "series": [{"data": [[141.0, 27.0], [143.0, 20.0], [9.0, 9.0], [39.0, 11.0], [166.0, 21.0], [43.0, 19.0], [3.0, 10.0], [54.0, 14.0], [15.0, 23.5], [4.0, 32.0], [16.0, 13.5], [18.0, 12.5], [77.0, 16.0], [5.0, 8.0], [90.0, 41.0], [114.0, 38.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 199783.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 166.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 40.0, "series": [{"data": [[141.0, 26.0], [143.0, 20.0], [9.0, 9.0], [39.0, 10.0], [166.0, 20.0], [43.0, 19.0], [3.0, 9.0], [54.0, 13.0], [15.0, 23.0], [4.0, 32.0], [16.0, 13.0], [18.0, 12.5], [77.0, 15.0], [5.0, 7.0], [90.0, 40.0], [114.0, 37.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 166.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.2, "minX": 1.71577836E12, "maxY": 16.0, "series": [{"data": [[1.71577836E12, 16.0], [1.71577854E12, 0.26666666666666666], [1.71577848E12, 0.2], [1.71577842E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71577854E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71577836E12, "maxY": 15.833333333333334, "series": [{"data": [[1.71577836E12, 15.833333333333334], [1.71577854E12, 0.26666666666666666], [1.71577848E12, 0.25], [1.71577842E12, 0.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71577854E12, 0.06666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71577854E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71577836E12, "maxY": 15.833333333333334, "series": [{"data": [[1.71577836E12, 15.833333333333334], [1.71577854E12, 0.26666666666666666], [1.71577848E12, 0.25], [1.71577842E12, 0.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.71577854E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71577854E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71577836E12, "maxY": 15.833333333333334, "series": [{"data": [[1.71577836E12, 15.833333333333334], [1.71577854E12, 0.26666666666666666], [1.71577848E12, 0.25], [1.71577842E12, 0.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71577854E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71577854E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

