-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2024 at 03:42 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `adderss` varchar(255) NOT NULL,
  `geo` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_catchphrase` varchar(255) NOT NULL,
  `company_bs` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `email`, `adderss`, `geo`, `phone`, `website`, `company_name`, `company_catchphrase`, `company_bs`, `created_at`) VALUES
(1, 'Leanne Graham dfvsd', 'Bret', 'Sincere@april.biz', 'Apt.556,Kulas Light,Gwenborough,92998-3874', '-37.3159-81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets', '2024-02-28 13:09:14'),
(2, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', 'Suite 879,Victor Plains, Wisokyburgh, 90566-7771', '-43.9509-34.4618', '010-692-6593 x09125', 'anastasia.net', 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains', '2024-02-28 13:11:29'),
(3, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', ' Suite 847,Douglas Extension, McKenziehaven, 59590-4157', '-68.6102-47.0653', '1-463-123-4447', 'ramiro.info', 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications', '2024-02-28 13:12:52'),
(4, 'Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', 'Apt. 692,Hoeger Mall, South Elvis, 53919-4257', '29.4572, -164.2990', '493-170-9623 x156', 'kale.biz', 'Robel-Corkery', 'Multi-tiered zero tolerance productivity', 'transition cutting-edge web services', '2024-02-28 13:14:17'),
(5, 'Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', 'Suite 351, Skiles Walks, Roscoeview, 33263', '-31.8129, 62.5342', '(254)954-1289', 'demarco.info', 'Keebler LLC', 'User-centric fault-tolerant solution', 'revolutionize end-to-end systems', '2024-02-28 13:14:41'),
(6, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', 'Apt. 950,Norberto Crossing, South Christy, 23505-1337', '-71.4197, 71.7478', '1-477-935-8478 x6430', 'ola.org', 'Considine-Lockman', 'Synchronised bottom-line interface', 'e-enable innovative applications', '2024-02-28 13:15:10'),
(7, 'Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', ' Suite 280,Rex Trail, Howemouth, 58804-1099', '24.8918, 21.8984', '210.067.6132', 'elvis.io', 'Johns Group', 'Configurable multimedia task-force', 'generate enterprise e-tailers', '2024-02-28 13:15:42'),
(8, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', 'Suite 729,Ellsworth Summit, Aliyaview, 45169', '-14.3990, -120.7677', '586.493.6943 x140', 'jacynthe.com', 'Abernathy Group', 'Implemented secondary concept', 'e-enable extensible e-tailers', '2024-02-28 13:16:11'),
(9, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', 'Suite 449,Dayna Park, Bartholomebury, 76495-3109', '24.6463, -168.8889', '(775)976-6794 x41206', 'conrad.com', 'Yost and Sons', 'Switchable contextually-based project', 'aggregate real-time technologies', '2024-02-28 13:16:35'),
(10, 'Clementina DuBuque . H', 'Moriah.Stanton hELLO', 'Rey.Padberg@karina.biz', ' Suite 19,Kattie Turnpike, Lebsackbury, 31428-2261', '-38.2386, 57.2232', '024-648-3804', 'ambrose.net', 'Hoeger LLC', 'Centralized empowering task-force', 'target end-to-end models', '2024-02-28 13:17:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
