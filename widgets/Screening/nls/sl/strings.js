﻿///////////////////////////////////////////////////////////////////////////
// Copyright ï¿½ Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "_widgetLabel": "Monitoring",
  "geometryServicesNotFound": "Geometrijska storitev ni na voljo.",
  "unableToDrawBuffer": "Obrisa ni mogoče izrisati. Poskusite znova.",
  "invalidConfiguration": "Neveljavna konfiguracija.",
  "clearAOIButtonLabel": "Začni znova",
  "noGraphicsShapefile": "Naloženi shapefile ne vsebuje grafike.",
  "zoomToLocationTooltipText": "Približaj lokacijo",
  "noGraphicsToZoomMessage": "Ni najdenih grafik za povečavo.",
  "placenameWidget": {
    "placenameLabel": "Iskanje lokacije"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Izberite način risanja",
    "toggleSelectability": "Kliknite za preklop izbirnosti",
    "chooseLayerTitle": "Izberi med izberljivimi sloji",
    "selectAllLayersText": "Izberi vse",
    "layerSelectionWarningTooltip": "Za ustvarjanje interesnega območja (AOI) mora biti izbran vsaj en sloj",
    "selectToolLabel": "Izberi orodje"
  },
  "shapefileWidget": {
    "shapefileLabel": "Naložite stisnjeno shapefile",
    "uploadShapefileButtonText": "Naloži",
    "unableToUploadShapefileMessage": "Shapefile ni mogoče naložiti."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Določite začetno točko",
    "addButtonTitle": "Dodaj",
    "deleteButtonTitle": "Odstrani",
    "mapTooltipForStartPoint": "Kliknite na karto za določitev začetne točke",
    "mapTooltipForUpdateStartPoint": "Kliknite na karto za posodobitev začetne točke",
    "locateText": "Lociraj",
    "locateByMapClickText": "Izberi začetne koordinate",
    "enterBearingAndDistanceLabel": "Vnesite smerni kot in razdaljo od začetke točke",
    "bearingTitle": "Smerni kot",
    "distanceTitle": "Razdalja",
    "planSettingTooltip": "Nastavitve načrta",
    "invalidLatLongMessage": "Vnesite veljavne vrednosti."
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Razdalja obrisa (izbirno)",
    "bufferInputLabel": "Pokaži rezultate znotraj",
    "bufferDistanceLabel": "Razdalja obrisa",
    "bufferUnitLabel": "Enota obrisa",
    "bufferRangeMessage": "Razdalja obrisa je izven obsega,<br/> vnesite vrednost med 0 in ${distance}${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Smerni kot",
    "lengthLabel": "Dolžina",
    "addButtonTitle": "Dodaj",
    "deleteButtonTitle": "Odstrani",
    "deleteBearingAndLengthLabel": "Odstrani vrstico smernega kota in dolžine",
    "addButtonLabel": "Dodaj smerni kot in dolžino"
  },
  "planSettings": {
    "expandGridTooltipText": "Razširi mrežo",
    "collapseGridTooltipText": "Strni mrežo",
    "directionUnitLabelText": "Enota navodil za pot",
    "distanceUnitLabelText": "Razdalja in enote dolžine",
    "planSettingsComingSoonText": "Kmalu na voljo"
  },
  "newTraverse": {
    "invalidBearingMessage": "Neveljaven smerni kot.",
    "invalidLengthMessage": "Neveljavna dolžina.",
    "negativeLengthMessage": "Negativna dolžina"
  },
  "reportsTab": {
    "aoiAreaText": "Interesno območje (AOI)",
    "downloadButtonTooltip": "Prenesi",
    "printButtonTooltip": "Natisni",
    "uploadShapefileForAnalysisText": "Naložite shapefile za vključitev v analizo",
    "uploadShapefileForButtonText": "Prebrskaj",
    "downloadLabelText": "Izberi obliko:",
    "downloadBtnText": "Prenesi",
    "noDetailsAvailableText": "Ni najdenih rezultatov",
    "featureCountText": "Število",
    "featureAreaText": "Površina",
    "featureLengthText": "Dolžina",
    "attributeChooserTooltip": "Izberite atribute za prikaz",
    "csv": "CSV",
    "filegdb": "File Geodatabase",
    "shapefile": "Shapefile",
    "noFeaturesFound": "Za izbrano obliko datoteke rezultati niso najdeni",
    "selectReportFieldTitle": "Izberite polja",
    "noFieldsSelected": "Polja niso izbrana",
    "intersectingFeatureExceedsMsgOnCompletion": "Za enega ali več slojev je bilo doseženo maksimalno število zapisov.",
    "unableToAnalyzeText": "Doseženo je bilo maksimalno število zapisov, analiza ni mogoča.",
    "errorInPrintingReport": "Poročila ni mogoče natisniti. Preverite, ali so nastavitve poročila veljavne.",
    "aoiInformationTitle": "Informacija o interesnem območju (AOI)",
    "summaryReportTitle": "Povzetek",
    "notApplicableText": "Ni na voljo",
    "downloadReportConfirmTitle": "Potrdi prenos",
    "downloadReportConfirmMessage": "Ste prepričani, da želite prenesti?",
    "noDataText": "Ni podatkov",
    "createReplicaFailedMessage": "Prenos sledečih slojev <br/> ${layerNames} ni uspel",
    "extractDataTaskFailedMessage": "Prenos ni uspel",
    "printLayoutLabelText": "Postavitev",
    "printBtnText": "Natisni",
    "printDialogHint": "Opomba: Naslov poročila in komentarje je mogoče urejati v predogledu poročila.",
    "unableToDownloadFileGDBText": "File Geodatabase ni mogoče prenesti za interesno območje (AOI), ki vsebuje točkovne in linijske lokacije.",
    "unableToDownloadShapefileText": "Shapefile ni mogoče prenesti za interesno območje (AOI), ki vsebuje točkovne in linijske lokacije",
    "analysisAreaUnitLabelText": "Prikaži rezultate območja v :",
    "analysisLengthUnitLabelText": "Prikaži rezultate dolžine v :",
    "analysisUnitButtonTooltip": "Izberite enote za analizo",
    "analysisCloseBtnText": "Zapri",
    "areaSquareFeetUnit": "Kvadratni čevlji",
    "areaAcresUnit": "Akri",
    "areaSquareMetersUnit": "Kvadratni metri",
    "areaSquareKilometersUnit": "Kvadratni kilometri",
    "areaHectaresUnit": "Hektari",
    "areaSquareMilesUnit": "Kvadratne milje",
    "lengthFeetUnit": "Čevlji",
    "lengthMilesUnit": "Milje",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Kilometri",
    "hectaresAbbr": "hektarji",
    "squareMilesAbbr": "Kvadratne milje",
    "layerNotVisibleText": "Analiza ni mogoča. Sloj je izklopljen ali je zunaj merila razpona vidnosti.",
    "refreshBtnTooltip": "Osveži poročilo",
    "featureCSVAreaText": "Presečno območje",
    "featureCSVLengthText": "Presečna dolžina",
    "errorInFetchingPrintTask": "Napaka pri pridobivanju informacij o opravilu tiskanja. Poskusite znova.",
    "selectAllLabel": "Izberi vse",
    "errorInLoadingProjectionModule": "Pri nalaganju odvisnosti modula projekcije se je pojavila napaka. Poskusite ponovno prenesti datoteko.",
    "expandCollapseIconLabel": "Presečni geoobjekti",
    "intersectedFeatureLabel": "Podrobnosti presečnega geoobjekta",
    "valueAriaLabel": "Vrednost",
    "countAriaLabel": "Število",
    "layerNameWithFeatureCount": "Sloj ${layerName} s/z ${featureCount} presečnimi geoobjekti",
    "sortingSettingsLegend": "Nastavitve razvrščanja",
    "ascendingLabel": "Naraščajoče",
    "descendingLabel": "Padajoče",
    "sortFieldSelectLabel": "Izberite polje za razvrščanje",
    "errorLabel": "Prišlo je do začasne napake na strežniku in poizvedbe ni bilo mogoče dokončati.",
    "statisticsCountLabel": "Statistika: število",
    "statisticsTotalLengthLabel": "Statistika: skupna dolžina",
    "statisticsTotalAreaLabel": "Statistika: skupna površina",
    "timedOutErrorLabel": "Časovna omejitev strežnika je potekla",
    "sortHint": "Namig: izbrana polja bodo razvrščena samo, če je število geoobjektov/skupin večje od 1."
  }
});