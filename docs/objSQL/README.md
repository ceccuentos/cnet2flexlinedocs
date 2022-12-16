---
sidebar: auto
pageClass: custom-page-class
---

# Lista de Objetos SQL server

Detalle con una breve descripción de cada objeto SQL, esto es, Tablas, Store Procedure, Funciones, Vistas y triggers existentes en la BD Starfood que dicen relación con desarrollos.

## Tablas

| Objeto                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dbo.DocumentoInfo** | Tabla auxiliar con datos adicionales asociados a documentos. </br></br> Casos de uso: </br></br> Seccion=”Recepcion”, Registra Recepción de documentos desde autoventa, posterior al proceso de validación. El resultado de la validación se almacena en campo Clasif1 y el detalle con los mensajes en campo observaciones. </br></br> Seccion=”Recepcion”, Registra Recepción de documentos desde autoventa, posterior al proceso de validación. El resultado de la validación se almacena en campo Clasif1 y el detalle con los mensajes en campo observaciones. </br></br> Sección=”FACTURAAUTOVENTA”, registra el envío del documento DTE generado por Flexline a la App Autoventa, si API devuelve error, se captura JSON de respuesta en campo observaciones. </br></br> Sección=”DESPACHO”, registra los movimientos relativos al despacho de la Nota de venta, estos registros son alimentados por otros sistemas en Starfood quienes van informando por medio de un SP las diversas etapas por la cuales pasa el pedido. La información es útil para enviar la bitacora a la App autoventa y un correo electrónico al cliente con la información del pedido </br></br> Sección=”CICLOLOGISTICO”, Marca para control de documentos que llegan por ventas entre empresas relacionadas (Importadora - Distribuidora). |

## Vistas

| Objeto                          | Descripción                                                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **dbo.DeudaAutoventa**          | Vista para cálculo de deuda de clientes para envío a Autoventa por medio de API. </br></br>**NO IMPLEMENTADO**                                         |
| **dbo.EstadoNV_Vw**             | Vista para visualización de mensajes de despacho, uso Power BI                                                                                         |
| **dbo.RecepcionNVAutoventa_vw** | Vista para visualización dashboard de validaciones de recepción de Notas de Venta desde Autoventa, uso Power BI.                                       |
| **dbo.Bitacora_Vw**             | Vista visualización de movimientos logísticos. Se creó para deducir las actividades de despacho asociados a una nota de venta. </br></br> **OBSOLETO** |

## Store Procedures

