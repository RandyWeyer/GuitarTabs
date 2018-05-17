-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 17, 2018 at 07:15 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guitar_tab`
--
CREATE DATABASE IF NOT EXISTS `guitar_tab` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `guitar_tab`;

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `artist_name` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `song_name` varchar(255) NOT NULL,
  `tab` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `song_name`, `tab`) VALUES
(37, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes :q 2/2 '),
(38, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes 2/3 2/3 :8 2/3 '),
(39, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes 2/3 '),
(40, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes :q 2/3 '),
(41, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes :q 2/3 '),
(42, 'MEOW', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes 2/3 '),
(43, 'test', '\r\n    options tab-stems=true tab-stem-direction=down\r\n    tabstave time=4/4 key=C notation=true\r\n    notes 2/3 ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
