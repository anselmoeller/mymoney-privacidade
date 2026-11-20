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

---

<!-- FCM-20261120: atualização pública da política 1.3.0 -->
## Comunicados oficiales opcionales — Firebase Cloud Messaging

En las versiones compatibles de Android, Paz Financiera puede enviar avisos generales sobre actualizaciones, mantenimiento y novedades mediante Firebase Cloud Messaging (FCM) de Google. Esta función está desactivada inicialmente y solo se habilita cuando decides recibir comunicados desde el Centro de Notificaciones y concedes el permiso correspondiente de Android.

Con tu consentimiento, Firebase puede tratar un token técnico de registro, identificadores de instalación, el tema asociado al idioma seleccionado, dirección IP e información técnica del dispositivo y la entrega. Su finalidad es distribuir comunicados. La aplicación no incluye saldos, gastos, PIN, contenido de notas, grabaciones ni archivos de respaldo en los mensajes FCM. El desarrollador no mantiene una base propia de tokens de usuarios.

Los mensajes siguen el idioma elegido dentro de la aplicación, que puede ser distinto del idioma de Android. Al cambiar de idioma, se intenta cancelar la inscripción anterior antes de realizar la nueva. Sin conexión, los cambios o la cancelación pueden quedar pendientes hasta recuperar internet. La entrega no está garantizada; los avisos pueden mostrarse en la pantalla de bloqueo según la configuración del dispositivo.

Puedes desactivar estos comunicados en cualquier momento desde el Centro de Notificaciones. Son independientes de los recordatorios locales, Analytics, Crashlytics, Performance Monitoring y las preferencias de publicidad. Google trata los datos técnicos conforme a sus propias políticas. No se requiere la versión Pro.

## Versión 1.3.0: respaldos v4 y funciones

En la versión 1.3.0, los respaldos de datos portátiles más recientes utilizan el formato v4 con cifrado y pueden recuperarse con el PIN original o un código de recuperación compatible, según el archivo. Los respaldos antiguos pueden exigir las credenciales originales: cambiar el PIN no modifica los archivos anteriores. Los respaldos automáticos Pro continúan siendo locales, en una carpeta elegida por el usuario y con clave de recuperación independiente. El audio puede requerir archivos cifrados separados. No existe sincronización de los registros financieros con un servidor del desarrollador.

Funciones actuales: gastos e ingresos, previsiones, gráficos e informes PDF, pagos recurrentes, cuotas, tareas, notas de voz, OCR local, PIN de 8 a 16 dígitos, biometría, respaldos locales cifrados y temas visuales. Los comunicados son opcionales y requieren una versión compatible.

## Descarga Paz Financiera en Google Play

Ficha oficial para Android. La instalación se realiza a través de Google Play. [Google Play](https://play.google.com/store/apps/details?id=com.anspro.mymoney.app&hl=es_ES).

![QR Code — Google Play](assets/qr-play-es.png)
