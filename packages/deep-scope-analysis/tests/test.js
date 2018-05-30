const acorn = require("acorn");
const fs = require('fs');
const path = require('path');
const { ModuleAnalyser } = require('../lib/analyser');
const chai = require('chai');
const chaiJestDiff = require('chai-jest-diff').default;
 
chai.use(chaiJestDiff());

const USED_EXPORTS_FILENAME = 'usedExports.json';
const EXPECTED_FILENAME = 'expect.json';
const INPUT_FILENAME = 'input.js';

describe("test fixtures", function() {
  const fixturesPath = path.join(__dirname, 'fixtures');
  const inputFiles = fs.readdirSync(fixturesPath);
  inputFiles.forEach(inputDirName => {
    const inputFilename = path.join(fixturesPath, inputDirName, INPUT_FILENAME);
    const inputFileContent = fs.readFileSync(inputFilename, 'utf8');
    const ast = acorn.parse(inputFileContent, {
      ranges: true,
      locations: true,
      ecmaVersion: 2017,
      sourceType: "module",
    });
    const analyser = new ModuleAnalyser(inputFilename, null);
    analyser.analyze(ast);

    const caseDir = path.join(fixturesPath, inputDirName, 'cases');
    const casesFiles = fs.readdirSync(caseDir);
    casesFiles.forEach(caseDirName => {
      const casePath = path.join(caseDir, caseDirName);
      const usedExportsJsonFilename = path.join(casePath, USED_EXPORTS_FILENAME);
      const expectJsonFilename = path.join(casePath, EXPECTED_FILENAME);

      it(`${inputDirName}/${caseDirName}`, function () {
        const usedExportsFile = fs.readFileSync(usedExportsJsonFilename, 'utf8');
        const usedExports = JSON.parse(usedExportsFile);
        const data = analyser.generateExportInfo(usedExports);
        if (fs.existsSync(expectJsonFilename)) {
          const expectData = JSON.parse(fs.readFileSync(expectJsonFilename, 'utf8'));
          chai.expect(data).to.deep.equal(expectData);
        } else {
          fs.writeFileSync(expectJsonFilename, JSON.stringify(data, null, 2), 'utf8');
        }
      })
    })
  })
})
