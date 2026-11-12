POSE CO SONELGAZ — VERSION 3 — PAQUET GITHUB APK
================================================

CE PAQUET
- www/index.html : application Pose CO V3 issue de la V2 optimisée.
- www/manifest.webmanifest, www/sw.js et www/icons : éléments PWA.
- capacitor.config.json : configuration Android Capacitor.
- .github/workflows/build-apk.yml : compilation automatique de l'APK avec GitHub Actions.
- scripts/patch-android.mjs : ajoute/vérifie les permissions Android de la caméra.

COMMENT COMPILER DEPUIS UN TÉLÉPHONE ANDROID (SANS TERMINAL)
1. Ouvrir votre dépôt GitHub Pose-CO_Sonelgaz.
2. Faire une sauvegarde de l'ancienne version avant toute modification.
3. Ajouter/remplacer les fichiers de ce paquet à la racine du dépôt. Il faut conserver exactement les dossiers .github/workflows, scripts et www.
4. Vérifier que le fichier .github/workflows/build-apk.yml est bien présent.
5. Dans GitHub, ouvrir l'onglet Actions.
6. Choisir « Build Pose CO V3 APK » puis « Run workflow ».
7. Attendre la fin avec une coche verte.
8. Ouvrir l'exécution terminée, descendre à Artifacts et télécharger « PoseCO-V3-debug-apk ».
9. Décompresser le ZIP téléchargé : il contient app-debug.apk.

SCANNER / CAMERA
- L'autorisation CAMERA Android est ajoutée au manifeste lors de la compilation.
- Au premier lancement, accepter la demande d'autorisation caméra Android.
- Tester la caméra arrière, QR/Data Matrix de référence, puis code-barres des détecteurs 1 et 2.
- Le test réel doit être fait sur téléphone. La compilation réussie ne garantit pas à elle seule que tous les modèles de codes seront lus.

IMPORTANT — SIGNATURE ET DONNÉES
Cette workflow produit un APK DEBUG pour test. Si une ancienne application Pose CO est déjà installée avec une signature RELEASE, Android peut refuser l'installation par-dessus à cause de la différence de signature. Ne désinstallez pas l'ancienne application avant d'avoir exporté/sauvegardé ses données.
Pour une mise à jour RELEASE conservant l'installation et les données, il faudra configurer la clé originale pose-co-release.p12 dans GitHub Secrets et adapter la signature Gradle. Ne partagez jamais le fichier de clé ni son mot de passe dans le dépôt.

NETLIFY / PWA
Ce dépôt peut aussi être publié sur Netlify en choisissant le dossier « www » comme répertoire de publication. La compilation APK GitHub et l'hébergement Netlify sont deux opérations séparées.
