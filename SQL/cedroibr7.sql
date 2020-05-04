-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Servidor: mysql.cedroinfo.com.br
-- Tempo de Geração: 24/04/2020 às 20:11
-- Versão do servidor: 10.0.30-MariaDB-cll-lve
-- Versão do PHP: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `cedroibr7`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `bank`
--

CREATE TABLE IF NOT EXISTS `bank` (
  `idbank` int(11) NOT NULL AUTO_INCREMENT,
  `namebank` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `agency` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
  `count` varchar(15) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idbank`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=12 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cashflow`
--

CREATE TABLE IF NOT EXISTS `cashflow` (
  `idcashflow` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idcompany` int(11) DEFAULT NULL COMMENT 'Codigo da empresa quando no exchange',
  `idchartaccounts` int(11) DEFAULT NULL,
  `fk_idcustomer` int(11) DEFAULT NULL,
  `customer_phone` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `fk_idtypeproduct` int(11) DEFAULT NULL,
  `fk_idproduct` int(10) DEFAULT NULL,
  `fk_idbankmaster` int(11) DEFAULT NULL,
  `fk_idbankclient` int(11) DEFAULT NULL,
  `fk_idchartaccounts` int(11) DEFAULT NULL,
  `dtcashflow` date DEFAULT NULL,
  `tchaflow` time DEFAULT NULL,
  `amountflow` double DEFAULT NULL,
  `valueflow` double(10,2) DEFAULT '0.00',
  `centsflow` double(10,2) DEFAULT '0.00',
  `cents2flow` double(10,2) DEFAULT '0.00',
  `check_number` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `percentflow` double(10,2) DEFAULT '0.00',
  `valuepercentflow` double(10,2) DEFAULT '0.00',
  `airpercentflow` double(10,2) DEFAULT '0.00',
  `aircomisvalue` double(10,2) DEFAULT '0.00',
  `airreservation` text COLLATE latin1_general_ci,
  `airdtemiuntil` date DEFAULT NULL,
  `totalflow` double(10,2) DEFAULT '0.00',
  `movetype` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  `totaltopay` double(10,2) DEFAULT '0.00',
  `cashflowok` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  `cashflowobs` tinytext COLLATE latin1_general_ci,
  `cashfloworigin` int(11) DEFAULT NULL,
  `wire` char(3) COLLATE latin1_general_ci DEFAULT NULL,
  `subtotalflow` decimal(10,2) unsigned DEFAULT NULL,
  `idlogin` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `vin` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `fk_idcountry` int(10) unsigned DEFAULT NULL,
  `fk_idmaker` int(10) unsigned DEFAULT NULL,
  `year` char(4) COLLATE latin1_general_ci DEFAULT NULL,
  `model` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `fk_idcoverage` int(10) unsigned DEFAULT NULL,
  `description` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idcashflow`),
  KEY `idcustomer` (`fk_idcustomer`),
  KEY `fk_idproduto` (`fk_idtypeproduct`),
  KEY `fk_idbank` (`fk_idbankclient`),
  KEY `fk_idbankmaster` (`fk_idbankmaster`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=225114 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `chartaccounts`
--

CREATE TABLE IF NOT EXISTS `chartaccounts` (
  `idchartaccounts` int(11) NOT NULL AUTO_INCREMENT,
  `namechartaccounts` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `io` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idchartaccounts`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=18 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `city`
--

CREATE TABLE IF NOT EXISTS `city` (
  `idcity` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name_city` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idcity`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=19 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `classcustomer`
--

CREATE TABLE IF NOT EXISTS `classcustomer` (
  `idclasscustomer` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `seeincompany` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idclasscustomer`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=19 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `coverage`
--

CREATE TABLE IF NOT EXISTS `coverage` (
  `idcoverage` int(11) NOT NULL AUTO_INCREMENT,
  `namecoverage` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idcoverage`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `idcustomer` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idcity` int(10) unsigned DEFAULT NULL,
  `fk_ididentification` int(11) DEFAULT NULL,
  `fk_idcustomer` int(11) DEFAULT NULL,
  `fk_idclasscustomer` int(11) DEFAULT NULL,
  `typecustomer` int(11) DEFAULT NULL,
  `name` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `andress` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `phone2` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `zipcode` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `city` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `state` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `dtbirth` date DEFAULT NULL,
  `numidentification` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `comissionpercent` double(10,2) DEFAULT '0.00',
  `attention` char(250) COLLATE latin1_general_ci DEFAULT NULL,
  `picture_path` varchar(200) COLLATE latin1_general_ci DEFAULT NULL,
  `active` char(1) COLLATE latin1_general_ci DEFAULT NULL,
  `restriction` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idcustomer`),
  KEY `fk_idclasscustomer` (`fk_idclasscustomer`),
  KEY `fk_idcustomer` (`fk_idcustomer`),
  KEY `fk_ididentification` (`fk_ididentification`),
  KEY `customer_FKIndex4` (`fk_idcity`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=33823 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `identification`
--

CREATE TABLE IF NOT EXISTS `identification` (
  `ididentification` int(11) NOT NULL AUTO_INCREMENT,
  `nameidentification` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`ididentification`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `licensecountry`
--

CREATE TABLE IF NOT EXISTS `licensecountry` (
  `idlicense` int(11) NOT NULL AUTO_INCREMENT,
  `namelicense` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idlicense`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=19 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `idlogin` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `senha` varchar(80) COLLATE latin1_general_ci DEFAULT NULL,
  `nome` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `perfil` char(1) COLLATE latin1_general_ci DEFAULT NULL,
  `active` char(1) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idlogin`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=148 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `maker`
--

CREATE TABLE IF NOT EXISTS `maker` (
  `idmaker` int(11) NOT NULL AUTO_INCREMENT,
  `namemaker` varchar(30) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`idmaker`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=90 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `menu_options`
--

CREATE TABLE IF NOT EXISTS `menu_options` (
  `idmenu_options` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `menu` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `menu_description` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `path` varchar(80) COLLATE latin1_general_ci DEFAULT NULL,
  `sub_menu` varchar(40) COLLATE latin1_general_ci DEFAULT NULL,
  `seq` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`idmenu_options`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=26 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `parameters`
--

CREATE TABLE IF NOT EXISTS `parameters` (
  `id_parameter` int(10) unsigned NOT NULL,
  `client` varchar(80) COLLATE latin1_general_ci DEFAULT NULL COMMENT 'nome do cliente',
  `exchange_vl_month` decimal(12,2) DEFAULT NULL,
  `exchange_vl_year` decimal(12,2) DEFAULT NULL,
  `exchange_vl_wire` decimal(12,2) DEFAULT NULL,
  `exchange_comission` decimal(12,2) DEFAULT NULL,
  `fk_idclient` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_parameter`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci COMMENT='Tabela de parametros do sistema';

-- --------------------------------------------------------

--
-- Estrutura para tabela `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `idproduct` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idtypeproduct` int(11) DEFAULT NULL,
  `nameproduct` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  `amountproduct` double DEFAULT NULL,
  `productvalue` double(10,2) NOT NULL DEFAULT '0.00',
  `percentcomis` double(10,2) NOT NULL DEFAULT '0.00',
  `percentchq` double(10,2) NOT NULL DEFAULT '0.00',
  `rule` int(11) NOT NULL DEFAULT '3',
  `movetype` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idproduct`),
  KEY `fk_idtypeproduct` (`fk_idtypeproduct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `teste`
--

CREATE TABLE IF NOT EXISTS `teste` (
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `typeproduct`
--

CREATE TABLE IF NOT EXISTS `typeproduct` (
  `idtypeproduct` int(11) NOT NULL,
  `nametypeproduct` varchar(50) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`idtypeproduct`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `wiredetail`
--

CREATE TABLE IF NOT EXISTS `wiredetail` (
  `wire_id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_idcashflow` int(11) DEFAULT NULL,
  `fk_idcountry` int(11) DEFAULT NULL,
  `qtdwire` double DEFAULT NULL,
  PRIMARY KEY (`wire_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
