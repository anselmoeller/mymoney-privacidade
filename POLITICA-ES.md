# Política de privacidad — Paz Financiera

**Última actualización:** 15 de noviembre de 2026  
**Contacto de privacidad:** moneyproapp@gmail.com  
**Cómo Paz Financiera protege tus datos locales y utiliza servicios externos.**

## 1. Aplicación, responsable y finalidad

Paz Financiera (antes MyMoney), desarrollada por Anselmo Eller, se distribuye en Google Play con el paquete Android com.anspro.mymoney.app. Sirve para organizar gastos, ingresos, cuentas, tareas, notas, audios, diario y metas de ahorro. No accede a cuentas bancarias ni mueve dinero y no exige una cuenta en línea con el desarrollador.

Los registros que introduces permiten calcular importes, mostrar gráficos, elaborar previsiones y programar recordatorios. La app no envía al desarrollador el contenido de tus datos financieros o personales ni lo utiliza para dirigir anuncios.

## 2. Datos y almacenamiento local

Según las funciones utilizadas, el dispositivo guarda importes, fechas, estados de pago, descripciones, tareas, notas, diario, grabaciones, texto reconocido en imágenes, metas de ahorro y preferencias de idioma, país, moneda y acceso. Las bases de datos estructuradas se cifran localmente mediante AES-256-GCM y las claves se mantienen en el almacenamiento seguro del sistema operativo.

Un PIN opcional de 8 a 16 dígitos y la biometría en dispositivos compatibles pueden limitar el acceso; la app no recoge plantillas biométricas. Los audios se conservan en el espacio privado de la aplicación, pero no se cifran automáticamente como las bases de datos estructuradas. Ninguna protección elimina todos los riesgos.

## 3. Permisos, voz, imágenes y notificaciones

El micrófono, la cámara y las imágenes seleccionadas se utilizan cuando eliges grabar, dictar o digitalizar texto. El reconocimiento de texto (OCR) se realiza en el dispositivo; la imagen original no se guarda automáticamente en la nota y se intenta eliminar los archivos temporales. La transcripción de grabaciones existentes, si es compatible, requiere reconocimiento local. El dictado en directo puede utilizar servicios de voz del sistema o de terceros que, según la configuración, procesen audio por Internet.

Con tu autorización, se programan avisos locales de cuentas, ingresos, tareas y notas. Los títulos o vencimientos pueden aparecer en la pantalla bloqueada. Puedes rechazar o revocar permisos, aunque las funciones correspondientes podrían dejar de estar disponibles.

La pantalla Permisos y consentimientos ofrece explicaciones y acciones individuales para cámara, micrófono, notificaciones, alarmas exactas, biometría, selección de fotos y archivos, preferencias de anuncios y los tres servicios Firebase. No existe la opción global «Permitir todo». Cuando Android controla un permiso, la aplicación muestra la solicitud del sistema o abre los ajustes del dispositivo; la selección de archivos o carpetas se solicita solo cuando es necesaria. Algunas funciones pueden no estar disponibles sin autorización, pero las funciones financieras básicas siguen disponibles.

## 4. Copias de seguridad y exportaciones

Las copias portátiles de datos usan AES-256-GCM y scrypt. Las copias manuales están protegidas por PIN. Con Pro puedes activar copias automáticas sin conexión en una carpeta local elegida por ti, utilizando una clave independiente de recuperación de 16 dígitos. El desarrollador no recibe esa clave ni puede recuperar archivos sin la credencial correcta.

Las copias automáticas se intentan cuando la app está abierta o vuelve al primer plano; no están garantizadas cuando se cierra. Las copias de datos no incluyen audio automáticamente; este puede exportarse en paquetes cifrados separados. Los TXT del diario y audios compartidos directamente pueden no estar cifrados. Tú eliges dónde guardar y borrar las exportaciones. No existe copia ni sincronización automática en la nube ofrecida por el desarrollador.

## 5. Publicidad y consentimiento

La versión gratuita puede mostrar anuncios de Google AdMob. Su SDK puede tratar direcciones IP, identificadores del dispositivo o publicitarios, interacciones con anuncios y diagnósticos para mostrar y medir publicidad, proteger la seguridad y prevenir fraudes. Los anuncios se solicitan como no personalizados, pero aún puede existir tratamiento técnico.

Google User Messaging Platform (UMP) gestiona las opciones de privacidad y consentimiento cuando la ley lo exige y, cuando corresponda, permite revisarlas en Configuración. La falta del consentimiento necesario para anuncios no bloquea las funciones personales y financieras. Los usuarios Pro verificados no ven banners.

### Firebase Analytics, Crashlytics y Performance Monitoring — opcionales

