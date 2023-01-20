-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2023 at 04:19 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `umap_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `buildingID` int(11) NOT NULL,
  `buildingName` varchar(45) DEFAULT NULL,
  `noOfStories` varchar(10) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`buildingID`, `buildingName`, `noOfStories`, `description`) VALUES
(3, 'Integrated Technology Building', '2 Stories', 'Integrated Technology Building'),
(4, 'ROTC Building', '1 story', 'ROTC Building'),
(5, 'Old Engineering Building', '1 story', 'Old Engineering Building'),
(9, 'CITC Building', '4 stories', 'CITC Building'),
(14, 'Finance and Accounting Building', '1 story', 'Finance and Accounting Building'),
(16, 'DRER Memorial Hall ', '1 story', 'DRER Memorial Hall '),
(19, 'Science Centrum Building', '1 story', 'Science Centrum Building'),
(20, 'Cafeteria', '1 story', 'Cafeteria'),
(23, 'Learning Resource Center (LRC)', '4 stories', 'Learning Resource Center (LRC)'),
(24, 'Food Trade Building', '1 story', 'Food Trade Building'),
(25, 'Food Innovation Center', '2 stories', 'Food Innovation Center'),
(28, 'Old Science Building', '1 story', 'Old Science Building'),
(36, 'Old Student Center', '1 story', 'Old Student Center'),
(41, 'Science Complex', '4 stories', 'Science Complex'),
(100, 'NMMEIC', '1 story', 'NMMEIC');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventID` int(11) NOT NULL,
  `locationID` varchar(100) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventID`, `locationID`, `title`, `time`, `date`, `description`) VALUES
(1, '2 ', 'dasd', '4:27pm - 5:26am ', '2023-01-19', 'blablabla'),
(2, '97 ', 'Mag Hunting Og chicks by Kyle', '4:35am - 6:35pm ', '2023-01-17', 'blablabla'),
(3, '83 ', 'Graduation', '7:44am - 7:44am ', '2023-01-20', 'blablabla'),
(4, '4 ', 'MAligo', '7:41pm - 7:40pm ', '2023-01-21', 'blablabla');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `roomID` int(11) NOT NULL,
  `buildingNumber` int(11) DEFAULT NULL,
  `roomName` varchar(100) DEFAULT NULL,
  `blockNumber` int(11) DEFAULT NULL,
  `roomType` varchar(45) DEFAULT NULL,
  `floorNumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`roomID`, `buildingNumber`, `roomName`, `blockNumber`, `roomType`, `floorNumber`) VALUES
