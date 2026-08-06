-- MySQL dump 10.13  Distrib 8.0.46, for macos15 (arm64)
--
-- Host: 127.0.0.1    Database: multiflex
-- ------------------------------------------------------
-- Server version	9.7.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '6369e028-7a35-11f1-b2a6-b328ace67fc6:1-92';

--
-- Table structure for table `auditoria_solicitudes`
--

DROP TABLE IF EXISTS `auditoria_solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auditoria_solicitudes` (
  `id_auditoria` int NOT NULL AUTO_INCREMENT,
  `id_solicitud` int NOT NULL,
  `accion` varchar(20) NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_auditoria`),
  KEY `fk_auditoria_solicitud` (`id_solicitud`),
  CONSTRAINT `fk_auditoria_solicitud` FOREIGN KEY (`id_solicitud`) REFERENCES `solicitudes` (`id_solicitud`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditoria_solicitudes`
--

LOCK TABLES `auditoria_solicitudes` WRITE;
/*!40000 ALTER TABLE `auditoria_solicitudes` DISABLE KEYS */;
INSERT INTO `auditoria_solicitudes` VALUES (1,5,'INSERT','2026-08-02 08:41:13'),(2,6,'INSERT','2026-08-02 08:42:04'),(3,7,'INSERT','2026-08-02 13:17:26'),(4,8,'INSERT','2026-08-02 13:20:10'),(5,9,'INSERT','2026-08-02 13:32:51'),(6,10,'INSERT','2026-08-02 13:45:16'),(7,11,'INSERT','2026-08-02 13:57:30'),(8,12,'INSERT','2026-08-05 12:54:59'),(9,13,'INSERT','2026-08-05 20:55:20');
/*!40000 ALTER TABLE `auditoria_solicitudes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (2,'Electricidad'),(4,'Impermeabilización'),(6,'Jardinería'),(5,'Limpieza'),(3,'Pintura'),(1,'Plomería');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `fecha_registro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `correo` (`correo`),
  KEY `idx_cliente_correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Juan Pérez','4491234567','juan@email.com','Av Universidad 101','2026-08-02 07:34:42'),(2,'María López','4499876543','maria@email.com','Centro','2026-08-02 07:34:42'),(3,'Carlos Hernández','4494567890','carlos@email.com','Las Américas','2026-08-02 07:34:42'),(4,'Ana Martínez','4497891234','ana@email.com','Jardines del Sol','2026-08-02 07:34:42'),(5,'Max','4491234567','max@test.com','Centro','2026-08-02 08:41:13'),(6,'max','4493535651','max@utr.edu','yo','2026-08-02 13:17:26'),(7,'asda','asda','asda@dd','fas','2026-08-02 13:20:10'),(8,'max','449','max@max','yo','2026-08-02 13:32:51'),(9,'m','p','p@p','p','2026-08-02 13:45:16'),(10,'max','max','ma@x','max','2026-08-02 13:57:30'),(11,'Andrea|','4493434','andr@a','los conos palo alto','2026-08-05 12:54:59'),(12,'Max Moreno Medina','449 353 5651','max@utr.com','Ojocaliente ll','2026-08-05 20:55:20');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id_estado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_estado`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (2,'Aceptada'),(5,'Cancelada'),(3,'En proceso'),(4,'Finalizada'),(1,'Pendiente');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `id_servicio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_servicio`),
  KEY `idx_servicio_categoria` (`id_categoria`),
  CONSTRAINT `fk_servicio_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `servicios_chk_1` CHECK ((`precio` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'Plomería','Reparación de tuberías y fugas.',650.00,'plomeria.jpg',1,1),(2,'Electricidad','Instalación eléctrica residencial.',950.00,'electricidad.jpg',1,2),(3,'Pintura','Pintura interior y exterior.',2200.00,'pintura.jpg',1,3),(4,'Impermeabilización','Impermeabilización profesional.',3400.00,'imper.jpg',1,4),(5,'Limpieza','Limpieza residencial.',850.00,'limpieza.jpg',1,5),(6,'Jardinería','Poda y mantenimiento.',1200.00,'jardin.jpg',1,6);
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudes` (
  `id_solicitud` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `id_servicio` int NOT NULL,
  `id_estado` int NOT NULL,
  `fecha_solicitud` datetime DEFAULT CURRENT_TIMESTAMP,
  `comentarios` text,
  PRIMARY KEY (`id_solicitud`),
  KEY `fk_solicitud_servicio` (`id_servicio`),
  KEY `idx_solicitud_cliente` (`id_cliente`),
  KEY `idx_solicitud_estado` (`id_estado`),
  CONSTRAINT `fk_solicitud_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_solicitud_estado` FOREIGN KEY (`id_estado`) REFERENCES `estados` (`id_estado`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_solicitud_servicio` FOREIGN KEY (`id_servicio`) REFERENCES `servicios` (`id_servicio`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
INSERT INTO `solicitudes` VALUES (1,1,1,1,'2026-08-02 07:34:42','Tengo una fuga en la cocina.'),(2,2,3,3,'2026-08-02 07:34:42','Necesito pintar dos habitaciones.'),(3,3,6,2,'2026-08-02 07:34:42','Podar jardín.'),(4,4,2,1,'2026-08-02 07:34:42','No funciona la instalación.'),(5,5,1,1,'2026-08-02 08:41:13','Prueba de integración'),(6,5,1,1,'2026-08-02 08:42:04','Prueba de integración'),(7,6,1,1,'2026-08-02 13:17:26','yo'),(8,7,2,1,'2026-08-02 13:20:10','dasd'),(9,8,1,1,'2026-08-02 13:32:51','yo'),(10,9,1,1,'2026-08-02 13:45:16','p'),(11,10,1,1,'2026-08-02 13:57:30','max'),(12,11,2,1,'2026-08-05 12:54:59','te extraño fany'),(13,12,5,1,'2026-08-05 20:55:20','Ocupo una limpieza general de mi casa');
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_insert_solicitud` AFTER INSERT ON `solicitudes` FOR EACH ROW BEGIN

INSERT INTO auditoria_solicitudes

(id_solicitud,accion)

VALUES

(NEW.id_solicitud,'INSERT');

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_update_solicitud` AFTER UPDATE ON `solicitudes` FOR EACH ROW BEGIN

INSERT INTO auditoria_solicitudes

(id_solicitud,accion)

VALUES

(NEW.id_solicitud,'UPDATE');

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `vw_catalogo`
--

DROP TABLE IF EXISTS `vw_catalogo`;
/*!50001 DROP VIEW IF EXISTS `vw_catalogo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_catalogo` AS SELECT 
 1 AS `id_servicio`,
 1 AS `nombre`,
 1 AS `categoria`,
 1 AS `descripcion`,
 1 AS `precio`,
 1 AS `imagen`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_solicitudes`
--

DROP TABLE IF EXISTS `vw_solicitudes`;
/*!50001 DROP VIEW IF EXISTS `vw_solicitudes`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_solicitudes` AS SELECT 
 1 AS `id_solicitud`,
 1 AS `cliente`,
 1 AS `servicio`,
 1 AS `estado`,
 1 AS `fecha_solicitud`,
 1 AS `comentarios`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'multiflex'
--

--
-- Final view structure for view `vw_catalogo`
--

/*!50001 DROP VIEW IF EXISTS `vw_catalogo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_catalogo` AS select `s`.`id_servicio` AS `id_servicio`,`s`.`nombre` AS `nombre`,`c`.`nombre` AS `categoria`,`s`.`descripcion` AS `descripcion`,`s`.`precio` AS `precio`,`s`.`imagen` AS `imagen` from (`servicios` `s` join `categorias` `c` on((`s`.`id_categoria` = `c`.`id_categoria`))) where (`s`.`activo` = true) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_solicitudes`
--

/*!50001 DROP VIEW IF EXISTS `vw_solicitudes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_solicitudes` AS select `sol`.`id_solicitud` AS `id_solicitud`,`c`.`nombre` AS `cliente`,`s`.`nombre` AS `servicio`,`e`.`nombre` AS `estado`,`sol`.`fecha_solicitud` AS `fecha_solicitud`,`sol`.`comentarios` AS `comentarios` from (((`solicitudes` `sol` join `clientes` `c` on((`sol`.`id_cliente` = `c`.`id_cliente`))) join `servicios` `s` on((`sol`.`id_servicio` = `s`.`id_servicio`))) join `estados` `e` on((`sol`.`id_estado` = `e`.`id_estado`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-05 22:08:55
