-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2025 a las 19:27:54
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recetas_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `fecha_creacion`) VALUES
(1, 'Postres', 'Recetas dulces y deliciosas', '2025-04-28 14:37:17'),
(2, 'Comidas Rápidas', 'Platos sencillos y rápidos de preparar', '2025-04-28 14:37:17'),
(3, 'Bebidas', 'Bebidas refrescantes y nutritivas', '2025-04-28 14:37:17'),
(4, 'Entradas', 'Pequeños platos para empezar una comida', '2025-04-28 14:37:17'),
(5, 'Platos Principales', 'Comidas principales para almuerzo o cena', '2025-04-28 14:37:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_recetas`
--

CREATE TABLE `imagenes_recetas` (
  `id` int(11) NOT NULL,
  `receta_id` int(11) DEFAULT NULL,
  `url_imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes_recetas`
--

INSERT INTO `imagenes_recetas` (`id`, `receta_id`, `url_imagen`) VALUES
(1, 1, 'https://www.divinacocina.es/wp-content/uploads/2023/06/pastel-de-chocolate-facil-C.jpg'),
(2, 2, 'https://www.divinacocina.es/wp-content/uploads/flan-de-requeson.jpg'),
(3, 3, 'https://www.divinacocina.es/wp-content/uploads/galletas-de-avena2.jpg'),
(4, 4, 'https://www.divinacocina.es/wp-content/uploads/tarta-de-manzana-estilo-sueco1.jpg'),
(5, 5, 'https://www.divinacocina.es/wp-content/uploads/cupcakes-red-velvet-plato.jpg'),
(6, 6, 'https://www.divinacocina.es/wp-content/uploads/hamburguesa.jpg'),
(7, 7, 'https://www.divinacocina.es/wp-content/uploads/2023/01/tacos-de-pollo-mexicanos-c.jpg'),
(8, 8, 'https://www.divinacocina.es/wp-content/uploads/2023/03/pizza-de-tortillas-de-trigo-pizzadilla.jpg'),
(9, 9, 'https://www.divinacocina.es/wp-content/uploads/2019/03/sandwich-gratinado-en-freidora-de-aire-c.jpg'),
(10, 10, 'https://www.divinacocina.es/wp-content/uploads/salchichas-envueltas-3.jpg'),
(11, 11, 'https://www.divinacocina.es/wp-content/uploads/2016/07/limonada-casera2.jpg'),
(12, 12, 'https://www.divinacocina.es/wp-content/uploads/2024/10/batido-de-boniato-con-frutas-y-yogur-c.jpg'),
(13, 13, 'https://www.divinacocina.es/wp-content/uploads/te-helado.jpg'),
(14, 14, 'https://www.divinacocina.es/wp-content/uploads/2018/06/CONSUMIR-espirulina.jpg'),
(15, 15, 'https://www.divinacocina.es/wp-content/uploads/mojito7.jpg'),
(16, 16, 'https://www.divinacocina.es/wp-content/uploads/bruscheta-italiana-varias.jpg'),
(17, 17, 'https://www.divinacocina.es/wp-content/uploads/GUACAMOLE-estilo-DIVINACOCINA.jpg'),
(18, 18, 'https://www.divinacocina.es/wp-content/uploads/ensalada-mediterranez-pasta.jpg'),
(19, 19, 'https://www.divinacocina.es/wp-content/uploads/2014/05/rollitos-primavera-detalle.jpg'),
(20, 20, 'https://www.divinacocina.es/wp-content/uploads/dip-esp10352879_s.jpg'),
(21, 21, 'https://www.divinacocina.es/wp-content/uploads/fetuccini-alfredo.jpg'),
(22, 22, 'https://www.divinacocina.es/wp-content/uploads/2023/05/pollo-al-horno-con-naranja-v.jpg'),
(23, 23, 'https://www.divinacocina.es/wp-content/uploads/lomo-de-cerdo-asado-a-la-naranja.jpg'),
(24, 24, 'https://www.divinacocina.es/wp-content/uploads/lasana-de-pisto-queso.jpg'),
(25, 25, 'https://www.divinacocina.es/wp-content/uploads/2011/07/risotto-de-setas-c.jpg'),
(26, 1, 'https://www.divinacocina.es/wp-content/uploads/2023/06/pastel-de-chocolate-facil-v2.jpg'),
(27, 3, 'https://www.divinacocina.es/wp-content/uploads/galletas-de-avena-D.jpg'),
(28, 4, 'https://www.divinacocina.es/wp-content/uploads/tarta-de-manzana-estilo-sueco-cortada.jpg'),
(29, 5, 'https://www.divinacocina.es/wp-content/uploads/cupcakes-red-velvet-detalle.jpg'),
(30, 6, 'https://www.divinacocina.es/wp-content/uploads/hamburguesa-casera-con-huevo.jpg'),
(31, 7, 'https://www.divinacocina.es/wp-content/uploads/2023/01/tacos-de-pollo-mexicanos-v.jpg'),
(32, 8, 'https://www.divinacocina.es/wp-content/uploads/2023/03/pizza-con-tortillas-mexicanas-en-sarten-V.jpg'),
(33, 9, 'https://www.divinacocina.es/wp-content/uploads/2019/03/SANDWICH-GRATINADO-EN-FREIDORA-DE-AIRE-CORTADO.jpg'),
(34, 10, 'https://www.divinacocina.es/wp-content/uploads/salchichas-envueltas-1.jpg'),
(35, 11, 'https://www.divinacocina.es/wp-content/uploads/2016/07/limonada-casera3.jpg'),
(36, 12, 'https://www.divinacocina.es/wp-content/uploads/2024/10/batido-de-boniato-con-frutas-y-yogur.jpg'),
(37, 15, 'https://www.divinacocina.es/wp-content/uploads/mojito.jpg'),
(38, 19, 'https://www.divinacocina.es/wp-content/uploads/2014/05/ROLLITOS-PRIMAVERA-h.jpg'),
(39, 21, 'https://www.divinacocina.es/wp-content/uploads/2021/06/fetuccini-alfredo-vvv.jpg'),
(40, 22, 'https://www.divinacocina.es/wp-content/uploads/2023/05/pollo-al-horno-con-naranja-v3.jpg'),
(41, 25, 'https://www.divinacocina.es/wp-content/uploads/2011/07/risotto-de-setas-o-champinones-v2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `unidad_medida` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `unidad_medida`) VALUES
(1, 'Harina', 'gramos'),
(2, 'Azúcar', 'gramos'),
(3, 'Huevo', 'unidades'),
(4, 'Leche', 'mililitros'),
(5, 'Chocolate', 'gramos'),
(6, 'Carne de res', 'gramos'),
(7, 'Pollo', 'gramos'),
(8, 'Tomate', 'unidades'),
(9, 'Queso', 'gramos'),
(10, 'Agua', 'mililitros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `instrucciones` text DEFAULT NULL,
  `tiempo_preparacion` int(11) DEFAULT NULL,
  `dificultad` enum('Fácil','Media','Difícil') DEFAULT 'Media',
  `usuario_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `fecha_publicacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id`, `titulo`, `descripcion`, `instrucciones`, `tiempo_preparacion`, `dificultad`, `usuario_id`, `categoria_id`, `fecha_publicacion`) VALUES
(1, 'Pastel de Chocolate', 'Delicioso pastel de chocolate', 'Mezclar ingredientes y hornear.', 60, 'Media', 2, 1, '2025-04-28 14:38:26'),
(2, 'Flan Casero', 'Flan tradicional', 'Preparar caramelo, mezclar, hornear.', 90, 'Media', 3, 1, '2025-04-28 14:38:26'),
(3, 'Hamburguesa Clásica', 'Hamburguesa con carne de res', 'Cocinar carne y ensamblar.', 30, 'Fácil', 2, 2, '2025-04-28 14:38:26'),
(4, 'Tacos Rápidos', 'Tacos mexicanos rápidos', 'Preparar carne y armar tacos.', 25, 'Fácil', 3, 2, '2025-04-28 14:38:26'),
(5, 'Limonada Natural', 'Bebida refrescante de limón', 'Exprimir limones y mezclar.', 10, 'Fácil', 2, 3, '2025-04-28 14:38:26'),
(6, 'Batido de Fresas', 'Batido natural', 'Licuar fresas con leche.', 5, 'Fácil', 3, 3, '2025-04-28 14:38:26'),
(7, 'Bruschetta', 'Pan con tomate y albahaca', 'Tostar pan y agregar toppings.', 15, 'Fácil', 2, 4, '2025-04-28 14:38:26'),
(8, 'Guacamole', 'Dip de aguacate', 'Machacar aguacate con condimentos.', 10, 'Fácil', 3, 4, '2025-04-28 14:38:26'),
(9, 'Pasta Alfredo', 'Pasta con salsa cremosa', 'Cocinar pasta y preparar salsa.', 40, 'Media', 2, 5, '2025-04-28 14:38:26'),
(10, 'Pollo al horno', 'Pollo sazonado al horno', 'Sazonar pollo y hornear.', 90, 'Media', 3, 5, '2025-04-28 14:38:26'),
(11, 'Galletas de Avena', 'Galletas saludables de avena', 'Mezclar y hornear.', 30, 'Fácil', 2, 1, '2025-04-28 14:52:36'),
(12, 'Tarta de Manzana', 'Tarta dulce de manzana', 'Preparar masa y hornear.', 70, 'Media', 3, 1, '2025-04-28 14:52:36'),
(13, 'Cupcakes de Vainilla', 'Mini pastelitos de vainilla', 'Mezclar, hornear y decorar.', 45, 'Fácil', 2, 1, '2025-04-28 14:52:36'),
(14, 'Pizza Express', 'Pizza rápida en sartén', 'Preparar masa y toppings.', 20, 'Fácil', 2, 2, '2025-04-28 14:52:36'),
(15, 'Sandwich Club', 'Sandwich de tres pisos', 'Armar sandwich.', 15, 'Fácil', 3, 2, '2025-04-28 14:52:36'),
(16, 'Hot Dog Casero', 'Perro caliente con aderezos', 'Cocinar salchicha y armar.', 10, 'Fácil', 2, 2, '2025-04-28 14:52:36'),
(17, 'Té Helado Casero', 'Té frío y dulce', 'Preparar té y enfriar.', 15, 'Fácil', 2, 3, '2025-04-28 14:52:36'),
(18, 'Smoothie Verde', 'Batido de frutas y vegetales', 'Licuar todo.', 8, 'Fácil', 3, 3, '2025-04-28 14:52:36'),
(19, 'Mojito sin Alcohol', 'Bebida refrescante de menta', 'Mezclar ingredientes.', 7, 'Fácil', 2, 3, '2025-04-28 14:52:36'),
(20, 'Ensalada Caprese', 'Tomate, mozzarella y albahaca', 'Ensamblar los ingredientes.', 10, 'Fácil', 2, 4, '2025-04-28 14:52:36'),
(21, 'Rollitos Primavera', 'Entradas crujientes', 'Preparar y freír.', 25, 'Media', 3, 4, '2025-04-28 14:52:36'),
(22, 'Dip de Espinacas', 'Dip cremoso de espinacas', 'Mezclar y hornear.', 20, 'Fácil', 2, 4, '2025-04-28 14:52:36'),
(23, 'Asado de Tira', 'Carne asada a fuego lento', 'Marinar y asar lentamente.', 180, 'Difícil', 2, 5, '2025-04-28 14:52:36'),
(24, 'Lasagna Clásica', 'Pastel de pasta italiano', 'Armar capas y hornear.', 90, 'Media', 3, 5, '2025-04-28 14:52:36'),
(25, 'Risotto de Champiñones', 'Arroz cremoso italiano', 'Cocinar arroz lentamente.', 45, 'Media', 2, 5, '2025-04-28 14:52:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta_ingredientes`
--

CREATE TABLE `receta_ingredientes` (
  `id` int(11) NOT NULL,
  `receta_id` int(11) DEFAULT NULL,
  `ingrediente_id` int(11) DEFAULT NULL,
  `cantidad` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `receta_ingredientes`
--

INSERT INTO `receta_ingredientes` (`id`, `receta_id`, `ingrediente_id`, `cantidad`) VALUES
(1, 1, 1, 200.00),
(2, 1, 2, 150.00),
(3, 1, 3, 3.00),
(4, 1, 5, 100.00),
(5, 2, 2, 100.00),
(6, 2, 4, 500.00),
(7, 2, 3, 4.00),
(8, 3, 1, 150.00),
(9, 3, 2, 80.00),
(10, 3, 3, 2.00),
(11, 4, 1, 250.00),
(12, 4, 2, 120.00),
(13, 4, 3, 3.00),
(14, 5, 1, 200.00),
(15, 5, 2, 150.00),
(16, 5, 3, 2.00),
(17, 6, 6, 150.00),
(18, 6, 9, 50.00),
(19, 7, 7, 120.00),
(20, 7, 8, 2.00),
(21, 8, 1, 150.00),
(22, 8, 9, 100.00),
(23, 9, 7, 100.00),
(24, 9, 8, 2.00),
(25, 10, 7, 80.00),
(26, 10, 8, 1.00),
(27, 11, 10, 500.00),
(28, 11, 8, 3.00),
(29, 12, 4, 300.00),
(30, 12, 8, 5.00),
(31, 13, 10, 400.00),
(32, 14, 4, 200.00),
(33, 15, 10, 300.00),
(34, 16, 1, 100.00),
(35, 16, 8, 2.00),
(36, 17, 8, 2.00),
(37, 18, 8, 3.00),
(38, 18, 9, 100.00),
(39, 19, 1, 100.00),
(40, 19, 8, 2.00),
(41, 20, 8, 2.00),
(42, 21, 1, 200.00),
(43, 21, 9, 100.00),
(44, 22, 7, 300.00),
(45, 23, 6, 400.00),
(46, 24, 1, 300.00),
(47, 24, 9, 150.00),
(48, 25, 1, 200.00),
(49, 25, 9, 100.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('admin','chef','lector') DEFAULT 'lector',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `correo`, `password`, `rol`, `fecha_creacion`) VALUES
(1, 'Admin Principal', 'admin@blogrecetas.com', 'admin123', 'admin', '2025-04-28 14:37:17'),
(2, 'Chef Maria', 'maria@chef.com', 'chef123', 'chef', '2025-04-28 14:37:17'),
(3, 'Chef Juan', 'juan@chef.com', 'chef123', 'chef', '2025-04-28 14:37:17'),
(4, 'Lector Ana', 'ana@lector.com', 'lector123', 'lector', '2025-04-28 14:37:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes_recetas`
--
ALTER TABLE `imagenes_recetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receta_id` (`receta_id`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_id` (`usuario_id`),
  ADD KEY `fk_categoria_id` (`categoria_id`);

--
-- Indices de la tabla `receta_ingredientes`
--
ALTER TABLE `receta_ingredientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receta_id` (`receta_id`),
  ADD KEY `ingrediente_id` (`ingrediente_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `imagenes_recetas`
--
ALTER TABLE `imagenes_recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `receta_ingredientes`
--
ALTER TABLE `receta_ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes_recetas`
--
ALTER TABLE `imagenes_recetas`
  ADD CONSTRAINT `imagenes_recetas_ibfk_1` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD CONSTRAINT `fk_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `receta_ingredientes`
--
ALTER TABLE `receta_ingredientes`
  ADD CONSTRAINT `receta_ingredientes_ibfk_1` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `receta_ingredientes_ibfk_2` FOREIGN KEY (`ingrediente_id`) REFERENCES `ingredientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
