import fs from 'node:fs';
import path from 'node:path';

const manifest = path.join('android', 'app', 'src', 'main', 'AndroidManifest.xml');
if (!fs.existsSync(manifest)) {
  console.error(`AndroidManifest.xml introuvable : ${manifest}`);
  process.exit(1);
}
let xml = fs.readFileSync(manifest, 'utf8');
const permissions = [
  '    <uses-permission android:name="android.permission.CAMERA" />',
  '    <uses-feature android:name="android.hardware.camera" android:required="false" />',
  '    <uses-feature android:name="android.hardware.camera.autofocus" android:required="false" />'
];
for (const line of permissions) {
  const name = line.match(/android:name="([^"]+)"/)[1];
  if (!xml.includes(`android:name="${name}"`)) {
    xml = xml.replace(/<application\b/, `${line}\n    <application`);
  }
}
fs.writeFileSync(manifest, xml);
console.log('Permissions caméra ajoutées/vérifiées dans AndroidManifest.xml');