| Objeto                                                                   | Descripción                                                                                                                                                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dbo.AddMovDespachoNV**                                                 | Procedimiento para agregar actividades de despacho asociadas a Notas de venta. Versión original, se reemplaza por AddMovDespachoNV2.</br></br> **OBSOLETO**                         |
| **dbo.AddMovDespachoNV_v2**                                              | Procedimiento para la inyección de datos de despacho de pedidos de Starfood                                                                                                         |
| **Dbo.ExportImage**                                                      | Procedimiento que extrae desde tabla de adjuntos de Flexline un archivo y lo deja disponible en un directorio físico.                                                               |
| **Dbo.InsertImage**                                                      | Procedimiento que inserta un archivo en tablas de adjuntos de Flexline                                                                                                              |
| **Dbo.InsertPDF2Flex**                                                   | Procedimiento que Inserta archivos PDF en Base64 a tablas de Flexline del día.                                                                                                      |
| **Dbo.SendComment_NVAutoventa**                                          | Envía Comentarios a Autoventa que estén dentro de los rangos de fecha y no estén marcados como enviados (Documentoinfo.Logico2)                                                     |
| **Dbo.Sp_CallEndPoint_POST**                                             | Llamada a API externa con header application/json. Devuelve JSON con respuesta de llamada a EndPoint.                                                                               |
| **Dbo.Sp_CallEndPoint_POST_Twilio**                                      | Llamada a API externa de Twillio, para envío de mensajes por Whatsapp.                                                                                                              |
| **Dbo.Sp_SendFactura2Autoventa**                                         | Procedimiento para el envío de PDF de facturas emitidas en Flexline a la App Autoventa por medio de API (ver Job Actualiza Facturas Autoventa).                                     |
| **Flexline.</br></br>MAIL_ESTADOPEDIDOCLIENTE**                          | Envía correo con resumen de despacho de Notas de Venta a clientes.                                                                                                                  |
| **Flexline.MAIL_FACTURAVTAAUTO**                                         | Procedimiento para envío de correo para documento Emitibles.</br></br> **NO IMPLEMENTADO**.                                                                                         |
| **Flexline.MAIL_MSGNOTAVENTA**                                           | Procedimiento para envío de correo a Vendedores con actividades de despacho. </br></br>**OBSOLETO**, se reemplazó por correo a clientes con copia a vendedor.                       |
| **Flexline.MAIL_NV_AUTOVENTA**                                           | Procedimiento para envío de Mensajes de Validación de Notas de Venta llegadas desde Autoventa. Es llamado desde Trigger Gen_DocumentoV.TR_GEN_NV_AUTOVENTA.                         |
| **Flexline.MAIL_RETIROCLIENTE**                                          | Procedimiento para envío de correo por retiro de cliente en bodegas de Starfood.                                                                                                    |
| **Flexline.Valida_NV_Autoventa**                                         | Procedimiento de validación de reglas de negocio de Documentos en tablas GEN_XXXXXXXXX que provienen desde app autoventa.                                                           |
| **Flexline.</br></br>AddDocto_Logistico**                                | Procedimiento para inicio de ciclo Logístico, su output es Documento NV DiSTRIBUIDORA.                                                                                              |
| **Flexline.</br></br>AddDocto_Logistico_Fact_VENTA_EERR**                | Procedimiento para ciclo Logístico, Crea Factura de venta de EERR en Distribuidora a partir de documento Factura VEnta en Importadora.                                              |
| **Flexline.</br></br>AddDocto_Logisitico_NV_EERR**                       | Crea Documento NV EERR en Importadora a partir de documento integrado en Distribuidora.                                                                                             |
| **Flexline.</br></br>AddDocto*Logistico*</br></br>PARTE_RECEPCION_EERR** | Crea documento Parte de Recepción en Distribuidora a partir de factura Venta en Importadora.                                                                                        |
| **Flexline.</br></br>AddDocto_OSERVICIO2FACTVENTA**                      | Procedimiento para creación de documentos factura de venta, desde despachos generados por Syspal. </br></br>Se gatilla a partir del mensaje Preparación “Orden ingresa a despacho”. |

## Triggers

| Objeto                                                     | Descripción                                                                                                                                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Flexline.Documento.</br></br>TR_EMISIONFACTURA**         | Captura Emisión de facturas para envío Autoventa y Ciclo Logístico.                                                                                                     |
| **Flexline.Documento.</br></br>TR_APROBACIONDESPACHO_UPD** | Control de Aprobación de documentos para actividades de despacho por Nota de Pedido. Sólo para Notas de Venta en Tabla Gen_DoctoNotaVenta y documento Orden de Entrega. |
| **Flexline.Documento.</br></br>TR_ActualizaFECHAETA**      | Actualiza Fecha ETA de Documento Orden de Embarque a partir de líneas de detalle de documento Actualiza Fecha ETA.                                                      |
| **Flexline.GEN_DocumentoV.</br></br>TR_GEN_NV_AUTOVENTA**  | Procedimiento de Captura de Doctos de App Autoventa para validación y envío de correo.                                                                                  |
| **Flexline.GEN_DocumentoV.</br></br>TR_GEN_NV_CNET**       | Ciclo Logístico CNET-IMPORTADORA, crea Nota Venta EERR.                                                                                                                 |

## Jobs

| Objeto                            | Descripción                                                             |
| --------------------------------- | ----------------------------------------------------------------------- |
| **Actualiza Facturas Autoventa**  | Proceso que envía las facturas emitidas del día a la App de Autoventa . |
| **Inyecta Comentarios Autoventa** | Proceso de envío de comentarios vía API a la app de Autoventa.          |

## Functions

| Objeto                | Descripción                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Dbo.SeekNV**        | Table. Busca Nota de venta desde Documentos posteriores.                             |
| **Dbo.Split**         | Table. Pasa a una tabla los valores desde un string delimitado.                      |
| **Dbo.Bitacora_Fx**   | Table. Obtiene actividades de despacho desde Notas de venta.</br></br> **OBSOLETO**. |
| **Dbo.ChkValidEmail** | Scalar. Valida Dirección de correo.                                                  |
| **Dbo.udf-Str-JSON**  | Scalar. Pasa XML a JSON.                                                             |
