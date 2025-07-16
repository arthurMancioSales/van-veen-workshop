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
const eslintrcPath = path.join(".eslintrc.json");

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

// Lê e modifica o .eslintrc.json
const eslintrc = JSON.parse(fs.readFileSync(eslintrcPath, "utf8"));
// Adicione ou modifique regras conforme necessário
const eslintRules = eslintrc.overrides[0].rules;

if (!eslintRules) {
  console.error("Regras do ESLint não encontradas no .eslintrc.json");
  process.exit(1);
}

const updatedZones = [
  ...eslintRules["import/no-restricted-paths"][1].zones,
  {
    target: `./src/features/${featureName}`,
    from: `./src/features`,
    except: [`./${featureName}`],
  },
];

eslintRules["import/no-restricted-paths"][1].zones = updatedZones;

eslintrc.overrides[0].rules = eslintRules;

// Escreve as modificações de volta no .eslintrc.json
fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrc, null, 2), "utf8");

console.log("Modificações concluídas com sucesso.");
