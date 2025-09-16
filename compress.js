import fs from "fs";
import path from "path";
import lzString from "lz-string";
import { DateTime } from "luxon";

const { compressToBase64 } = lzString;

const input_dir = "index";
const output_dir = "dist";

// ensure output folder exists
if (!fs.existsSync(output_dir)) {
  fs.mkdirSync(output_dir);
}

const consolidated_json = path.join(output_dir, "data.json");
const consolidated_compressed = path.join(output_dir, "data.lz");
const consolidated_compressed_json = path.join(output_dir, "data_compressed.json");

// read input JSON files (ignore dist/)
const files = fs
  .readdirSync(input_dir)
  .filter(
    file =>
      file.endsWith(".json") &&
      fs.lstatSync(path.join(input_dir, file)).isFile()
  );

const consolidated = {};
for (const file of files) {
  const name = path.basename(file, ".json");
  const json_content = JSON.parse(
    fs.readFileSync(path.join(input_dir, file), "utf8")
  );
  consolidated[name] = json_content;
}

// timestamps
const now = DateTime.now().setZone("Asia/Seoul");
const generated_at_iso = now.toISO({
  includeOffset: true,
  suppressMilliseconds: false,
});
const generated_at_millis = now.toMillis();

// wrap final object
const wrapped = {
  generated_at_iso,
  generated_at_millis,
  data: consolidated,
};

// write consolidated json
fs.writeFileSync(consolidated_json, JSON.stringify(wrapped, null, 2), "utf8");

// compress and write .lz
const compressed = compressToBase64(JSON.stringify(wrapped));
fs.writeFileSync(consolidated_compressed, compressed, "utf8");

// wrap compressed in json and write
const compressed_wrapped = { data: compressed };
fs.writeFileSync(
  consolidated_compressed_json,
  JSON.stringify(compressed_wrapped, null, 2),
  "utf8"
);

console.log(`Created:
- ${consolidated_json}
- ${consolidated_compressed}
- ${consolidated_compressed_json}`);
