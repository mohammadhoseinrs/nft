import React,{useState} from 'react'

function Data() {

    const [DataTopPlayer, setDataTopPlayer] = useState([
        { "id": 2, "themeId": 1, "parentId": null, "fullName": "Bernd Leno", "position": "GK", "age": 30, "nationalityId1": 1, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 5, "teamId": 1, "leagueId": 1 },
        { "id": 3, "themeId": 0, "parentId": null, "fullName": "Arthur Okonkwo", "position": "GK", "age": 20, "nationalityId1": 1, "nationalityId2": null, "quizMarketValue": 1.00, "styleId": 0, "teamId": 1, "leagueId": 1 },
        { "id": 4, "themeId": 1, "parentId": null, "fullName": "Ben White", "position": "CB", "age": 24, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 40.00, "styleId": 4, "teamId": 1, "leagueId": 1 },
        { "id": 5, "themeId": 0, "parentId": null, "fullName": "Gabriel", "position": "CB", "age": 24, "nationalityId1": 3, "nationalityId2": null, "quizMarketValue": 30.00, "styleId": 6, "teamId": 1, "leagueId": 1 },
        { "id": 6, "themeId": 1, "parentId": null, "fullName": "Rob Holding", "position": "CB", "age": 26, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 6, "teamId": 1, "leagueId": 1 },
        { "id": 7, "themeId": 0, "parentId": null, "fullName": "Kieran Tierney", "position": "LB", "age": 24, "nationalityId1": 4, "nationalityId2": null, "quizMarketValue": 32.00, "styleId": 8, "teamId": 1, "leagueId": 1 },
        { "id": 8, "themeId": 0, "parentId": null, "fullName": "Nuno Tavares", "position": "LB", "age": 22, "nationalityId1": 5, "nationalityId2": null, "quizMarketValue": 13.00, "styleId": 9, "teamId": 1, "leagueId": 1 },
        { "id": 9, "themeId": 0, "parentId": null, "fullName": "Takehiro Tomiyasu", "position": "RB", "age": 23, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 25.00, "styleId": 10, "teamId": 1, "leagueId": 1 },
        { "id": 10, "themeId": 0, "parentId": null, "fullName": "Cédric Soares", "position": "RB", "age": 30, "nationalityId1": 5, "nationalityId2": null, "quizMarketValue": 5.00, "styleId": 1, "teamId": 1, "leagueId": 1 },
        { "id": 11, "themeId": 0, "parentId": null, "fullName": "Thomas Partey", "position": "DM", "age": 28, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 40.00, "styleId": 2, "teamId": 1, "leagueId": 1 },
        { "id": 12, "themeId": 0, "parentId": null, "fullName": "Granit Xhaka", "position": "DM", "age": 29, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 20.00, "styleId": 3, "teamId": 1, "leagueId": 1 },
        { "id": 13, "themeId": 0, "parentId": null, "fullName": "Mohamed Elneny", "position": "DM", "age": 29, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 9.00, "styleId": 4, "teamId": 1, "leagueId": 1 },
        { "id": 14, "themeId": 0, "parentId": null, "fullName": "Albert Sambi Lokonga", "position": "CM", "age": 22, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 16.00, "styleId": 5, "teamId": 1, "leagueId": 1 },
        { "id": 15, "themeId": 0, "parentId": null, "fullName": "Bukayo Saka", "position": "RM", "age": 20, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 65.00, "styleId": 6, "teamId": 1, "leagueId": 1 },
        { "id": 16, "themeId": 0, "parentId": null, "fullName": "Martin Ødegaard", "position": "AM", "age": 23, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 42.00, "styleId": 7, "teamId": 1, "leagueId": 1 },
        { "id": 17, "themeId": 0, "parentId": null, "fullName": "Emile Smith Rowe", "position": "AM", "age": 21, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 40.00, "styleId": 8, "teamId": 1, "leagueId": 1 },
        { "id": 18, "themeId": 0, "parentId": null, "fullName": "Gabriel Martinelli", "position": "LW", "age": 20, "nationalityId1": 3, "nationalityId2": null, "quizMarketValue": 38.00, "styleId": 9, "teamId": 1, "leagueId": 1 },
        { "id": 19, "themeId": 0, "parentId": null, "fullName": "Nicolas Pépé", "position": "RW", "age": 26, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 30.00, "styleId": 10, "teamId": 1, "leagueId": 1 },
        { "id": 20, "themeId": 0, "parentId": null, "fullName": "Alexandre Lacazette", "position": "CF", "age": 30, "nationalityId1": 6, "nationalityId2": null, "quizMarketValue": 20.00, "styleId": 1, "teamId": 1, "leagueId": 1 },
        { "id": 21, "themeId": 0, "parentId": null, "fullName": "Eddie Nketiah", "position": "CF", "age": 22, "nationalityId1": 2, "nationalityId2": null, "quizMarketValue": 10.00, "styleId": 2, "teamId": 1, "leagueId": 1 }]
    )
    return DataTopPlayer;
}


export default Data
