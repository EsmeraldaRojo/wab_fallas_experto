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
  "_widgetLabel": "Controlo",
  "geometryServicesNotFound": "Serviço de geometria não disponível.",
  "unableToDrawBuffer": "Impossível desenhar o buffer. Por favor, tente novamente.",
  "invalidConfiguration": "Configuração inválida.",
  "clearAOIButtonLabel": "Começar Novamente",
  "noGraphicsShapefile": "A shapefilhe carregada não contém quaisquer gráficos",
  "zoomToLocationTooltipText": "Efectuar Zoom para a localização",
  "noGraphicsToZoomMessage": "Não foram encontrados quaisquer gráficos para ampliar.",
  "placenameWidget": {
    "placenameLabel": "Procurar uma localização"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Selecionar modo de desenho",
    "toggleSelectability": "Clicar para alternar possibilidade de selecionar",
    "chooseLayerTitle": "Escolher camadas selecionáveis",
    "selectAllLayersText": "Selecionar Tudo",
    "layerSelectionWarningTooltip": "Pelo menos uma camada deveria ser selecionada para criar AOI",
    "selectToolLabel": "Selecionar ferramenta"
  },
  "shapefileWidget": {
    "shapefileLabel": "Carregar uma shapefile compactada em ZIP",
    "uploadShapefileButtonText": "Carregar",
    "unableToUploadShapefileMessage": "Não é possível carregar Shapefile."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Definir um ponto de partida",
    "addButtonTitle": "Adicionar",
    "deleteButtonTitle": "Remover",
    "mapTooltipForStartPoint": "Clique no mapa para definir um ponto de partida",
    "mapTooltipForUpdateStartPoint": "Clique no mapa para atualizar o ponto de partida",
    "locateText": "Localizar",
    "locateByMapClickText": "Selecionar coordenadas iniciais",
    "enterBearingAndDistanceLabel": "Introduzir suporte e distância até ao ponto de partida",
    "bearingTitle": "Suporte",
    "distanceTitle": "Distância",
    "planSettingTooltip": "Planear Definições",
    "invalidLatLongMessage": "Por favor, introduza valores válidos."
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Distância de buffer (opcional)",
    "bufferInputLabel": "Exibir resultados dentro de",
    "bufferDistanceLabel": "Distância do buffer",
    "bufferUnitLabel": "Unidade de buffer",
    "bufferRangeMessage": "A distância do buffer está fora do intervalo,<br/> introduza um valor entre 0 e ${distance} ${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Suporte",
    "lengthLabel": "Comprimento",
    "addButtonTitle": "Adicionar",
    "deleteButtonTitle": "Remover",
    "deleteBearingAndLengthLabel": "Remover linha de rolamento e comprimento",
    "addButtonLabel": "Adicionar rolamento e comprimento"
  },
  "planSettings": {
    "expandGridTooltipText": "Expandir grelha",
    "collapseGridTooltipText": "Fechar grelha",
    "directionUnitLabelText": "Unidade de Direções",
    "distanceUnitLabelText": "Unidades de Distância e Comprimento",
    "planSettingsComingSoonText": "Brevemente"
  },
  "newTraverse": {
    "invalidBearingMessage": "Suporte Inválido.",
    "invalidLengthMessage": "Comprimento Inválido.",
    "negativeLengthMessage": "Comprimento Negativo"
  },
  "reportsTab": {
    "aoiAreaText": "Área AOI",
    "downloadButtonTooltip": "Descarregar",
    "printButtonTooltip": "Imprimir",
    "uploadShapefileForAnalysisText": "Carregar Shapefile para incluir na análise",
    "uploadShapefileForButtonText": "Procurar",
    "downloadLabelText": "Selecionar Formato:",
    "downloadBtnText": "Descarregar",
    "noDetailsAvailableText": "Não foram encontrados resultados",
    "featureCountText": "Contagem",
    "featureAreaText": "Área",
    "featureLengthText": "Comprimento",
    "attributeChooserTooltip": "Selecionar atributos a exibir",
    "csv": "CSV",
    "filegdb": "Geodatabase de Ficheiros",
    "shapefile": "Shapefile",
    "noFeaturesFound": "Não foram encontrados resultados para o formato de ficheiro selecionado",
    "selectReportFieldTitle": "Selecionar campos",
    "noFieldsSelected": "Sem campos selecionados",
    "intersectingFeatureExceedsMsgOnCompletion": "A contagem máxima de registo foi atingida para uma ou mais camadas.",
    "unableToAnalyzeText": "Não é possível analisar, a contagem máxima de registo foi atingida.",
    "errorInPrintingReport": "Não é possível imprimir o relatório. Por favor, verifique se as definições de relatório são válidas.",
    "aoiInformationTitle": "Informações de Área de Interesse (Area of Interest -- AOI)",
    "summaryReportTitle": "Resumo",
    "notApplicableText": "N/D",
    "downloadReportConfirmTitle": "Confirmar transferência",
    "downloadReportConfirmMessage": "Tem a certeza que pretende transferir?",
    "noDataText": "Nenhuns Dados",
    "createReplicaFailedMessage": "A operação de transferência falhou para a(s) seguinte(s) camada(s) <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "A operação de transferência falhou.",
    "printLayoutLabelText": "Layout",
    "printBtnText": "Imprimir",
    "printDialogHint": "Nota : O título e os comentários do relatório podem ser editados na pré-visualização do relatório.",
    "unableToDownloadFileGDBText": "Não é possível transferir um ficheiro geodatabase para uma AOI que contenha localizações de pontos ou de linhas.",
    "unableToDownloadShapefileText": "Não é possível transferir Shapefiles para uma AOI que contenha localizações de ponto ou de linhas.",
    "analysisAreaUnitLabelText": "Exibir resultados da área em:",
    "analysisLengthUnitLabelText": "Mostrar resultados de comprimento em:",
    "analysisUnitButtonTooltip": "Selecionar unidades para análise",
    "analysisCloseBtnText": "Fechar",
    "areaSquareFeetUnit": "Pés Quadrados",
    "areaAcresUnit": "Acres",
    "areaSquareMetersUnit": "Metros Quadrados",
    "areaSquareKilometersUnit": "Quilómetros Quadrados",
    "areaHectaresUnit": "Hectares",
    "areaSquareMilesUnit": "Milhas Quadradas",
    "lengthFeetUnit": "Pés",
    "lengthMilesUnit": "Milhas",
    "lengthMetersUnit": "Metros",
    "lengthKilometersUnit": "Quilómetros",
    "hectaresAbbr": "hectares",
    "squareMilesAbbr": "Milhas Quadradas",
    "layerNotVisibleText": "Não é possível analisar. A camada encontra-se desativada ou está fora do intervalo de visibilidade da escala.",
    "refreshBtnTooltip": "Atualizar relatório",
    "featureCSVAreaText": "Área de Interseção",
    "featureCSVLengthText": "Comprimento de Interseção",
    "errorInFetchingPrintTask": "Erro ao obter informações de tarefa de impressão. Por favor, tente novamente",
    "selectAllLabel": "Selecionar Tudo",
    "errorInLoadingProjectionModule": "Erro ao carregar as dependências do módulo de projeção. Tente transferir o ficheiro novamente.",
    "expandCollapseIconLabel": "Elementos de interseção",
    "intersectedFeatureLabel": "Detalhe do elemento de interseção",
    "valueAriaLabel": "Valor",
    "countAriaLabel": "Contagem",
    "layerNameWithFeatureCount": "${layerName} camada com ${featureCount} elementos de interseção",
    "sortingSettingsLegend": "Ordenar Definições",
    "ascendingLabel": "Ascendente",
    "descendingLabel": "Decrescente",
    "sortFieldSelectLabel": "Selecionar campo de ordenação",
    "errorLabel": "O servidor encontrou um erro temporário e não pôde concluir a consulta.",
    "statisticsCountLabel": "Estatísticas: Contagem",
    "statisticsTotalLengthLabel": "Estatísticas: Comprimento Total",
    "statisticsTotalAreaLabel": "Estatísticas: Área Total",
    "timedOutErrorLabel": "O servidor expirou",
    "sortHint": "Sugestão: os campos selecionados são ordenados apenas quando o número de elementos/grupos é superior a 1."
  }
});