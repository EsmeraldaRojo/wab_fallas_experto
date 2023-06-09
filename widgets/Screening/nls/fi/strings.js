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
  "_widgetLabel": "Seulonta",
  "geometryServicesNotFound": "Geometriapalvelu ei ole käytettävissä.",
  "unableToDrawBuffer": "Puskuria ei voi piirtää. Yritä uudelleen.",
  "invalidConfiguration": "Virheellinen kokoonpano.",
  "clearAOIButtonLabel": "Aloita alusta",
  "noGraphicsShapefile": "Ladattu Shapefile-tiedosto ei sisällä grafiikkaa.",
  "zoomToLocationTooltipText": "Tarkenna sijaintiin",
  "noGraphicsToZoomMessage": "Grafiikkaa, johon tarkentaa, ei löytynyt.",
  "placenameWidget": {
    "placenameLabel": "Etsi sijaintia"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Valitse piirustustapa",
    "toggleSelectability": "Vaihda valittavuutta napsauttamalla",
    "chooseLayerTitle": "Valitse valittavissa olevat karttatasot",
    "selectAllLayersText": "Valitse kaikki",
    "layerSelectionWarningTooltip": "AOI:n luonti edellyttää vähintään yhden karttatason valitaan",
    "selectToolLabel": "Valitse työkalu"
  },
  "shapefileWidget": {
    "shapefileLabel": "Lataa pakattu Shapefile-tiedosto",
    "uploadShapefileButtonText": "Lähetä",
    "unableToUploadShapefileMessage": "Shapefile-tiedoston lataus ei onnistu."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Määritä aloituspiste",
    "addButtonTitle": "Lisää",
    "deleteButtonTitle": "Poista",
    "mapTooltipForStartPoint": "Määritä aloituspiste napsauttamalla karttaa",
    "mapTooltipForUpdateStartPoint": "Päivitä aloituspiste napsauttamalla karttaa",
    "locateText": "Paikanna",
    "locateByMapClickText": "Valitse alkukoordinaatit",
    "enterBearingAndDistanceLabel": "Määritä suuntima ja etäisyys aloituspisteestä",
    "bearingTitle": "Suuntima",
    "distanceTitle": "Etäisyys",
    "planSettingTooltip": "Suunnitelman asetukset",
    "invalidLatLongMessage": "Anna kelvolliset arvot."
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Puskurin etäisyys (valinnainen)",
    "bufferInputLabel": "Näytä tulokset alueelta",
    "bufferDistanceLabel": "Puskurin etäisyys",
    "bufferUnitLabel": "Puskuriyksikkö",
    "bufferRangeMessage": "Puskurin etäisyys on alueen ulkopuolella.<br/> Anna arvo, joka on välillä 0–${distance} ${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Suuntima",
    "lengthLabel": "Pituus",
    "addButtonTitle": "Lisää",
    "deleteButtonTitle": "Poista",
    "deleteBearingAndLengthLabel": "Poista suuntima- ja pituusrivi",
    "addButtonLabel": "Lisää suuntima ja pituus"
  },
  "planSettings": {
    "expandGridTooltipText": "Laajenna ruudukko",
    "collapseGridTooltipText": "Tiivistä ruudukko",
    "directionUnitLabelText": "Suuntayksikkö",
    "distanceUnitLabelText": "Etäisyys- ja pituusyksiköt",
    "planSettingsComingSoonText": "Tulossa pian"
  },
  "newTraverse": {
    "invalidBearingMessage": "Virheellinen suuntima.",
    "invalidLengthMessage": "Virheellinen pituus.",
    "negativeLengthMessage": "Negatiivinen pituus"
  },
  "reportsTab": {
    "aoiAreaText": "AOI-alue",
    "downloadButtonTooltip": "Lataa",
    "printButtonTooltip": "Tulosta",
    "uploadShapefileForAnalysisText": "Lataa analyysiin sisällytettävä Shapefile-tiedosto",
    "uploadShapefileForButtonText": "Selaa",
    "downloadLabelText": "Valitse muoto:",
    "downloadBtnText": "Lataa",
    "noDetailsAvailableText": "Tuloksia ei löytynyt",
    "featureCountText": "Lukumäärä",
    "featureAreaText": "Alue",
    "featureLengthText": "Pituus",
    "attributeChooserTooltip": "Valitse näytettävät ominaisuustiedot",
    "csv": "CSV",
    "filegdb": "File Geodatabase",
    "shapefile": "Shapefile",
    "noFeaturesFound": "Valitulle tiedostomuodolle ei löytynyt tuloksia",
    "selectReportFieldTitle": "Valitse kentät",
    "noFieldsSelected": "Yhtään kenttää ei ole valittu",
    "intersectingFeatureExceedsMsgOnCompletion": "Ainakin yhden karttatason tietueiden enimmäismäärä on saavutettu.",
    "unableToAnalyzeText": "Analysointi ei onnistu. Tietueiden enimmäismäärä on saavutettu.",
    "errorInPrintingReport": "Raporttia ei voi tulostaa. Tarkista, ovatko raportin asetukset kelvolliset.",
    "aoiInformationTitle": "Kiinnostusalueen (AOI) tiedot",
    "summaryReportTitle": "Yhteenveto",
    "notApplicableText": "Ei mitään",
    "downloadReportConfirmTitle": "Vahvista lataus",
    "downloadReportConfirmMessage": "Haluatko varmasti ladata?",
    "noDataText": "Ei tietoja",
    "createReplicaFailedMessage": "Lataustoiminto epäonnistui seuraavien karttatasojen osalta: <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "Lataustoiminto epäonnistui.",
    "printLayoutLabelText": "Asettelu",
    "printBtnText": "Tulosta",
    "printDialogHint": "Huomautus: raportin otsikkoa ja kommentteja voi muokata raportin esikatselunäkymässä.",
    "unableToDownloadFileGDBText": "File Geodatabasea ei voi ladata sellaista kiinnostusaluetta varten, joka sisältää piste- tai viivasijainteja",
    "unableToDownloadShapefileText": "Shapefile-tiedostoa ei voi ladata sellaista kiinnostusaluetta varten, joka sisältää piste- tai viivasijainteja",
    "analysisAreaUnitLabelText": "Näytä alueen tulokset yksikössä:",
    "analysisLengthUnitLabelText": "Näytä pituuden tulokset yksikössä:",
    "analysisUnitButtonTooltip": "Valitse analyysin yksiköt",
    "analysisCloseBtnText": "Sulje",
    "areaSquareFeetUnit": "Neliöjalkaa",
    "areaAcresUnit": "Eekkeriä",
    "areaSquareMetersUnit": "Neliömetriä",
    "areaSquareKilometersUnit": "Neliökilometriä",
    "areaHectaresUnit": "Hehtaaria",
    "areaSquareMilesUnit": "Neliömailia",
    "lengthFeetUnit": "Jalkaa",
    "lengthMilesUnit": "Mailia",
    "lengthMetersUnit": "Metriä",
    "lengthKilometersUnit": "Kilometriä",
    "hectaresAbbr": "hehtaaria",
    "squareMilesAbbr": "Neliömailia",
    "layerNotVisibleText": "Analysointi ei onnistu. Karttataso on poistettu käytöstä tai se ei ole mittakaavan näkyvyysalueella.",
    "refreshBtnTooltip": "Päivitä raportti",
    "featureCSVAreaText": "Leikkaava alue",
    "featureCSVLengthText": "Leikkaava pituus",
    "errorInFetchingPrintTask": "Virhe noudettaessa tulostustehtävän tietoja. Yritä uudelleen.",
    "selectAllLabel": "Valitse kaikki",
    "errorInLoadingProjectionModule": "Virhe ladattaessa projektiomoduulin riippuvuuksia. Yritä ladata tiedosto uudelleen.",
    "expandCollapseIconLabel": "Leikatut kohteet",
    "intersectedFeatureLabel": "Leikatun kohteen tiedot",
    "valueAriaLabel": "Arvo",
    "countAriaLabel": "Lukumäärä",
    "layerNameWithFeatureCount": "Karttataso ${layerName}, jossa on ${featureCount} leikkaavaa kohdetta",
    "sortingSettingsLegend": "Lajitteluasetukset",
    "ascendingLabel": "Nouseva",
    "descendingLabel": "Laskeva",
    "sortFieldSelectLabel": "Valitse lajittelukenttä",
    "errorLabel": "Palvelimella havaittiin tilapäinen virhe, eikä kyselyä voida suorittaa.",
    "statisticsCountLabel": "Tilastotiedot: Määrä",
    "statisticsTotalLengthLabel": "Tilastotiedot: Kokonaispituus",
    "statisticsTotalAreaLabel": "Tilastotiedot: Kokonaisalue",
    "timedOutErrorLabel": "Palvelimen aikakatkaisu",
    "sortHint": "Vihje: valitut kentät lajitellaan vain, jos kohteiden/ryhmien lukumäärä on suurempi kuin 1."
  }
});