(1, 3, 'Integrated Technology Building', 1, 'building', NULL),
(2, 3, 'Advanced Mechatronics Lab', 2, 'lab', 1),
(3, 3, 'Automation, Instrumentation, and Process Cont', 3, 'lab', 1),
(4, 3, 'Faculty Office (EMT/ECT)', 4, 'office', 1),
(5, 3, 'Office of the CIIT Dean', 5, 'office', 1),
(6, 3, 'Audio Visual Room (AVR)', 6, 'room', 1),
(7, 3, 'CIIT Accreditation Center', 7, 'office', 1),
(8, 3, 'Advanced Electrical and Electronics Circuits ', 8, 'lab', 2),
(9, 3, 'Communication and Digital Lab', 9, 'lab', 2),
(10, 3, 'Basic Electrical and Electronics Circuits Lab', 10, 'lab', 2),
(11, 3, 'Basic Electrical and Electronics Circuits Lab', 11, 'lab', 2),
(12, 3, 'IT Solution Incubation Lab', 12, 'lab', 2),
(13, 3, 'IT Faculty Office', 13, 'office', 2),
(14, 3, 'Electrical Machines, Installation and Motor C', 14, 'lab', 2),
(15, 4, 'ROTC Building', 1, 'building', NULL),
(16, 4, 'Temporary Extension Storage Room 2 - ROTC Bui', 1, 'storage room', 1),
(17, 4, 'Building and Grounds Maintenance Section', 2, 'room', 1),
(18, 4, 'Child Minding GAD Resource Center', 3, 'room', 1),
(19, 4, 'Supply Office', 4, 'office', 1),
(20, 4, 'Audio Visual Center', 5, 'room', 1),
(21, 5, 'Old Engineering Building', 1, 'build', NULL),
(22, 5, 'Comfort Room - Old Engineering Building – 1st', 1, 'amenity', 1),
(23, 5, 'Garments Lab - Old Engineering Building', 2, 'lab', 1),
(24, 5, 'Temporary Extension Storage Room 3', 2, 'storage room', 1),
(25, 5, 'Lecture Room 103 - Old Engineering Building', 2, 'room', 1),
(26, 5, 'Lecture Room 104 - Old Engineering Building', 3, 'room', 1),
(27, 5, 'Lecture Room 105 - Old Engineering Building', 3, 'room', 1),
(28, 5, 'MUST Employees Multipurpose Cooperative ', 3, 'office', 1),
(29, 5, 'Office of the Alumni Federation', 4, 'office', 1),
(30, 5, 'Temporary Extension Storage Room 2 - Old Engineering Building', 4, 'storage room', 1),
(31, 5, 'Temporary Extension Storage Room 1 - Old Engineering Building', 4, 'storage room', 1),
(32, 5, 'Civil and Sanitary Works Station', 4, 'room', 1),
(33, 9, 'CITC Building', 1, 'building', NULL),
(34, 9, 'Office of the Dean - CITC Building', 1, 'office', 1),
(35, 9, 'Comfort Room - CITC Building 1st floor', 2, 'amenity', 1),
(36, 9, 'Strategic Communication Office (StratComm) - CITC Building', 3, 'office', 1),
(37, 9, 'Office of the VP Administration and Legal Affairs - CITC Building', 4, 'office', 1),
(38, 9, 'Infrastructure Planning and Facilities Development Office- CITC Building', 5, 'office', 1),
(39, 9, 'Career Center 1 - CITC Building', 6, 'room', 1),
(40, 9, 'Career Center 2 - CITC Building', 6, 'room', 1),
(41, 9, 'Multimedia Lab 1 - CITC Building', 1, 'lab', 2),
(42, 9, 'JEEP Start Lab/Multimedia Lab - CITC Building', 2, 'lab', 2),
(43, 9, 'Multimedia Lab 2 - CITC Building', 1, 'lab', 2),
(44, 9, 'Data Science Lab - CITC Building', 2, 'lab', 2),
(45, 9, 'Research Lab - CITC Building', 3, 'lab', 2),
(46, 9, 'Computer Lab 206 - CITC Building', 4, 'lab', 2),
(47, 9, 'Comfort Room- CITC Building 2nd  floor', 3, 'amenity', 2),
(48, 9, 'Computer Lab 301 - CITC Building', 5, 'lab', 3),
(49, 9, 'Computer Lab 302 - CITC Building', 5, 'lab', 3),
(50, 9, 'Computer Lab 303 - CITC Building', 5, 'lab', 3),
(51, 9, 'Computer Lab 304 - CITC Building', 6, 'lab', 3),
(52, 9, 'Computer Lab 305 - CITC Building', 6, 'lab', 3),
(53, 9, 'Computer Lab 306 - CITC Building', 6, 'lab', 3),
(54, 9, 'Faculty Room - CITC Building', 2, 'lab', 3),
(55, 9, 'Discussion Room - CITC Building', 6, 'lab', 3),
(56, 9, 'CISCO Networking Lab 1 - CITC Building', 6, 'lab', 3),
(57, 9, 'Comfort Room-CITC Building 3rd  floor', 2, 'amenity', 3),
(58, 9, 'Faculty Office (IT Dept) - CITC Building', 1, 'office', 4),
(59, 9, 'CDO BITES (Business Incubation Technology Entrepreneurship and Startups) 1 - CITC Building', 2, 'office', 4),
(60, 9, 'CDO BITES (Business Incubation Technology Entrepreneurship and Startups) 2 - CITC Building', 2, 'office', 4),
(61, 9, 'CDO BITES (Business Incubation Technology Entrepreneurship and Startups) 3 - CITC Building', 3, 'office', 4),
(62, 9, 'ICT AVR - CITC Building', 4, 'office', 4),
(63, 14, 'Finance and Accounting Building', 1, 'building', NULL),
(64, 14, 'SHS STEM', 1, 'room', 1),
(65, 14, 'SHS 102 - Finance and Accounting Building', 2, 'room', 1),
(66, 14, 'SHS 103 - Finance and Accounting Building', 2, 'room', 1),
(67, 14, 'SHS 104 - Finance and Accounting Building', 3, 'room', 1),
(68, 14, 'SHS Faculty Room', 1, 'office', 1),
(69, 14, 'SHS 106 - Finance and Accounting Building', 6, 'room', 1),
(70, 14, 'SHS 107 - Finance and Accounting Building', 7, 'room', 1),
(71, 14, 'SHS 108 - Finance and Accounting Building', 8, 'room', 1),
(72, 16, 'Commission on Audit', 2, 'office', 1),
(73, 16, 'ED Display Center (Including Cashiering and Assessment)', 3, 'office', 1),
(74, 16, 'Accounting Office', 3, 'office', 1),
(75, 16, 'Electrical Room', 2, 'room', 1),
(76, 16, 'Gym', 1, 'gym', 1),
(77, 16, 'Physical Education Unit', 3, 'room', 1),
(78, 16, 'FAESO', 3, 'office', 1),
(79, 16, 'Junior Philippine Institute of Civil Engineers', NULL, 'office', 1),
(80, 16, 'Mechanical Electrical Workstation', 2, 'room', 1),
(81, 16, 'JPSME', 2, 'room', 1),
(82, 16, 'Leadership Empowerment and Development Society (LEADS)', 1, 'office', 1),
(83, 16, 'DRER Memorial Hall', 1, 'building', 1),
(84, 19, 'Science Centrum Building', 1, 'building', 1),
(85, 19, 'Armory', 1, 'room', 1),
(86, 19, 'SHS 8', 1, 'room', 1),
(87, 23, 'Learning Resource Center (LRC)', 1, 'building', NULL),
(88, 23, 'Office of the Mechanical and Electrical Works Unit/Office of the Inspection Section', 1, 'office', 1),
(89, 23, 'Garments Unit', 1, 'office', 1),
(90, 23, 'Center for Artificial Intelligence', 2, 'office', 1),
(91, 23, 'Office of the Registrar', 2, 'office', 1),
(92, 23, '21st Century Classroom', 3, 'room', 1),
(93, 23, 'Dept. of Technology Communication Management Office', 3, 'office', 1),
(94, 23, 'Office of the Director for Library and Audio-Visual Services', 3, 'office', 1),
(95, 23, 'Graduates Library', 2, 'library', 2),
(96, 23, 'Comfort Room - Learning Resource Center 2nd floor', 2, 'amenity', 2),
(97, 23, 'E-Library', 1, 'library', 2),
(98, 23, 'Center for Innovative Teaching and Learning (CITL)', 1, 'office', 2),
(99, 23, 'Library', 1, 'library', 3),
(100, 23, 'Center for Innovation and Technology Solutions Division', 1, 'office', 4),
(101, 23, 'NTC Electronic Data Governance and Evaluation', 2, 'office', 4),
(102, 23, 'USTP Balubal Extension Office', 2, 'office', 4),
(103, 23, 'NorMin Messaging Hub Corner', 3, 'room', 4),
(104, 24, 'Food Trade Building', 1, 'building', 1),
(105, 24, 'Automotive Servicing NC1 Workshop Area', 2, 'workshop', 1),
(106, 24, 'Automotive Servicing NC1 Lecture Area', 2, 'room', 1),
(107, 24, 'EIM NC2 Lecture Area', 1, 'room', 1),
(108, 24, 'EIM NC2 Workshop Area', 2, 'workshop', 1),
(109, 24, 'EPAS NC2 Lecture Area', 2, 'room', 1),
(110, 24, 'EPAS NC2 Workshop Area', 1, 'workshop', 1),
(111, 24, 'LRC', 3, 'room', 1),
(112, NULL, 'NMMEIC', 1, 'building', NULL),
(113, 25, 'Food Innovation Center', 1, 'building', 1),
(114, 25, 'USTP Spiritual Ministry', 1, 'room', 1),
(115, 25, 'Lecture Room – 102 - Food Innovation Center', 2, 'room', 1),
(116, 25, 'Lecture Room – 103 - Food Innovation Center', 2, 'room', 1),
(117, 25, 'Complementary Food Lab', 1, 'lab', 2),
(118, 25, 'Packaging Area', 2, 'room', 2),
(119, 28, 'Old Science Building', 1, 'building', 1),
(120, 28, 'Tailor’s Shop', 1, 'shop', 1),
(121, 28, 'Training Room', 2, 'room', 1),
(122, 28, 'Comfort Room - Old Science Building', 4, 'amenity', 1),
(123, 28, 'University City Scholar Office', 2, 'office', 1),
(124, 28, 'Lecture Room 102 - Old Science Building', 3, 'room', 1),
(125, 28, 'Lecture Room 103 - Old Science Building', 3, 'room', 1),
(126, 28, 'Lecture Room 104 - Old Science Building', 4, 'room', 1),
(127, 28, 'Lecture Room 105 - Old Science Building', 4, 'room', 1),
(128, 28, 'Lecture Room 106 - Old Science Building', 5, 'room', 1),
(129, 28, 'Lecture Room 107 - Old Science Building', 5, 'room', 1),
(130, 28, 'Lecture Room 108 - Old Science Building', 5, 'room', 1),
(131, 28, 'Lab Management Office - Old Science Building', 6, 'office', 1),
(132, 28, 'Lecture Room 110 - Old Science Building', 6, 'room', 1),
(133, 28, 'Chemistry Lab 111', 6, 'lab', 1),
(134, 41, 'Science Complex', NULL, 'building', NULL),
(135, 41, 'Office of the Dean - Science Complex', 1, 'office', 1),
(136, 41, 'Comfort Room - Science Complex 1st floor', 3, 'amenity', 1),
(137, 41, 'Strategic Communication Office (StratComm) - Science Complex', 4, 'office', 1),
(138, 41, 'Office of the VP Administration and Legal Affairs- Science Complex', 4, 'office', 1),
(139, 41, 'Infrastructure Planning and Facilities Development Office- Science Complex', 5, 'office', 1),
(140, 41, 'Career Center 1 - Science Complex', 6, 'room', 1),
(141, 41, 'Career Center 2 - Science Complex', 6, 'room', 1),
(142, 41, 'Multimedia Lab 1', 1, 'lab', 2),
(143, 41, 'JEEP Start Lab/Multimedia Lab - Science Complex', 1, 'lab', 2),
(144, 41, 'Multimedia Lab 2 - Science Complex', 2, 'lab', 2),
(145, 41, 'Data Science Lab - Science Complex', 2, 'lab', 2),
(146, 41, 'Research Lab - Science Complex', 3, 'lab', 2),
(147, 41, 'Computer Lab 206 - Science Complex', 4, 'lab', 2),
(148, 41, 'Comfort Room - Science Complex 2nd floor', 3, 'amenity', 2),
(149, 41, 'Computer Lab 301 - Science Complex', 1, 'lab', 3),
(150, 41, 'Computer Lab 302 - Science Complex', 1, 'lab', 3),
(151, 41, 'Computer Lab 303 - Science Complex', 2, 'lab', 3),
(152, 41, 'Computer Lab 304 - Science Complex', 2, 'lab', 3),
(153, 41, 'Computer Lab 305 - Science Complex', 3, 'lab', 3),
(154, 41, 'Computer Lab 306 - Science Complex', 3, 'lab', 3),
(155, 41, 'Faculty Room - Science Complex', 1, 'room', 3),
(156, 41, 'Discussion Room - Science Complex', 2, 'room', 3),
(157, 41, 'CISCO Networking Lab 1 - Science Complex', 5, 'lab', 3),
(158, 41, 'Comfort Room - Science Complex 3rd floor', 3, 'amenity', 3),
(159, 41, 'Faculty Office (IT Dept) - Science Complex', 1, 'office', 4),
(160, 41, 'CDO BITES (Business Incubation Technology Entrepreneurship and Startups) - Science Complex', 1, NULL, 4),
(162, 20, 'Cafeteria', 1, 'food', 1),
(163, 20, 'Canteen', 1, 'food', 1);

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `scheduleID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `roomID` int(11) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`scheduleID`, `userID`, `roomID`, `title`, `time`, `date`, `description`) VALUES
(1, 59, 34, 'Mag School ', '3:49am - 3:51pm ', 'THU', 'blabla'),
(3, 59, 3, 'Ambot', '5:05am - 5:05am ', 'FRI', 'blabla'),
(4, 59, 95, 'Mangawat Og Libro', '5:16am - 6:15am ', 'THU', 'blabla'),
(6, 59, 2, 'asasd', '4:16pm - 5:16am ', 'MON', 'blabla'),
(8, 59, 38, 'asdasdas', '4:19pm - 6:17am ', 'MON', 'blabla'),
(9, 61, 46, 'R5 Class', '7:00am - 10:00am ', 'MON', 'blabla'),
(10, 61, 48, 'r6 class', '5:44am - 7:44am ', 'THU', 'blabla'),
(11, 61, 6, 'Mag Klasi', '2:49am - 12:48am ', 'FRI', 'blabla'),
(12, 60, 33, 'Mang Chixssss', '6:00pm - 6:01am ', 'FRI', 'blabla'),
(13, 74, 99, 'Mag Klass', '7:08am - 7:09pm ', 'FRI', 'blabla'),
(14, 75, 46, 'SOft eng Class', '8:41am - 8:40am ', 'SAT', 'blabla'),
(15, 75, 22, 'Exam', '7:41pm - 7:40am ', 'FRI', 'blabla'),
(16, 60, 95, 'Maligo', '12:48am - 1:46am ', 'WED', 'blabla'),
(17, 60, 2, 'asdsad', '10:51pm - 10:52am ', 'THU', 'blabla'),
(18, 60, 1, 'asad', '10:51pm - 10:51pm ', 'WED', 'blabla'),
(19, 60, 1, 'asad', '10:51pm - 10:51pm ', 'WED', 'blabla'),
(20, 60, 1, 'asad', '10:51pm - 10:51pm ', 'WED', 'blabla'),
(21, 60, 1, 'asad', '10:51pm - 10:51pm ', 'WED', 'blabla'),
(22, 60, 11, 'asd', '10:53pm - 11:52am ', 'TUE', 'blabla'),
(23, 60, 11, 'asd', '10:54pm - 11:53pm ', 'TUE', 'blabla');

-- --------------------------------------------------------

--
-- Table structure for table `searchlogs`
--

CREATE TABLE `searchlogs` (
  `searchID` int(11) NOT NULL,
  `userID` varchar(100) DEFAULT NULL,
  `searchText` varchar(255) DEFAULT NULL,
  `timeStamp` varchar(100) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `searchlogs`
--

INSERT INTO `searchlogs` (`searchID`, `userID`, `searchText`, `timeStamp`, `date`) VALUES
(1, '$userID', '$searchtext', '$timestamp', '$date'),
(2, 'nico', 'Basic Electrical and Electronics Circuits Lab', '11:44am', 'January-17-2023'),
(3, 'nico', 'Office of the CIIT Dean', '11:45am', 'January-17-2023'),
(4, 'nico', 'Advanced Mechatronics Lab', '11:48am', 'January-17-2023'),
(5, 'nico', 'Faculty Office (EMT-ECT)', '11:49am', 'January-17-2023'),
(6, 'nico', 'Audio Visual Room (AVR)', '11:52am', 'January-17-2023'),
(7, '63', 'EPAS NC2 Lecture Area', '11:53am', 'January-17-2023'),
(8, '63', 'Library', '11:54am', 'January-17-2023'),
(9, '60', 'Audio Visual Room (AVR)', '12:09pm', 'January-17-2023'),
(10, 'undefined', 'Infrastructure Planning and Facilities Development Office- CITC Building', '1:58pm', 'January-17-2023'),
(11, 'undefined', '21st Century Classroom', '3:34pm', 'January-17-2023'),
(12, '70', 'Office of the CIIT Dean', '4:50pm', 'January-17-2023'),
(13, '', '', '', ''),
(14, '70', 'Office of the CIIT Dean', '5:53pm', 'January-17-2023'),
(15, '', '', '', ''),
(16, '70', 'CITC Building', '5:53pm', 'January-17-2023'),
(17, 'undefined', '21st Century Classroom', '11:37pm', 'January-17-2023'),
(18, 'undefined', 'Audio Visual Room (AVR)', '12:10am', 'January-18-2023'),
(19, '61', 'Advanced Mechatronics Lab', '12:12am', 'January-18-2023'),
(20, '62', 'Faculty Office (EMT-ECT)', '12:15am', 'January-18-2023'),
(21, 'undefined', 'Office of the CIIT Dean', '12:17am', 'January-18-2023'),
(22, 'undefined', 'Faculty Office (EMT-ECT)', '12:17am', 'January-18-2023'),
(23, '60', 'Faculty Office (EMT-ECT)', '10:12am', 'January-18-2023'),
(24, '60', 'Library', '10:13am', 'January-18-2023'),
(25, '60', 'Library', '10:16am', 'January-18-2023'),
(26, '60', '21st Century Classroom', '10:19am', 'January-18-2023'),
(27, '60', 'Computer Lab 206 - CITC Building', '10:19am', 'January-18-2023'),
(28, '60', 'CIIT Accreditation Center', '11:13am', 'January-18-2023'),
(29, '60', 'Faculty Office (EMT-ECT)', '11:13am', 'January-18-2023'),
(30, '60', '21st Century Classroom', '11:21am', 'January-18-2023'),
(31, '60', 'Audio Visual Room (AVR)', '11:24am', 'January-18-2023'),
(32, '60', 'Faculty Office (EMT-ECT)', '12:29pm', 'January-18-2023'),
(33, '59', 'Faculty Office (EMT-ECT)', '2:51pm', 'January-18-2023'),
(34, '60', 'Faculty Office (EMT-ECT)', '8:48pm', 'January-18-2023'),
(35, '60', 'Multimedia Lab 2 - CITC Building', '8:48pm', 'January-18-2023'),
(36, '60', 'Office of the CIIT Dean', '2:56pm', 'January-19-2023'),
(37, '59', '21st Century Classroom', '4:13pm', 'January-19-2023'),
(38, '61', 'Integrated Technology Building', '12:46pm', 'January-20-2023'),
(39, '61', 'E-Library', '12:46pm', 'January-20-2023'),
(40, '60', 'Library', '1:08pm', 'January-20-2023'),
(41, '60', 'E-Library', '3:10pm', 'January-20-2023'),
(42, '60', 'Dept. of Technology Communication Management Office', '3:57pm', 'January-20-2023'),
(43, '60', 'CITC Building', '3:58pm', 'January-20-2023'),
(44, '60', 'Cafeteria', '4:30pm', 'January-20-2023'),
(45, '60', 'Canteen', '4:30pm', 'January-20-2023'),
(46, '60', 'Faculty Office (EMT ECT)', '5:54pm', 'January-20-2023'),
(47, '74', 'Canteen', '7:02pm', 'January-20-2023'),
(48, '74', 'CITC Building', '7:02pm', 'January-20-2023'),
(49, '60', 'Office of the CIIT Dean', '8:59pm', 'January-20-2023'),
(50, '60', 'Temporary Extension Storage Room 2 - Old Engineering Building', '9:00pm', 'January-20-2023'),
(51, '60', 'Library', '10:01pm', 'January-20-2023'),
(52, '60', 'Library', '10:05pm', 'January-20-2023'),
(53, '60', 'Library', '10:05pm', 'January-20-2023');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `FullName` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `PhoneNum` int(11) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `UserType` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `FullName`, `Email`, `PhoneNum`, `password`, `UserType`) VALUES
(1, 'ustp_admin', 'admin.ustp@gmail.com', 2147483647, 'gwapoko', 'admin'),
(2, 'Ian Caulin', 'nico@gmail.com', 2147483647, 'e258570d6776dfe546b8', 'not-u'),
(3, 'Kyle Ray Gonzales', 'kyleray@gmail.com', 2147483647, '6e11873b9d9d94a44058', 'not-u'),
(4, 'Jhonny Sins', 'johnysin@gmail.com', 2147483647, '8f887c11f88127eb91b5', 'user'),
(5, 'Marry Joy Colis', 'marryjoycolis@gmail.', 2147483647, 'a33e1a5b8ca5f02a1831', 'user'),
(6, 'Aubrey Faye Lauron', 'aubreylauron@gmai.co', 2147483647, '6ab82df8d7dd4eb6d608', 'user'),
(7, 'Mark Gil Russiana', 'markgil@gmail.com', 2147483647, '8e381715d215cc7b4d94', 'user'),
(8, 'Liza Soberano', 'lizasoberano@gmail.c', 2147483647, '24f6e3dc1bbc5a5dfb1e', 'user'),
(9, 'Tomas Train', 'tomastrain@gmail.com', 2147483647, '4b506c2968184be185f6', 'user'),
(51, 'ian  asdasd123', 'asdasdasd@asdsad.com', NULL, '5fd924625f6ab16a19cc', 'user'),
(59, 'nico asd ', '23@gmail.com', NULL, '123', 'user'),
(60, 'Ian Caulin ', 'nic@g.com', NULL, '123', 'user'),
(61, 'Cyfrid Gwapo ', 'cyfrid@gmail.com', NULL, '1234', 'user'),
(62, 'Nicolas Caulin ', 'nicolas@gmail.com', NULL, '123', 'user'),
(63, 'Ian Caulin ', 'nicolas123@gmail.com', NULL, '123', 'user'),
(64, 'asd123 asd ', 'sadas@asdsa.cas', NULL, 'asd', 'user'),
(65, 'asd asd ', 'asdasd@asdasd.com', NULL, 'asd', 'user'),
(66, 'asd asd ', 'asdasd@asdasd.com', NULL, 'asd', 'user'),
(67, 'asdLAST 123 ', 'asdasd@asdasd.com', NULL, 'asd', 'user'),
(68, 'asd asd ', 'asdasd@asdasd.com', NULL, 'asdasd', 'not-u'),
(69, 'asdd asd ', 'asdasd@asdasd.com', NULL, '@iannico123', 'not-u'),
(70, 'Ian Nico Gwapo ', 'ian@gmail.com', NULL, '@caulin322', 'user'),
(71, 'asd asd ', 'asdasd@asdasd.com', NULL, '@qwe123', 'not-u'),
(75, 'Ian Gwapo Caulin ', 'nicolas@gmi.com', NULL, '@qwe123', 'user'),
(76, 'asd asdasd ', 'asda@asd.com', NULL, '@qwe123', 'not-u'),
(77, 'asd asdasd ', 'asda@asd.com', NULL, '@qwe123', 'not-u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`buildingID`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventID`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`roomID`),
  ADD KEY `buildingNumber` (`buildingNumber`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`scheduleID`);

--
-- Indexes for table `searchlogs`
--
ALTER TABLE `searchlogs`
  ADD PRIMARY KEY (`searchID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `buildingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eventID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `roomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `scheduleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `searchlogs`
--
ALTER TABLE `searchlogs`
  MODIFY `searchID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`buildingNumber`) REFERENCES `buildings` (`buildingID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
