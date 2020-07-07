const featureData = require('./models/feature-data.js');
const fs = require('fs').promises;

const insertFeatures = () => {
  featureData.forEach(feature => {
    const queryString = `
    INSERT INTO features (
      id_string,
      feature_title,
      feature_descr,
      icon_url
    )
    VALUES (
      '${feature.idString}',
      '${feature.featureTitle}',
      '${feature.featureDescr}',
      '${feature.iconUrl}'
    );
    `;
    const path = __dirname + `/seedScripts/features.sql`

    Promise.resolve(fs.appendFile(path, queryString))
    // .then(() => console.log('Data added!'))
    .catch( err => new Error(err));
  });
};

insertFeatures();