En la versión oficial de Android, Paz Financiera ofrece tres servicios separados de Google Firebase: Analytics (estadísticas de uso), Crashlytics (diagnóstico de fallos) y Performance Monitoring (mediciones de rendimiento). Cada recopilación se puede aceptar o rechazar por separado en Configuración → Tus datos y privacidad → Permisos y consentimientos. La recopilación de estos tres servicios está desactivada por defecto y solo debe habilitarse tras la elección correspondiente. En el primer uso o después de actualizar, un aviso puede invitar a revisar las opciones; abrir la pantalla o elegir «Ahora no» no implica consentimiento. Estas decisiones son independientes de las preferencias publicitarias de AdMob.

Con Analytics autorizado, Google puede recibir eventos de uso, como primeras aperturas, sesiones y pantallas visitadas, versión de la aplicación, modelo y sistema del dispositivo, un identificador de instancia y, según el SDK y su configuración, identificadores publicitarios y ubicación aproximada inferida de la dirección IP. Se usan para conocer el uso y mejorar la experiencia. No se incluyen intencionadamente importes financieros, descripciones de cuentas, notas ni otros contenidos introducidos por el usuario.

Con Crashlytics autorizado, Google puede recibir informes de bloqueos y errores no fatales, trazas técnicas de ejecución, identificadores de instalación y datos de la aplicación, del sistema y del dispositivo para investigar problemas de estabilidad. Los diagnósticos personalizados utilizan códigos técnicos predefinidos. La aplicación no incorpora intencionadamente PIN, saldos, textos de notas, audios ni contenido de documentos a esos informes.

Con Performance Monitoring autorizado, Google puede recibir tiempos de inicio, representación de pantallas y operaciones supervisadas, métricas de rendimiento y red (por ejemplo, duración de solicitudes y direcciones de servicios, sin parámetros de URL ni contenido de las solicitudes), así como datos técnicos del dispositivo, versión de la aplicación, identificadores de instalación y ubicación aproximada. Las mediciones personalizadas emplean nombres técnicos fijos y no incluyen contenidos financieros ni personales.

Rechazar o retirar cualquiera de estos consentimientos no impide utilizar las funciones financieras, notas, tareas, copias locales o acceso Pro. La revocación interrumpe la recopilación futura del servicio correspondiente, pero no elimina automáticamente los datos recibidos anteriormente por Google. Los componentes de infraestructura de Firebase, como Firebase Installations, pueden usar identificadores técnicos para funcionar; desactivar los eventos no implica necesariamente detener todo tratamiento técnico de los SDK. Google puede tratar datos según sus plazos y normas de transferencia internacional. Consulte la Política de Privacidad de Google y la documentación de Firebase; para datos controlados por el desarrollador, utilice el contacto indicado aquí.

Documentação do Firebase: https://firebase.google.com/support/privacy  
Política de Privacidade do Google: https://policies.google.com/privacy

## 6. Compras Pro y servicios externos

Google Play procesa los pagos Pro; la app no recibe todos los datos de tu tarjeta. Para verificar o restaurar licencias, envía por HTTPS al servicio de verificación en Google Cloud el identificador del producto, token de compra, identificador de solicitud y token temporal de Play Integrity. No se transmiten PIN, movimientos financieros, notas ni audios.

Las consultas de tipos de cambio utilizan la API Frankfurter y envían solamente códigos de moneda, nunca saldos. Google, Frankfurter, GitHub Pages (donde se aloja esta política) y los sitios que abras voluntariamente pueden tratar datos técnicos de conexión, como la dirección IP, conforme a sus propias políticas.

## 7. Conservación, eliminación y transferencias

Los datos locales permanecen hasta que los elimines, borres los datos de la app o la desinstales. La limpieza permite seleccionar perfiles y categorías. Los archivos exportados o compartidos deben eliminarse por separado. El desarrollador no puede consultar, borrar ni recuperar a distancia las bases locales cifradas.

Los proveedores externos pueden conservar registros técnicos para operar, garantizar la seguridad, prevenir fraudes o cumplir obligaciones legales según sus propios plazos. Estos servicios pueden tratar datos técnicos internacionalmente con las garantías aplicables; no controlamos los plazos establecidos por terceros.

## 8. Bases jurídicas y tus derechos

El tratamiento local permite ofrecer las funciones que solicitas. Cuando corresponda, la verificación de compras responde a la prestación del servicio y a intereses legítimos de seguridad; los tratamientos publicitarios sujetos a consentimiento dependen de tus decisiones y de las leyes regionales. También pueden existir obligaciones legales.

Según la normativa aplicable, incluida la LGPD brasileña y el RGPD europeo cuando corresponda, puedes solicitar información, acceso, corrección, eliminación, portabilidad u oposición, o retirar el consentimiento. Sobre datos bajo control del desarrollador, escribe a moneyproapp@gmail.com. Gestionas directamente tus datos locales; para los de terceros, utiliza también sus canales.

## 9. Menores y cambios

La app no está dirigida específicamente a niños. Su uso debe respetar la clasificación por edades de Google Play y la orientación de responsables cuando sea necesaria.

La política se actualizará cuando cambien funciones, proveedores o exigencias legales. La fecha anterior identifica la revisión vigente.

