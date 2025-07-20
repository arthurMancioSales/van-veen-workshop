const fs = require("fs");
const path = require("path");
const minimist = require("minimist");

// Analisa os argumentos da linha de comando
const args = minimist(process.argv.slice(2));
const featureName = args.featureName;

if (!featureName) {
  console.error(
    "Nome da feature não informado. Utilize npm run new-feature1 -- --featureName=nomeDaFeature",
  );
  process.exit(1);
}

// Caminho para os arquivos
const eslintrcPath = path.join(".eslint.config.js");

// Cria as pastas necessárias
const newFolders = [
  `./src/features/${featureName}`,
  `./src/features/${featureName}/api`,
  `./src/features/${featureName}/assets`,
  `./src/features/${featureName}/components`,
  `./src/features/${featureName}/hooks`,
  `./src/features/${featureName}/types`,
  `./src/features/${featureName}/utils`,
  `./src/features/${featureName}/validation`,
];
newFolders.forEach((folder) => {
  const fullPath = path.join(folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Pasta criada: ${fullPath}`);
  }
});

console.log("Modificações concluídas com sucesso.");
