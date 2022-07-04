import React from "react";

function Flag(a) {
    try {
        if (a == null) return null;
        let flagInfo = [{ "id": 1, "name": "Albania" }, { "id": 2, "name": "Algeria" }, { "id": 3, "name": "Angola" }, { "id": 4, "name": "Argentina" }, { "id": 5, "name": "Armenia" }, { "id": 6, "name": "Australia" }, { "id": 7, "name": "Austria" }, { "id": 8, "name": "Belgium" }, { "id": 9, "name": "Belium" }, { "id": 10, "name": "Bosnia-Herzegovina" }, { "id": 11, "name": "Brazil" }, { "id": 12, "name": "Burkina-Faso" }, { "id": 13, "name": "Cameroon" }, { "id": 14, "name": "Canada" }, { "id": 15, "name": "Chile" }, { "id": 16, "name": "Colombia" }, { "id": 17, "name": "Costa-Rica" }, { "id": 18, "name": "Cote-d'Ivoire" }, { "id": 19, "name": "Croatia" }, { "id": 20, "name": "Cyprus" }, { "id": 21, "name": "Czech-Republic" }, { "id": 22, "name": "Denmark" }, { "id": 23, "name": "Dominican-Republic" }, { "id": 24, "name": "DR-congo" }, { "id": 25, "name": "Ecuador" }, { "id": 26, "name": "Egypt" }, { "id": 27, "name": "England" }, { "id": 28, "name": "Finland" }, { "id": 29, "name": "France" }, { "id": 30, "name": "Germany" }, { "id": 31, "name": "Ghana" }, { "id": 32, "name": "Greece" }, { "id": 33, "name": "Grenada" }, { "id": 34, "name": "Guinea" }, { "id": 35, "name": "Hungary" }, { "id": 36, "name": "Iceland" }, { "id": 37, "name": "Iran" }, { "id": 38, "name": "Ireland" }, { "id": 39, "name": "Israel" }, { "id": 40, "name": "Italy" }, { "id": 41, "name": "Jamaica" }, { "id": 42, "name": "Japan" }, { "id": 43, "name": "Korea-South" }, { "id": 44, "name": "Kosovo" }, { "id": 45, "name": "Luxembourg" }, { "id": 46, "name": "Mali" }, { "id": 47, "name": "Mexico" }, { "id": 48, "name": "Montenegro" }, { "id": 49, "name": "Morocco" }, { "id": 50, "name": "Netherlands" }, { "id": 51, "name": "New-Zealand" }, { "id": 52, "name": "Nigeria" }, { "id": 53, "name": "Norway" }, { "id": 54, "name": "Panama" }, { "id": 55, "name": "Paraguey" }, { "id": 56, "name": "Philippines" }, { "id": 57, "name": "Poland" }, { "id": 58, "name": "Portugal" }, { "id": 59, "name": "republic-of-macedonia" }, { "id": 60, "name": "Romania" }, { "id": 61, "name": "Russia" }, { "id": 62, "name": "Scotland" }, { "id": 63, "name": "Senegal" }, { "id": 64, "name": "Serbia" }, { "id": 65, "name": "Slovakia" }, { "id": 66, "name": "Slovenia" }, { "id": 67, "name": "Spain" }, { "id": 68, "name": "Suriname" }, { "id": 69, "name": "Sweden" }, { "id": 70, "name": "Switzerland" }, { "id": 71, "name": "Gambia" }, { "id": 72, "name": "Togo" }, { "id": 73, "name": "Tunisia" }, { "id": 74, "name": "Turkey" }, { "id": 75, "name": "Ukraine" }, { "id": 76, "name": "United-States" }, { "id": 77, "name": "Uruguay" }, { "id": 78, "name": "Uzbekistan" }, { "id": 79, "name": "Venezuela" }, { "id": 80, "name": "Wales" }, { "id": 81, "name": "Zambia" }, { "id": 82, "name": "Zimbabwe" }];
        let valueReturn = flagInfo.find(item => { return item.id === parseFloat(a) }).name;
        return valueReturn;
    }
    catch {

        if (a == null) return null;
        // Log Erorr :::

    }
}

export default Flag;