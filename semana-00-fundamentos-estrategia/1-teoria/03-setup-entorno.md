# 03 - Configuracion del entorno de desarrollo

## Objetivo

Dejar instaladas y verificadas las herramientas necesarias: Node.js, Expo, VS Code, Git y GitHub.

## 1. Node.js y npm

1. Descargar Node.js en su version LTS desde https://nodejs.org e instalar.
2. Verificar la instalacion en una terminal:

```bash
node -v
npm -v
```

Ambos comandos deben responder con un numero de version.

## 2. Crear el primer proyecto con Expo

Expo se ejecuta con `npx` y no requiere instalacion global.

```bash
npx create-expo-app@latest HolaMundo --template blank
cd HolaMundo
npx expo start
```

## 3. Ver la app en el dispositivo (Expo Go)

1. Instalar la aplicacion Expo Go desde Play Store (Android) o App Store (iOS).
2. Con `npx expo start` abierto, escanear el codigo QR desde Expo Go.
3. Verificar que el texto de la pantalla corresponde al proyecto.

Nota: el telefono y la computadora deben estar en la misma red Wi-Fi.

Opciones alternativas:

- Emulador Android: presionar `a` con Android Studio instalado.
- Simulador iOS: presionar `i` en macOS con Xcode instalado.
- Navegador (vista web): `npx expo start --web`.

## 4. VS Code

1. Descargar e instalar desde https://code.visualstudio.com.
2. Instalar las extensiones recomendadas:

| Extension | Uso |
|---|---|
| ESLint | Analisis de calidad del codigo |
| Prettier | Formato automatico de codigo |
| React Native Tools | Soporte para desarrollo React Native |
| ES7+ React/Redux/React-Native snippets | Atajos de codigo |

## 5. Git y GitHub

Configurar la identidad de Git:

```bash
git config --global user.name  "Tu Nombre"
git config --global user.email "tu@correo.com"
```

Publicar el repositorio:

1. Crear un repositorio nuevo en https://github.com.
2. En la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Estructura base del bootcamp"
git branch -M main
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

## 6. Problemas frecuentes

| Sintoma | Causa probable | Solucion |
|---|---|---|
| El QR no aparece | `npx expo start` cerrado | Volver a ejecutar el comando |
| El telefono no conecta | Redes Wi-Fi distintas | Conectar ambos a la misma red o usar un tunnel (`npx expo start --tunnel`) |
| Error de version de Node | Version muy antigua | Instalar la LTS desde nodejs.org |
| Puerto ocupado | Otro proceso usa el puerto 8081 | Cerrar el proceso o cambiar de puerto |

## 7. Verificacion final

- [ ] `node -v` y `npm -v` responden con una version.
- [ ] El proyecto "Hola Mundo" se muestra en el telefono con Expo Go.
- [ ] La estructura base esta publicada en GitHub en la rama `main`.
