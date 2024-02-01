import {towaAAA} from './vtubers/towaAAA.js'
import {animeOpenings} from "./misc/animeOps.js";
import {animeEndings} from "./misc/animeEds.js";

dataSetVersion = "2024-01-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by vtubers or miscellaneous",
        key: "singer",
        tooltip: "Check this to show songs containing these vtubers",
        checked: true,
        sub: [
            {name: "Tokoyami Towa", key: "Towa", checked: false},
            {name: "Hoshimachi Suisei", key: "Suisei", checked: false},
            {name: "Minato Aqua", key: "INS", checked: false},
            {name: "Anime Openings", key: "OP", checked: false},
            {name: "Anime Endings", key: "ED", checked: true}
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    ...towaAAA,
    ...animeOpenings,
    ...animeEndings
];
