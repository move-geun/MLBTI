-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: j7e202.p.ssafy.io    Database: mlbti
-- ------------------------------------------------------
-- Server version	8.0.30

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

--
-- Table structure for table `TESTS`
--

DROP TABLE IF EXISTS `TESTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TESTS` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(60) DEFAULT NULL,
  `age` int DEFAULT '0',
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `baseball_players`
--

DROP TABLE IF EXISTS `baseball_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baseball_players` (
  `uid` int NOT NULL,
  `full_name` varchar(60) DEFAULT NULL,
  `link` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `birth_date` varchar(45) DEFAULT NULL,
  `current_age` varchar(45) DEFAULT NULL,
  `birth_city` varchar(45) DEFAULT NULL,
  `birth_state_province` varchar(45) DEFAULT NULL,
  `birth_country` varchar(45) DEFAULT NULL,
  `height` varchar(45) DEFAULT NULL,
  `active` tinyint DEFAULT NULL,
  `primary_position_code` varchar(45) DEFAULT NULL,
  `primary_position_name` varchar(45) DEFAULT NULL,
  `primary_position_type` varchar(45) DEFAULT NULL,
  `primary_position_abbreviation` varchar(45) DEFAULT NULL,
  `use_name` varchar(45) DEFAULT NULL,
  `middle_name` varchar(45) DEFAULT NULL,
  `boxscore_name` varchar(45) DEFAULT NULL,
  `nick_name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `is_player` tinyint DEFAULT NULL,
  `is_verified` tinyint DEFAULT NULL,
  `death_date` varchar(45) DEFAULT NULL,
  `death_city` varchar(45) DEFAULT NULL,
  `death_state_province` varchar(45) DEFAULT NULL,
  `death_country` varchar(45) DEFAULT NULL,
  `last_played_date` varchar(45) DEFAULT NULL,
  `mlb_debut_date` varchar(45) DEFAULT NULL,
  `bat_side_code` varchar(45) DEFAULT NULL,
  `bat_side_description` varchar(45) DEFAULT NULL,
  `pitch_hand_code` varchar(45) DEFAULT NULL,
  `pitch_hand_description` varchar(45) DEFAULT NULL,
  `name_first_last` varchar(60) DEFAULT NULL,
  `name_slug` varchar(100) DEFAULT NULL,
  `first_last_name` varchar(60) DEFAULT NULL,
  `last_first_name` varchar(60) DEFAULT NULL,
  `last_init_name` varchar(45) DEFAULT NULL,
  `init_last_name` varchar(45) DEFAULT NULL,
  `full_fml_name` varchar(60) DEFAULT NULL,
  `full_lfm_name` varchar(60) DEFAULT NULL,
  `strike_zone_top` varchar(45) DEFAULT NULL,
  `strike_zone_bottom` varchar(45) DEFAULT NULL,
  `primary_number` varchar(45) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `img_url` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `batter`
--

DROP TABLE IF EXISTS `batter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batter` (
  `player_uid` int NOT NULL,
  `average` float DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `league` varchar(255) DEFAULT NULL,
  `left_ao_num` int DEFAULT NULL,
  `left_at_bat_num` int DEFAULT NULL,
  `left_bb_num` int DEFAULT NULL,
  `left_dp_num` int DEFAULT NULL,
  `left_game_num` int DEFAULT NULL,
  `left_hit_num` int DEFAULT NULL,
  `left_hr_num` int DEFAULT NULL,
  `left_ibb_num` int DEFAULT NULL,
  `left_ops` int DEFAULT NULL,
  `left_pa_num` int DEFAULT NULL,
  `leftr` int DEFAULT NULL,
  `left_rbi` int DEFAULT NULL,
  `left_sf_num` int DEFAULT NULL,
  `left_sh_num` int DEFAULT NULL,
  `left_threeb_hit_num` int DEFAULT NULL,
  `left_twob_hit_num` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `player_weather_tmi` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `right_ao_num` int DEFAULT NULL,
  `right_at_bat_num` int DEFAULT NULL,
  `right_bb_num` int DEFAULT NULL,
  `right_dp_num` int DEFAULT NULL,
  `right_game_num` int DEFAULT NULL,
  `right_hit_num` int DEFAULT NULL,
  `right_hr_num` int DEFAULT NULL,
  `right_ibb_num` int DEFAULT NULL,
  `right_ops` int DEFAULT NULL,
  `right_pa_num` int DEFAULT NULL,
  `rightr` int DEFAULT NULL,
  `right_rbi` int DEFAULT NULL,
  `right_sf_num` int DEFAULT NULL,
  `right_sh_num` int DEFAULT NULL,
  `right_threeb_hit_num` int DEFAULT NULL,
  `right_twob_hit_num` int DEFAULT NULL,
  `season` int DEFAULT NULL,
  `standard_deviation` float DEFAULT NULL,
  `team_name` varchar(255) DEFAULT NULL,
  `team_uid` int DEFAULT NULL,
  `uid` int NOT NULL,
  `leftaonum` int NOT NULL,
  `leftbbnum` int NOT NULL,
  `left_ball_num` int NOT NULL,
  `leftgonum` int NOT NULL,
  `leftibbnum` int NOT NULL,
  `left_rbi_num` int NOT NULL,
  `leftsfnum` int NOT NULL,
  `leftshnum` int NOT NULL,
  `left_strike_num` int NOT NULL,
  PRIMARY KEY (`player_uid`),
  KEY `FK3g8g0xvwag5mbfi4o37lfwk` (`team_uid`),
  CONSTRAINT `FK3g8g0xvwag5mbfi4o37lfwk` FOREIGN KEY (`team_uid`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `batters`
--

DROP TABLE IF EXISTS `batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batters` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` int DEFAULT NULL,
  `teams_uid` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_at_bat_num` int DEFAULT '0',
  `right_at_bat_num` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `left_ops` float DEFAULT '0',
  `right_ops` float DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_so_num` int DEFAULT '0',
  `right_so_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_sh_num` int DEFAULT '0',
  `right_sh_num` int DEFAULT '0',
  `left_sf_num` int DEFAULT '0',
  `right_sf_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT '0',
  `standard_deviation` float DEFAULT '0',
  `education` varchar(300) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `birthday` varchar(255) DEFAULT NULL,
  `height` float DEFAULT '0',
  `leftr` int DEFAULT '0',
  `rightr` int DEFAULT '0',
  `weight` float DEFAULT '0',
  `team_uid` int DEFAULT NULL,
  `league` varchar(255) DEFAULT NULL,
  `leftaonum` int NOT NULL,
  `leftbbnum` int NOT NULL,
  `leftgonum` int NOT NULL,
  `leftibbnum` int NOT NULL,
  `left_rbi_num` int NOT NULL,
  `leftsfnum` int NOT NULL,
  `leftshnum` int NOT NULL,
  `rightaonum` int NOT NULL,
  `rightbbnum` int NOT NULL,
  `rightgonum` int NOT NULL,
  `rightibbnum` int NOT NULL,
  `right_rbi_num` int NOT NULL,
  `rightsfnum` int NOT NULL,
  `rightshnum` int NOT NULL,
  `leftsonum` int NOT NULL,
  `rightsonum` int NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `batters_peoples_game_uid_index` (`player_uid`),
  KEY `FK8d03rxukmbfwy7v61hmk4ipga` (`team_uid`),
  CONSTRAINT `batters_peoples_game_uid` FOREIGN KEY (`player_uid`) REFERENCES `baseball_players` (`uid`),
  CONSTRAINT `FK8d03rxukmbfwy7v61hmk4ipga` FOREIGN KEY (`team_uid`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66197 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `batters_compare`
--

DROP TABLE IF EXISTS `batters_compare`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batters_compare` (
  `uid` int NOT NULL DEFAULT '0',
  `player_uid` int DEFAULT NULL,
  `season` int DEFAULT NULL,
  `teams_uid` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_at_bat_num` int DEFAULT '0',
  `right_at_bat_num` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `left_ops` float DEFAULT '0',
  `right_ops` float DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_so_num` int DEFAULT '0',
  `right_so_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_sh_num` int DEFAULT '0',
  `right_sh_num` int DEFAULT '0',
  `left_sf_num` int DEFAULT '0',
  `right_sf_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT '0',
  `standard_deviation` float DEFAULT '0',
  `education` varchar(300) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `birthday` varchar(255) DEFAULT NULL,
  `height` float DEFAULT '0',
  `leftr` int DEFAULT '0',
  `rightr` int DEFAULT '0',
  `weight` float DEFAULT '0',
  `team_uid` int DEFAULT NULL,
  `league` varchar(255) DEFAULT NULL,
  `leftaonum` int NOT NULL,
  `leftbbnum` int NOT NULL,
  `leftgonum` int NOT NULL,
  `leftibbnum` int NOT NULL,
  `left_rbi_num` int NOT NULL,
  `leftsfnum` int NOT NULL,
  `leftshnum` int NOT NULL,
  `rightaonum` int NOT NULL,
  `rightbbnum` int NOT NULL,
  `rightgonum` int NOT NULL,
  `rightibbnum` int NOT NULL,
  `right_rbi_num` int NOT NULL,
  `rightsfnum` int NOT NULL,
  `rightshnum` int NOT NULL,
  `leftsonum` int NOT NULL,
  `rightsonum` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cheering_comments`
--

DROP TABLE IF EXISTS `cheering_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cheering_comments` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `game_uid` int DEFAULT NULL,
  `home_team_name` varchar(60) DEFAULT NULL,
  `home_comments_num` varchar(60) DEFAULT NULL,
  `away_team_name` varchar(60) DEFAULT NULL,
  `away_comments_num` varchar(60) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `home_id` int DEFAULT NULL,
  `away_id` int DEFAULT NULL,
  `away_team_logo` varchar(255) DEFAULT NULL,
  `home_team_logo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `cheering_comments_game_uid_index` (`game_uid`),
  CONSTRAINT `FK2huy0n8gpwiji8cs56eygxl9e` FOREIGN KEY (`game_uid`) REFERENCES `live_games` (`game_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `confirmation_token`
--

DROP TABLE IF EXISTS `confirmation_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `confirmation_token` (
  `id` varchar(36) NOT NULL,
  `create_date` datetime(6) DEFAULT NULL,
  `expiration_date` datetime(6) DEFAULT NULL,
  `expired` bit(1) DEFAULT NULL,
  `last_modified_date` datetime(6) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_batter_counts`
--

DROP TABLE IF EXISTS `event_batter_counts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_batter_counts` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `strike` int DEFAULT NULL,
  `ball` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=196606 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_batters`
--

DROP TABLE IF EXISTS `event_batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_batters` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=1048561 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_check`
--

DROP TABLE IF EXISTS `event_check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_check` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `event` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_pitcher_counts`
--

DROP TABLE IF EXISTS `event_pitcher_counts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_pitcher_counts` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `strike` int DEFAULT NULL,
  `ball` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=524281 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_pitchers`
--

DROP TABLE IF EXISTS `event_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  `event` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=1114096 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `event_player`
--

DROP TABLE IF EXISTS `event_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_player` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `player_type` char(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `player_uid` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=7580992 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_type` char(20) DEFAULT NULL,
  `player_uid` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `game_uid` int unsigned DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `weather` varchar(20) DEFAULT NULL,
  `opponent_uid` int unsigned DEFAULT NULL,
  `event_index` smallint unsigned DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `player_main_position` varchar(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` tinyint unsigned DEFAULT NULL,
  `strikes` tinyint unsigned DEFAULT NULL,
  `balls` tinyint unsigned DEFAULT NULL,
  `outs` tinyint unsigned DEFAULT NULL,
  `inning` tinyint unsigned DEFAULT NULL,
  `is_top_inning` tinyint(1) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=23489679 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `events_sample`
--

DROP TABLE IF EXISTS `events_sample`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events_sample` (
  `uid` int NOT NULL DEFAULT '0',
  `player_type` char(20) DEFAULT NULL,
  `player_uid` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `game_uid` int unsigned DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `weather` varchar(20) DEFAULT NULL,
  `opponent_uid` int unsigned DEFAULT NULL,
  `event_index` smallint unsigned DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `player_main_position` varchar(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` tinyint unsigned DEFAULT NULL,
  `strikes` tinyint unsigned DEFAULT NULL,
  `balls` tinyint unsigned DEFAULT NULL,
  `outs` tinyint unsigned DEFAULT NULL,
  `inning` tinyint unsigned DEFAULT NULL,
  `is_top_inning` tinyint(1) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `game_raw_datas`
--

DROP TABLE IF EXISTS `game_raw_datas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_raw_datas` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `game_uid` int DEFAULT NULL,
  `game_raw_data` json DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `game_uid` (`game_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=227807 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `game_date` varchar(20) DEFAULT NULL,
  `game_id` int DEFAULT NULL,
  `away_id` int DEFAULT NULL,
  `away_name` varchar(60) DEFAULT NULL,
  `away_score` int DEFAULT NULL,
  `home_id` int DEFAULT NULL,
  `home_name` varchar(60) DEFAULT NULL,
  `home_score` int DEFAULT NULL,
  `current_inning` char(4) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `league_rank`
--

DROP TABLE IF EXISTS `league_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `league_rank` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `league_code` int DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL,
  `div_name` varchar(60) DEFAULT NULL,
  `div_rank` varchar(10) DEFAULT NULL,
  `elim_num` varchar(10) DEFAULT NULL,
  `gb` varchar(10) DEFAULT NULL,
  `l` int DEFAULT NULL,
  `league_rank` int DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `sport_rank` varchar(10) DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `w` int DEFAULT NULL,
  `wc_elim_num` varchar(10) DEFAULT NULL,
  `wc_gb` varchar(10) DEFAULT NULL,
  `wc_rank` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `live_game_data_pitchs`
--

DROP TABLE IF EXISTS `live_game_data_pitchs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_game_data_pitchs` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `live_game_data_uid` int DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `event` varchar(45) DEFAULT NULL,
  `event_type` varchar(45) DEFAULT NULL,
  `index` int DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `ball_code` varchar(45) DEFAULT NULL,
  `ball_description` varchar(45) DEFAULT NULL,
  `ball_speed` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=73713 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `live_game_datas`
--

DROP TABLE IF EXISTS `live_game_datas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_game_datas` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `event` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `inning` int DEFAULT NULL,
  `half` varchar(45) DEFAULT NULL,
  `index` int DEFAULT NULL,
  `bat_side` varchar(255) DEFAULT NULL,
  `batter_id` int DEFAULT NULL,
  `batter_name` varchar(255) DEFAULT NULL,
  `end_time` datetime(6) DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  `innning` int DEFAULT NULL,
  `is_complete` bit(1) NOT NULL,
  `live_game_pk` int DEFAULT NULL,
  `pitch_hand` varchar(255) DEFAULT NULL,
  `pitcher_id` int DEFAULT NULL,
  `pitcher_name` varchar(255) DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=66320611 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `live_games`
--

DROP TABLE IF EXISTS `live_games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `live_games` (
  `game_pk` int NOT NULL,
  `season` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `ampm` varchar(4) DEFAULT NULL,
  `abstract_game_state` varchar(10) DEFAULT NULL,
  `detailed_state` varchar(45) DEFAULT NULL,
  `away_id` int DEFAULT NULL,
  `away_name` varchar(45) DEFAULT NULL,
  `home_id` int DEFAULT NULL,
  `home_name` varchar(45) DEFAULT NULL,
  `league_id` int DEFAULT NULL,
  `league_name` varchar(45) DEFAULT NULL,
  `division_id` int DEFAULT NULL,
  `division_name` varchar(45) DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  `venue_name` varchar(45) DEFAULT NULL,
  `venue_time_offset` int DEFAULT NULL,
  `weather_temp` int DEFAULT NULL,
  `weather_wind` varchar(45) DEFAULT NULL,
  `abstarct_game_state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_pk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mail_confirm_keys`
--

DROP TABLE IF EXISTS `mail_confirm_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mail_confirm_keys` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `random_number` varchar(12) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `is_valid` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_batters`
--

DROP TABLE IF EXISTS `new_batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_batters` (
  `uid` int NOT NULL DEFAULT '0',
  `player_uid` int DEFAULT NULL,
  `season` int DEFAULT NULL,
  `teams_uid` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_at_bat_num` int DEFAULT '0',
  `right_at_bat_num` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `left_ops` float DEFAULT '0',
  `right_ops` float DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_so_num` int DEFAULT '0',
  `right_so_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_sh_num` int DEFAULT '0',
  `right_sh_num` int DEFAULT '0',
  `left_sf_num` int DEFAULT '0',
  `right_sf_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT '0',
  `standard_deviation` float DEFAULT '0',
  `education` varchar(300) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `birthday` varchar(255) DEFAULT NULL,
  `height` float DEFAULT '0',
  `leftr` int DEFAULT '0',
  `rightr` int DEFAULT '0',
  `weight` float DEFAULT '0',
  `team_uid` int DEFAULT NULL,
  `league` varchar(255) DEFAULT NULL,
  `leftaonum` int NOT NULL,
  `leftbbnum` int NOT NULL,
  `leftgonum` int NOT NULL,
  `leftibbnum` int NOT NULL,
  `left_rbi_num` int NOT NULL,
  `leftsfnum` int NOT NULL,
  `leftshnum` int NOT NULL,
  `rightaonum` int NOT NULL,
  `rightbbnum` int NOT NULL,
  `rightgonum` int NOT NULL,
  `rightibbnum` int NOT NULL,
  `right_rbi_num` int NOT NULL,
  `rightsfnum` int NOT NULL,
  `rightshnum` int NOT NULL,
  `leftsonum` int NOT NULL,
  `rightsonum` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_event_batter_counts`
--

DROP TABLE IF EXISTS `new_event_batter_counts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_event_batter_counts` (
  `uid` int NOT NULL DEFAULT '0',
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `strike` int DEFAULT NULL,
  `ball` int DEFAULT NULL,
  `count` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_event_batters`
--

DROP TABLE IF EXISTS `new_event_batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_event_batters` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=1245166 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_event_pitchers`
--

DROP TABLE IF EXISTS `new_event_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_event_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  `strikes` int DEFAULT '0',
  `balls` int DEFAULT '0',
  `outs` int DEFAULT '0',
  `rbi` int DEFAULT '0',
  `event` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=1114096 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_event_player`
--

DROP TABLE IF EXISTS `new_event_player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_event_player` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `player_type` char(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event` varchar(60) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `player_uid` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=2359261 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_events`
--

DROP TABLE IF EXISTS `new_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_events` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_type` char(20) DEFAULT NULL,
  `player_uid` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `game_uid` int unsigned DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `weather` varchar(20) DEFAULT NULL,
  `opponent_uid` int unsigned DEFAULT NULL,
  `event_index` smallint unsigned DEFAULT NULL,
  `event` varchar(60) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `player_main_position` varchar(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` tinyint unsigned DEFAULT NULL,
  `strikes` tinyint unsigned DEFAULT NULL,
  `balls` tinyint unsigned DEFAULT NULL,
  `outs` tinyint unsigned DEFAULT NULL,
  `inning` tinyint unsigned DEFAULT NULL,
  `is_top_inning` tinyint(1) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=46979363 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_game_raw_datas`
--

DROP TABLE IF EXISTS `new_game_raw_datas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_game_raw_datas` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `game_uid` int DEFAULT NULL,
  `game_raw_data` json DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `game_uid` (`game_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=227807 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_new_event_batter_counts`
--

DROP TABLE IF EXISTS `new_new_event_batter_counts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_new_event_batter_counts` (
  `uid` int NOT NULL DEFAULT '0',
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `strike` int DEFAULT NULL,
  `ball` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_new_event_batters`
--

DROP TABLE IF EXISTS `new_new_event_batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_new_event_batters` (
  `uid` int NOT NULL DEFAULT '0',
  `player_uid` int DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  KEY `index` (`player_uid`,`season`,`team`,`opponent_hand`,`event`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_new_event_pitchers`
--

DROP TABLE IF EXISTS `new_new_event_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_new_event_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  `strikes` int DEFAULT '0',
  `balls` int DEFAULT '0',
  `outs` int DEFAULT '0',
  `rbi` int DEFAULT '0',
  `event` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB AUTO_INCREMENT=1179631 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_new_events`
--

DROP TABLE IF EXISTS `new_new_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_new_events` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `player_type` char(20) DEFAULT NULL,
  `player_uid` int DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL,
  `game_uid` int unsigned DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `weather` varchar(20) DEFAULT NULL,
  `opponent_uid` int unsigned DEFAULT NULL,
  `event_index` smallint unsigned DEFAULT NULL,
  `event` varchar(60) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `player_main_position` varchar(20) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `rbi` tinyint unsigned DEFAULT NULL,
  `strikes` tinyint unsigned DEFAULT NULL,
  `balls` tinyint unsigned DEFAULT NULL,
  `outs` tinyint unsigned DEFAULT NULL,
  `inning` tinyint unsigned DEFAULT NULL,
  `is_top_inning` tinyint(1) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=23489533 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_new_pitchers`
--

DROP TABLE IF EXISTS `new_new_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_new_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int NOT NULL,
  `season` int NOT NULL,
  `team_uid` int DEFAULT '0',
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `birthday` varchar(60) DEFAULT NULL,
  `height` float DEFAULT '0',
  `weight` float DEFAULT '0',
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_er` int DEFAULT '0',
  `right_er` int DEFAULT '0',
  `left_not_my_er` int DEFAULT '0',
  `right_not_my_er` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT NULL,
  `standard_deviation` float DEFAULT NULL,
  `education` varchar(300) DEFAULT NULL,
  `win_num` int DEFAULT '0',
  `lose_num` int DEFAULT '0',
  `hold_num` int DEFAULT '0',
  `save_num` int DEFAULT '0',
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `primary_position_type` varchar(30) DEFAULT NULL,
  `primary_position_abbreviation` varchar(10) DEFAULT NULL,
  `ct_num` int DEFAULT '0',
  `balk_num` int DEFAULT '0',
  `pickoff_catch_num` int DEFAULT '0',
  `pickoff_num` int DEFAULT '0',
  `right_throw_ball_num` int DEFAULT '0',
  `left_throw_ball_num` int DEFAULT '0',
  `left_inning_num` int DEFAULT '0',
  `right_inning_num` int DEFAULT '0',
  `league` varchar(400) DEFAULT NULL,
  `left_k_num` int DEFAULT '0',
  `right_k_num` int DEFAULT '0',
  `left_rbi_num` int DEFAULT '0',
  `right_rbi_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_out_num` int DEFAULT '0',
  `right_out_num` int DEFAULT '0',
  `right_wild_pitch_num` int DEFAULT '0',
  `left_wild_pitch_num` int DEFAULT '0',
  `get_stolen_num` int DEFAULT '0',
  `left_count_num` int DEFAULT '0',
  `right_count_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  PRIMARY KEY (`uid`,`player_uid`,`season`),
  KEY `pitchers_baseball_players_game_uid_index` (`player_uid`),
  KEY `FKs4qip3g2b9rwka66fnvbpta4f` (`team_uid`),
  CONSTRAINT `new_new_pitchers_baseball_players_game_uid` FOREIGN KEY (`player_uid`) REFERENCES `baseball_players` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=43547 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_schedules`
--

DROP TABLE IF EXISTS `new_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_schedules` (
  `game_id` int NOT NULL,
  `game_datetime` varchar(45) NOT NULL,
  `game_date` varchar(45) DEFAULT NULL,
  `game_type` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `away_name` varchar(45) DEFAULT NULL,
  `home_name` varchar(45) DEFAULT NULL,
  `away_id` varchar(45) DEFAULT NULL,
  `home_id` varchar(45) DEFAULT NULL,
  `doubleheader` varchar(45) DEFAULT NULL,
  `game_num` varchar(45) DEFAULT NULL,
  `home_probable_pitcher` varchar(45) DEFAULT NULL,
  `away_probable_pitcher` varchar(45) DEFAULT NULL,
  `home_pitcher_note` varchar(2000) DEFAULT NULL,
  `away_pitcher_note` varchar(2000) DEFAULT NULL,
  `away_score` varchar(45) DEFAULT NULL,
  `home_score` varchar(45) DEFAULT NULL,
  `current_inning` varchar(45) DEFAULT NULL,
  `inning_state` varchar(45) DEFAULT NULL,
  `venue_id` varchar(45) DEFAULT NULL,
  `venue_name` varchar(45) DEFAULT NULL,
  `winning_team` varchar(45) DEFAULT NULL,
  `losing_team` varchar(45) DEFAULT NULL,
  `winning_pitcher` varchar(45) DEFAULT NULL,
  `losing_pitcher` varchar(45) DEFAULT NULL,
  `save_pitcher` varchar(45) DEFAULT NULL,
  `summary` varchar(1000) DEFAULT NULL,
  `uid` int NOT NULL,
  PRIMARY KEY (`game_id`,`game_datetime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `new_table`
--

DROP TABLE IF EXISTS `new_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `new_table` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `game_uid` int DEFAULT NULL,
  `game_raw_data` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `notices`
--

DROP TABLE IF EXISTS `notices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notices` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `content` varchar(60) DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_uid` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `FK5soca8bro6i1hqda9u54k5kfn` (`user_uid`),
  CONSTRAINT `FK5soca8bro6i1hqda9u54k5kfn` FOREIGN KEY (`user_uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pitchers`
--

DROP TABLE IF EXISTS `pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int NOT NULL,
  `season` int NOT NULL,
  `team_uid` int DEFAULT '0',
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `birthday` varchar(60) DEFAULT NULL,
  `height` float DEFAULT '0',
  `weight` float DEFAULT '0',
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_er` int DEFAULT '0',
  `right_er` int DEFAULT '0',
  `left_not_my_er` int DEFAULT '0',
  `right_not_my_er` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT NULL,
  `standard_deviation` float DEFAULT NULL,
  `education` varchar(300) DEFAULT NULL,
  `win_num` int DEFAULT '0',
  `lose_num` int DEFAULT '0',
  `hold_num` int DEFAULT '0',
  `save_num` int DEFAULT '0',
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `primary_position_type` varchar(30) DEFAULT NULL,
  `primary_position_abbreviation` varchar(10) DEFAULT NULL,
  `ct_num` int DEFAULT '0',
  `balk_num` int DEFAULT '0',
  `pickoff_catch_num` int DEFAULT '0',
  `pickoff_num` int DEFAULT '0',
  `right_throw_ball_num` int DEFAULT '0',
  `left_throw_ball_num` int DEFAULT '0',
  `left_inning_num` int DEFAULT '0',
  `right_inning_num` int DEFAULT '0',
  `league` varchar(400) DEFAULT NULL,
  `left_k_num` int DEFAULT '0',
  `right_k_num` int DEFAULT '0',
  `left_rbi_num` int DEFAULT '0',
  `right_rbi_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_out_num` int DEFAULT '0',
  `right_out_num` int DEFAULT '0',
  `right_wild_pitch_num` int DEFAULT '0',
  `left_wild_pitch_num` int DEFAULT '0',
  `get_stolen_num` int DEFAULT '0',
  `left_count_num` int DEFAULT '0',
  `right_count_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  PRIMARY KEY (`uid`,`player_uid`,`season`),
  KEY `pitchers_baseball_players_game_uid_index` (`player_uid`),
  KEY `FKs4qip3g2b9rwka66fnvbpta4f` (`team_uid`),
  CONSTRAINT `FKs4qip3g2b9rwka66fnvbpta4f` FOREIGN KEY (`team_uid`) REFERENCES `teams` (`id`),
  CONSTRAINT `pitchers_baseball_players_game_uid` FOREIGN KEY (`player_uid`) REFERENCES `baseball_players` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=43556 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_play_records`
--

DROP TABLE IF EXISTS `player_play_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_play_records` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `batter_id` int DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `season` int DEFAULT NULL,
  `game_uid` int DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_uids`
--

DROP TABLE IF EXISTS `player_uids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player_uids` (
  `uid` int NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sample_table`
--

DROP TABLE IF EXISTS `sample_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sample_table` (
  `uid` int DEFAULT NULL,
  `event_type` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedules` (
  `game_id` int NOT NULL,
  `game_datetime` varchar(45) NOT NULL,
  `game_date` varchar(45) DEFAULT NULL,
  `game_type` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `away_name` varchar(45) DEFAULT NULL,
  `home_name` varchar(45) DEFAULT NULL,
  `away_id` varchar(45) DEFAULT NULL,
  `home_id` varchar(45) DEFAULT NULL,
  `doubleheader` varchar(45) DEFAULT NULL,
  `game_num` varchar(45) DEFAULT NULL,
  `home_probable_pitcher` varchar(45) DEFAULT NULL,
  `away_probable_pitcher` varchar(45) DEFAULT NULL,
  `home_pitcher_note` varchar(2000) DEFAULT NULL,
  `away_pitcher_note` varchar(2000) DEFAULT NULL,
  `away_score` varchar(45) DEFAULT NULL,
  `home_score` varchar(45) DEFAULT NULL,
  `current_inning` varchar(45) DEFAULT NULL,
  `inning_state` varchar(45) DEFAULT NULL,
  `venue_id` varchar(45) DEFAULT NULL,
  `venue_name` varchar(45) DEFAULT NULL,
  `winning_team` varchar(45) DEFAULT NULL,
  `losing_team` varchar(45) DEFAULT NULL,
  `winning_pitcher` varchar(45) DEFAULT NULL,
  `losing_pitcher` varchar(45) DEFAULT NULL,
  `save_pitcher` varchar(45) DEFAULT NULL,
  `summary` varchar(1000) DEFAULT NULL,
  `uid` int NOT NULL,
  `away_potcher_note` varchar(255) DEFAULT NULL,
  `game_date_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`game_id`,`game_datetime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `simulation_results`
--

DROP TABLE IF EXISTS `simulation_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `simulation_results` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `simulation_result` json DEFAULT NULL,
  `game_uid` int DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `game_uid` (`game_uid`),
  KEY `simulation_results_game_uid_index` (`game_uid`),
  CONSTRAINT `simulation_results_game_raw_datas_game_uid` FOREIGN KEY (`game_uid`) REFERENCES `game_raw_datas` (`game_uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `starting_players`
--

DROP TABLE IF EXISTS `starting_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starting_players` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `date` varchar(10) DEFAULT NULL,
  `player_uid` int NOT NULL,
  `season` int NOT NULL,
  `team_uid` int DEFAULT '0',
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_detail_batters`
--

DROP TABLE IF EXISTS `team_detail_batters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_detail_batters` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `team_details_uid` int DEFAULT NULL,
  `game_num` int DEFAULT NULL,
  `hit_num` int DEFAULT NULL,
  `twob_hit_num` int DEFAULT NULL,
  `threeb_hit_num` int DEFAULT NULL,
  `hr_num` int DEFAULT NULL,
  `tba_num` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `rbi` int DEFAULT NULL,
  `ops` int DEFAULT NULL,
  `bb_num` int DEFAULT NULL,
  `ao_num` int DEFAULT NULL,
  `double_play_num` int DEFAULT NULL,
  `sb_num` int DEFAULT NULL,
  `sf_num` int DEFAULT NULL,
  `ibb_num` int DEFAULT NULL,
  `avg` float DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  KEY `team_details_uid_idx` (`team_details_uid`),
  CONSTRAINT `team_details_uid` FOREIGN KEY (`team_details_uid`) REFERENCES `team_details` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9594 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_detail_pitchers`
--

DROP TABLE IF EXISTS `team_detail_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_detail_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `team_details_uid` int DEFAULT NULL,
  `game_num` int DEFAULT NULL,
  `era` float DEFAULT NULL,
  `cg_num` int DEFAULT NULL,
  `sho_num` int DEFAULT NULL,
  `sv_num` int DEFAULT NULL,
  `svo_num` int DEFAULT NULL,
  `ip_num` float DEFAULT NULL,
  `hit_num` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `er_num` int DEFAULT NULL,
  `hr_num` int DEFAULT NULL,
  `bb_num` int DEFAULT NULL,
  `so_num` int DEFAULT NULL,
  `whip_num` float DEFAULT NULL,
  `ibb_num` int DEFAULT NULL,
  `hbp_num` int DEFAULT NULL,
  `win_num` int DEFAULT NULL,
  `lose_num` int DEFAULT NULL,
  `hold_num` int DEFAULT NULL,
  `avg` float DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  KEY `team_details_uid_idx` (`team_details_uid`),
  CONSTRAINT `team_detail_uid` FOREIGN KEY (`team_details_uid`) REFERENCES `team_details` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9594 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `team_details`
--

DROP TABLE IF EXISTS `team_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_details` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `season` int NOT NULL,
  `team_uid` int NOT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `avg` float DEFAULT NULL,
  `standard_deviation` float DEFAULT NULL,
  `rank` int DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`,`season`,`team_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=9594 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL,
  `name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `season` int DEFAULT NULL,
  `all_star_status` varchar(45) COLLATE utf8mb3_czech_ci DEFAULT NULL,
  `venue_id` int DEFAULT NULL,
  `venue_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `team_code` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `abbreviation` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_czech_ci DEFAULT NULL,
  `team_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `location_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `first_year_of_play` int DEFAULT NULL,
  `league_id` int DEFAULT NULL,
  `league_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `division_id` int DEFAULT NULL,
  `division_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `sport_id` int DEFAULT NULL,
  `sport_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `short_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `parent_org_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `parent_org_id` int DEFAULT NULL,
  `franchise_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `club_name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `logo` varchar(400) CHARACTER SET utf8mb3 COLLATE utf8mb3_czech_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_czech_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tmp_event_pitchers`
--

DROP TABLE IF EXISTS `tmp_event_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_event_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `team_name` varchar(60) DEFAULT NULL,
  `season` char(10) DEFAULT NULL,
  `opponent_hand` varchar(6) DEFAULT NULL,
  `event_type` varchar(60) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `is_hit` bit(1) DEFAULT b'0',
  `at_bat` bit(1) DEFAULT b'0',
  `pa` bit(1) DEFAULT b'0',
  `strikes` int DEFAULT '0',
  `balls` int DEFAULT '0',
  `outs` int DEFAULT '0',
  `rbi` int DEFAULT '0',
  `event` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `index` (`player_uid`,`season`,`event_type`,`opponent_hand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tmp_new_new_pitchers`
--

DROP TABLE IF EXISTS `tmp_new_new_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_new_new_pitchers` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `player_uid` int NOT NULL,
  `season` int NOT NULL,
  `team_uid` int DEFAULT '0',
  `team_name` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `birthday` varchar(60) DEFAULT NULL,
  `height` float DEFAULT '0',
  `weight` float DEFAULT '0',
  `position` varchar(10) DEFAULT NULL,
  `left_hit_num` int DEFAULT '0',
  `right_hit_num` int DEFAULT '0',
  `left_twob_hit_num` int DEFAULT '0',
  `right_twob_hit_num` int DEFAULT '0',
  `left_threeb_hit_num` int DEFAULT '0',
  `right_threeb_hit_num` int DEFAULT '0',
  `left_hr_num` int DEFAULT '0',
  `right_hr_num` int DEFAULT '0',
  `left_pa_num` int DEFAULT '0',
  `right_pa_num` int DEFAULT '0',
  `left_er` int DEFAULT '0',
  `right_er` int DEFAULT '0',
  `left_not_my_er` int DEFAULT '0',
  `right_not_my_er` int DEFAULT '0',
  `left_game_num` int DEFAULT '0',
  `right_game_num` int DEFAULT '0',
  `left_bb_num` int DEFAULT '0',
  `right_bb_num` int DEFAULT '0',
  `left_ao_num` int DEFAULT '0',
  `right_ao_num` int DEFAULT '0',
  `left_dp_num` int DEFAULT '0',
  `right_dp_num` int DEFAULT '0',
  `left_ibb_num` int DEFAULT '0',
  `right_ibb_num` int DEFAULT '0',
  `player_weather_tmi` varchar(3000) DEFAULT NULL,
  `average` float DEFAULT NULL,
  `standard_deviation` float DEFAULT NULL,
  `education` varchar(300) DEFAULT NULL,
  `win_num` int DEFAULT '0',
  `lose_num` int DEFAULT '0',
  `hold_num` int DEFAULT '0',
  `save_num` int DEFAULT '0',
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `primary_position_type` varchar(30) DEFAULT NULL,
  `primary_position_abbreviation` varchar(10) DEFAULT NULL,
  `ct_num` int DEFAULT '0',
  `balk_num` int DEFAULT '0',
  `pickoff_catch_num` int DEFAULT '0',
  `pickoff_num` int DEFAULT '0',
  `right_throw_ball_num` int DEFAULT '0',
  `left_throw_ball_num` int DEFAULT '0',
  `left_inning_num` int DEFAULT '0',
  `right_inning_num` int DEFAULT '0',
  `league` varchar(400) DEFAULT NULL,
  `left_k_num` int DEFAULT '0',
  `right_k_num` int DEFAULT '0',
  `left_rbi_num` int DEFAULT '0',
  `right_rbi_num` int DEFAULT '0',
  `left_go_num` int DEFAULT '0',
  `right_go_num` int DEFAULT '0',
  `left_out_num` int DEFAULT '0',
  `right_out_num` int DEFAULT '0',
  `right_wild_pitch_num` int DEFAULT '0',
  `left_wild_pitch_num` int DEFAULT '0',
  `get_stolen_num` int DEFAULT '0',
  `left_count_num` int DEFAULT '0',
  `right_count_num` int DEFAULT '0',
  `left_ball_num` int DEFAULT '0',
  `right_ball_num` int DEFAULT '0',
  `left_strike_num` int DEFAULT '0',
  `right_strike_num` int DEFAULT '0',
  `right_rbi` int DEFAULT '0',
  `left_rbi` int DEFAULT '0',
  PRIMARY KEY (`uid`,`player_uid`,`season`),
  KEY `pitchers_baseball_players_game_uid_index` (`player_uid`),
  KEY `FKs4qip3g2b9rwka66fnvbpta4f` (`team_uid`),
  CONSTRAINT `tmp_new_new_pitchers_baseball_players_game_uid` FOREIGN KEY (`player_uid`) REFERENCES `baseball_players` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=44849 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_teams`
--

DROP TABLE IF EXISTS `user_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_teams` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `user_uid` int DEFAULT NULL,
  `player_uid` int DEFAULT NULL,
  `team_index` int DEFAULT NULL,
  `position` varchar(20) DEFAULT NULL,
  `order` int DEFAULT '0',
  `season` int DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  KEY `user_teams_peoples_uid_index` (`player_uid`),
  KEY `user_teams_user_uid` (`user_uid`),
  CONSTRAINT `user_teams_peoples_uid` FOREIGN KEY (`player_uid`) REFERENCES `baseball_players` (`uid`),
  CONSTRAINT `user_teams_user_uid` FOREIGN KEY (`user_uid`) REFERENCES `users` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `nickname` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `grade` varchar(10) DEFAULT 'GENERAL',
  `user_teams_uid` int DEFAULT NULL,
  `creater` varchar(20) DEFAULT NULL,
  `updater` varchar(20) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `my_team_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`),
  KEY `users_user_teams_uid_index` (`user_teams_uid`),
  CONSTRAINT `users_user_teams_uid` FOREIGN KEY (`user_teams_uid`) REFERENCES `user_teams` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 10:22:00
