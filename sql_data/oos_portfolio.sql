-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2016 at 12:47 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `oos_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `technologies` text NOT NULL,
  `date_realized` timestamp NOT NULL,
  `text_date` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `no_images` int(11) NOT NULL,
  `image_extension` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `technologies`, `date_realized`, `text_date`, `description`, `image_url`, `video_url`, `no_images`, `image_extension`) VALUES
(2, 'Ozone', 'MaxMSP/Kinect/Touchdesigner', '2015-05-27 16:49:43', 'Year 2014/2015', 'Presented at Chromatic Festival 2015 (6th edition). Conception and design of a primitive interactive interface. Audiovisual content is generated, modulated and destroyed by the public. The interactors are elevated to the role of creators. The installation solves the abstraction of a cosmic universe.', 'assets/img/projects/ozone/', '', 0, '.jpg'),
(3, 'Jutra', 'MaxMSP/Touchdesigner/Resolume Arena', '2015-03-15 16:51:46', 'Spring 2015', 'An audiovisual automaton was created and presented at the 17th Jutra ceremony night here in Montreal as a tribute to Quebec''s cinema industry. This audiovisual artificial intelligence system evolved during the night while presenting multiple scenes of important movies of the past year.', 'assets/img/projects/jutra/', '', 3, '.png'),
(6, 'Culte Éphémère', 'Quartz Composer/Processing/Resolume Arena', '2013-12-07 17:53:11', 'Autumn 2013', 'Programming and live performance of a visual system on the subject of "Ephemeral". The project consisted of the production of multiple autogenerative visuals and their manipulation in real time.', 'assets/img/projects/culte/', '', 3, '.png'),
(7, 'Sonor Primaire', 'MaxMSP/Jitter', '2013-11-20 17:55:10', 'Autumn 2013', 'Exploration of the echo of visual stimuli on the audio spectru. The project explores the different colors the sound can take by translating different drawings performed in real-time as audio waves.', 'assets/img/projects/sonor/', '', 3, '.png');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
