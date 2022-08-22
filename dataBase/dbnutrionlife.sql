-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2022 a las 07:44:56
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbnutrionlife`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dietas`
--

CREATE TABLE `dietas` (
  `Id_dietas` int(11) NOT NULL,
  `id_tipoDietas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `Id_ejercicio` int(11) NOT NULL,
  `id_TipoEjercicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8_bin NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_bin NOT NULL,
  `Correo` text COLLATE utf8_bin NOT NULL,
  `Contraseña` text COLLATE utf8_bin NOT NULL,
  `Telefono` text COLLATE utf8_bin NOT NULL,
  `Id_ejercicio` int(11) NOT NULL,
  `Id_dietas` int(11) NOT NULL,
  `Id_Datos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recolecciondatos`
--

CREATE TABLE `recolecciondatos` (
  `Id_Datos` int(11) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Sexo` tinyint(1) NOT NULL,
  `Peso` decimal(25,0) NOT NULL,
  `Altura` decimal(25,0) NOT NULL,
  `Enfermedades` int(11) NOT NULL,
  `Patologia` varchar(45) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_dietas`
--

CREATE TABLE `tipo_dietas` (
  `id_tipoDietas` int(11) NOT NULL,
  `TipoDietas` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_ejercicios`
--

CREATE TABLE `tipo_ejercicios` (
  `id_TipoEjercicio` int(11) NOT NULL,
  `TipoEjercicio` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dietas`
--
ALTER TABLE `dietas`
  ADD PRIMARY KEY (`Id_dietas`),
  ADD KEY `fk_tipodie` (`id_tipoDietas`);

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`Id_ejercicio`),
  ADD KEY `fk_tipoejercicio` (`id_TipoEjercicio`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `Fk_ejercicios` (`Id_ejercicio`),
  ADD KEY `fk_dieta` (`Id_dietas`),
  ADD KEY `fk_datos` (`Id_Datos`);

--
-- Indices de la tabla `recolecciondatos`
--
ALTER TABLE `recolecciondatos`
  ADD PRIMARY KEY (`Id_Datos`);

--
-- Indices de la tabla `tipo_dietas`
--
ALTER TABLE `tipo_dietas`
  ADD PRIMARY KEY (`id_tipoDietas`);

--
-- Indices de la tabla `tipo_ejercicios`
--
ALTER TABLE `tipo_ejercicios`
  ADD PRIMARY KEY (`id_TipoEjercicio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dietas`
--
ALTER TABLE `dietas`
  MODIFY `Id_dietas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  MODIFY `Id_ejercicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recolecciondatos`
--
ALTER TABLE `recolecciondatos`
  MODIFY `Id_Datos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_dietas`
--
ALTER TABLE `tipo_dietas`
  MODIFY `id_tipoDietas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_ejercicios`
--
ALTER TABLE `tipo_ejercicios`
  MODIFY `id_TipoEjercicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dietas`
--
ALTER TABLE `dietas`
  ADD CONSTRAINT `fk_tipodie` FOREIGN KEY (`id_tipoDietas`) REFERENCES `tipo_dietas` (`id_tipoDietas`);

--
-- Filtros para la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD CONSTRAINT `fk_tipoejercicio` FOREIGN KEY (`id_TipoEjercicio`) REFERENCES `tipo_ejercicios` (`id_TipoEjercicio`);

--
-- Filtros para la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD CONSTRAINT `Fk_ejercicios` FOREIGN KEY (`Id_ejercicio`) REFERENCES `ejercicios` (`Id_ejercicio`),
  ADD CONSTRAINT `fk_datos` FOREIGN KEY (`Id_Datos`) REFERENCES `recolecciondatos` (`Id_Datos`),
  ADD CONSTRAINT `fk_dieta` FOREIGN KEY (`Id_dietas`) REFERENCES `dietas` (`Id_dietas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
